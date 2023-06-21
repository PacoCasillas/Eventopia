const submitUpdateBtn = document.getElementById("submit-update-btn");
const eventTitle = document.getElementById("event-title");
const eventStartDate = document.getElementById("event-start-date");
const eventEndDate = document.getElementById("event-end-date");
const evenStartTime = document.getElementById("event-start-time");
const eventEndTime = document.getElementById("event-end-time");
const eventDescription = document.getElementById("event-description");
const eventLocation = document.getElementById("event-location");
const eventCost = document.getElementById("event-cost");
const eventCapacity = document.getElementById("event-capacity");

submitUpdateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let eventID = submitUpdateBtn.getAttribute("data-id");
  const title = eventTitle.value;
  const startDate = eventStartDate.value;
  const endDate = eventEndDate.value;
  const startTime = evenStartTime.value;
  const endTime = eventEndTime.value;
  const description = eventDescription.value;
  const location = eventLocation.value;
  const cost = eventCost.value;
  const capacity = eventCapacity.value;
  const imageUrl = imageInfoUpload;
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
    imageUrl,
  };

  fetch("/api/events/" + eventID, {
    method: "PUT",
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
