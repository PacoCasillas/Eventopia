const createMyEventBtn = document.getElementById("create-event-btn");

createMyEventBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/create-event";
});
