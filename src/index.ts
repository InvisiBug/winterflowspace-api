import express, { json } from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(json());
app.use(cors());

app.post("/get-schedule", async (req, res) => {
  console.log("Something is fetching");

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
    });
  }
});

app.get("/get-gyms", async (_, res) => {
  console.log("fetching gyms");
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
  console.log("Logging in user");
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
  console.log(`Server running on port ${PORT}`);
});
