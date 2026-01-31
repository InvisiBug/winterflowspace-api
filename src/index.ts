import express, { json } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

// Route to fetch data from a URL
app.get("/fetch-schedule", async (req, res) => {
  try {
    const { url } = req.query;

    if (!url) {
      return res.status(400).json({ error: "URL parameter is required" });
    }

    // const response = await get(url);
    // res.json({
    //   status: "success",
    //   data: response.data,
    // });
  } catch (error) {
    res.status(500).json({
      status: "error",
      // message: error.message,
    });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  console.log(await requestData());
});

const requestData = async () => {
  const rawGymSchedule = await fetch(
    `https://businessgateway.puregym.com/api/bookings/v1/timetable/${50}/scheduled-class`,
    { cache: "no-store" },
  );
  const gymSchedule = await rawGymSchedule.json();
  return { gymSchedule };
};
