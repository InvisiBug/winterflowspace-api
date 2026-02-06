import { GetBookingsAPI, Booking } from "./types";

export const getStudioBookings = async (data: GetBookingsAPI): Promise<Booking[][]> => {
  const numDays = 2;
  const studioBookings: Booking[][] = [];

  Array.from({ length: numDays }).forEach((_, dayIndex: number) => {
    const dailyStudioBookings = new Array<Booking>();

    for (const activity of data.activities) {
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

    studioBookings.push(dailyStudioBookings);
  });

  return studioBookings;
};
