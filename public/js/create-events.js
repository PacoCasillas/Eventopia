const submitNewEvent = document.getElementById("submit-create-event-btn");
const eventTitle = document.getElementById("event-title");
const eventStartDate = document.getElementById("event-start-date");
const eventEndDate = document.getElementById("event-end-date");
const evenStartTime = document.getElementById("event-start-time");
const eventEndTime = document.getElementById("event-end-time");
const eventDescription = document.getElementById("event-description");
const eventLocation = document.getElementById("event-location");
const eventCost = document.getElementById("event-cost");
const eventCapacity = document.getElementById("event-capacity");

submitNewEvent.addEventListener("click", (e) => {
  e.preventDefault();
  const title = eventTitle.value;
  const startDate = eventStartDate.value;
  const endDate = eventEndDate.value;
  const startTime = evenStartTime.value;
  const endTime = eventEndTime.value;
  const description = eventDescription.value;
  const location = eventLocation.value;
  const cost = eventCost.value;
  const capacity = eventCapacity.value;
  const imageURL = imageInfo;
  const data = {
    title,
    startDate,
    endDate,
    startTime,
    endTime,
    description,
    location,
    cost,
    capacity,
    imageURL,
  };
  console.log(data);
  fetch("/api/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.status === 200) {
        window.location.href = "/dashboard";
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
