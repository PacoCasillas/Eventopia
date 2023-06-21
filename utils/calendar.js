const { google } = require("googleapis");
require("dotenv").config();

const CREDENTIALS = JSON.parse(process.env.CREDENTIALS);
const calendarId = process.env.CALENDAR_ID;

const SCOPES = "https://www.googleapis.com/auth/calendar";
const calendar = google.calendar("v3");

const auth = new google.auth.JWT(
  CREDENTIALS.client_email,
  null,
  CREDENTIALS.private_key,
  SCOPES
);

const insertEvent = async (event) => {
  try {
    let response = await calendar.events.insert({
      auth: auth,
      calendarId: calendarId,
      resource: event,
    });
    if (response.status == 200) {
      return 1;
    } else {
      return 0;
    }
  } catch (err) {
    console.log(err);
  }
};

function parseEvent(
  title,
  location,
  description,
  startDate,
  endDate,
  startTime,
  endTime
) {
  let event = {
    summary: title,
    location: location,
    description: description,
    start: {
      dateTime: startDate + "T" + startTime + ":00+00:00",
      timeZone: "America/New_York",
    },
    end: {
      dateTime: endDate + "T" + endTime + ":00+00:00",
      timeZone: "America/New_York",
    },
  };
  return event;
}

module.exports = {
  insertEvent,
  parseEvent,
};
