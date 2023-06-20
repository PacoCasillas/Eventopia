const deleteFavoriteBtn = document.querySelectorAll(".delete-favorite-btn");
const deleteAttendeeBtn = document.querySelectorAll(".delete-attendee-btn");

deleteFavoriteBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    console.log(id);
    fetch(`/api/favorites/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          window.location.href = "/favorites";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

deleteAttendeeBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    fetch(`/api/attendees/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          window.location.href = "/favorites";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
