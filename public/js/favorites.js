const deleteFavoriteBtn = document.querySelectorAll(".delete-favorite-btn");
const deleteAttendeeBtn = document.querySelectorAll(".delete-attendee-btn");
let attendeesEventList = JSON.parse(localStorage.getItem("attendees")) || [];
let favoritesEventList = JSON.parse(localStorage.getItem("favorites")) || [];


deleteFavoriteBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    if (favoritesEventList.includes(id)) {
      favoritesEventList = favoritesEventList.filter((item) => item !== id);
      localStorage.setItem("favorites", JSON.stringify(favoritesEventList));
    }

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
    if (attendeesEventList.includes(id)) {
      attendeesEventList = attendeesEventList.filter((item) => item !== id);
      localStorage.setItem("attendees", JSON.stringify(attendeesEventList));
    }

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
