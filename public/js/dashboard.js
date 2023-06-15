const createEventBtn = document.getElementById("create-event-btn");

createEventBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/create-event";
});
