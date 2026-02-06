import express, { json } from "express";
import cors from "cors";
import { getStudioBookings } from "./lib/utils";
import { GetBookingsAPI, GetGymsAPI, GetGymsResponse, GetOccupantsAPI, LoginAPI } from "srclib/types";

const app = express();

const PORT = 3000;

app.use(json());
app.use(cors());

app.post("/get-bookings", async (req, res) => {
  try {
    const response = await fetch(`https://businessgateway.puregym.com/api/bookings/v1/timetable/${req.body.gymId}/scheduled-class`, { cache: "no-store" });
    const jsonResponse: GetBookingsAPI = await response.json();

    const bookings = await getStudioBookings(jsonResponse);

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
    const jsonResponse: GetGymsAPI = await rawAvailableGymsResponse.json();

    const response: GetGymsResponse = [];

    //* Format the available gyms data
    jsonResponse.data.allGym.nodes?.forEach((gym) => {
      response.push({ name: gym.name, id: gym.gymId });
      response.sort((a, b) => a.name.localeCompare(b.name));
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

    const response = await fetch(`https://capi.puregym.com/api/v2/gymSessions/gym?gymId=${gymId}`, { cache: "no-store", headers });
    const parsedGymData: GetOccupantsAPI = await response.json();

    const occupants = parsedGymData.TotalPeopleInGym;

    res.json({
      status: "success",
      occupants,
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

    const { access_token: token }: LoginAPI = await loginToken.json();

    res.json({
      status: "success",
      token,
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
