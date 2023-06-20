const btnattend = document.querySelectorAll("#btn-attend");
const btnFavorite = document.querySelectorAll("#btn-favorite");
let attendeesEventList = JSON.parse(localStorage.getItem("attendees")) || [];
let favoritesEventList = JSON.parse(localStorage.getItem("favorites")) || [];

// ADD TO ATTENDEES
btnattend.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (attendeesEventList.includes(id)) {
      alert("You are already attending this event!");
      return;
    }
    attendeesEventList.push(id);
    localStorage.setItem("attendees", JSON.stringify(attendeesEventList));
    fetch("/api/attendees", {
      method: "POST",
      body: JSON.stringify({
        event_id: parseInt(id),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        // ALERT USER THAT THEY ARE ATTENDING THE EVENT
        alert("You are now attending this event!");
        return response.json(); // Parse the response body as JSON
      })
      // Here, 'data' contains the parsed response data
      .catch((err) => {
        console.error(err);
      });
  });
});

// ADD TO FAVORITES
btnFavorite.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (favoritesEventList.includes(id)) {
      alert("You already favorited this event!");
      return;
    }
    favoritesEventList.push(id);
    localStorage.setItem("favorites", JSON.stringify(favoritesEventList));
    fetch("/api/favorites", {
      method: "POST",
      body: JSON.stringify({
        event_id: parseInt(id),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not OK");
        }
        alert("You favorited an event!");
        return response.json(); // Parse the response body as JSON
      })
      // Here, 'data' contains the parsed response data
      .catch((err) => {
        console.error(err);
      });
  });
});
