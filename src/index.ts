import express, { json } from "express";
import cors from "cors";
import { Booking } from "srclib/types";
const app = express();

const PORT = 3000;

app.use(json());
app.use(cors());

app.post("/get-schedule", async (req, res) => {
  try {
    const response = await fetch(`https://businessgateway.puregym.com/api/bookings/v1/timetable/${req.body.gymId}/scheduled-class`, { cache: "no-store" });
    const jsonResponse = await response.json();

    res.json({
      status: "success",
      schedule: jsonResponse,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error fetching schedule",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.post("/get-bookings", async (req, res) => {
  try {
    const response = await fetch(`https://businessgateway.puregym.com/api/bookings/v1/timetable/${req.body.gymId}/scheduled-class`, { cache: "no-store" });
    const jsonResponse = await response.json();

    const bookings = await getStudioBookings(jsonResponse);
    console.log("🚀 ~ bookings:", bookings);

    res.json({
      status: "success",
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error fetching schedule",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
});

app.get("/get-gyms", async (_, res) => {
  try {
    const rawAvailableGymsResponse = await fetch("https://www.puregym.com/gymsandcities/page-data/sq/d/273207268.json", { cache: "no-store" });
    const formattedAvailableGymResponse = await rawAvailableGymsResponse.json();

    const response: any = [];

    //* Format the available gyms data
    formattedAvailableGymResponse.data.allGym.nodes?.forEach((gym: any) => {
      response.push({ name: gym.name, id: gym.gymId });
      response.sort((a: any, b: any) => a.name.localeCompare(b.name));
    });

    res.json({
      status: "success",
      gyms: response,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "error",
      message: "Error fetching gyms",
    });
  }
});

app.post("/get-occupants", async (req, res) => {
  try {
    const { token, gymId } = req.body;

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "PureGym/1523 CFNetwork/1312 Darwin/21.0.0",
      Authorization: `Bearer ${token}`,
    };

    const gymData = await fetch(`https://capi.puregym.com/api/v2/gymSessions/gym?gymId=${gymId}`, {
      cache: "no-store",
      headers,
    });

    const parsedGymData = await gymData.json();

    const result = parsedGymData.TotalPeopleInGym;

    res.json({
      status: "success",
      occupants: result,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error fetching occupants",
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const data = {
      grant_type: "password",
      username,
      password,
      scope: "pgcapi",
      client_id: "ro.client",
    };

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      "User-Agent": "PureGym/1523 CFNetwork/1312 Darwin/21.0.0",
      Authorization: "",
    };

    const loginToken = await fetch("https://auth.puregym.com/connect/token", {
      method: "POST",
      cache: "no-store",
      headers,
      body: new URLSearchParams(data).toString(),
    });
    const { access_token } = await loginToken.json();

    res.json({
      status: "success",
      token: access_token,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error fetching occupants",
    });
  }
});

// Health check endpoint
app.get("/health", (_, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT} 📡`);
});

// dunno why this isnt working with the import
export const getStudioBookings = async (data: any): Promise<Booking[][]> => {
  const numDays = 2;
  const studioBookings: Booking[][] = [];
  const activities = data.activities;

  Array.from({ length: numDays }).forEach((_, dayIndex: number) => {
    const dailyStudioBookings = new Array<Booking>();

    // activities.forEach((activity: any) => {
    for (const activity of activities) {
      if (activity.studio.toUpperCase() === "STUDIO") {
        // Check if activity is today
        const activityDate = new Date(activity.startDateTime.dateTime).toDateString();

        const d = new Date();
        const now = new Date(d.setDate(d.getDate() + dayIndex)).toDateString();

        if (activityDate == now) {
          const rawStartTime = activity.startDateTime.dateTime.replace("T", " "); // They keep changing the date format so pulled it out here

          const startTime = new Date(rawStartTime);
          const endTime = new Date(startTime.getTime() + activity.duration * 60000);

          const startHours = String(startTime.getHours()).padStart(2, "0");
          const startMinutes = String(startTime.getMinutes()).padStart(2, "0");

          const endHours = String(endTime.getHours()).padStart(2, "0");
          const endMinutes = String(endTime.getMinutes()).padStart(2, "0");

          dailyStudioBookings.push({
            start: `${startHours}:${startMinutes}`,
            free: false,
            end: `${endHours}:${endMinutes}`,
          });
        }
      }
    }
    // console.log("🚀 ~ getStudioFreeTime ~ studioBookings:", studioBookings);
    studioBookings.push(dailyStudioBookings);
  });

  console.log("🚀 ~ getStudioBookings ~ studioBookings:", studioBookings[1]);
  return studioBookings;
};
