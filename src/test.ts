import { data } from "./lib/response";
import { getOpenClosedRanges, parseSchedule } from "@/lib/utils";
import { Schedule } from "@/lib/types";

export const test = () => {
  const bookings = [
    { start: "09:30", free: false, end: "10:05", name: "STRIKE" },
    { start: "10:30", free: false, end: "11:30", name: "Pilates £2" },
    { start: "12:15", free: false, end: "13:00", name: "Circuits" },
    { start: "18:15", free: false, end: "19:00", name: "Pump" },
    { start: "19:00", free: false, end: "19:30", name: "HIIT" },
    { start: "19:30", free: false, end: "20:00", name: "CORE" },
  ];

  console.log(fillFreeSlots(bookings));
};

interface Booking {
  free: boolean;
  start: string; // HH:MM format
  end: string; // HH:MM format
}

export const fillFreeSlots = (bookings: Booking[]): Booking[] => {
  // Sort bookings by start time
  const sortedBookings = [...bookings].sort((a, b) => a.start.localeCompare(b.start));
  const completeSchedule: Booking[] = [];
  let currentTime = "00:00";

  for (const booking of bookings) {
    // Add free slot before this booking if there's a gap
    if (currentTime < booking.start) {
      completeSchedule.push({
        free: true,
        start: currentTime,
        end: booking.start,
      });
    }

    // Add the actual booking
    completeSchedule.push(booking);

    // Update current time to end of this booking
    currentTime = booking.end;
  }

  // Add final free slot if day doesn't end with a booking
  if (currentTime < "24:00") {
    completeSchedule.push({
      start: currentTime,
      end: "24:00",
      free: true,
    });
  }

  return completeSchedule;
};

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
