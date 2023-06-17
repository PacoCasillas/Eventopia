const btnattend = document.querySelectorAll("#btn-attend");
const btnFavorite = document.querySelectorAll("#btn-favorite");

// ADD TO ATTENDEES
btnattend.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    // console.log("id", id);

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
        return response.json(); // Parse the response body as JSON
      })
      // Here, 'data' contains the parsed response data
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
});

// ADD TO FAVORITES
btnFavorite.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.dataset.id;

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
        return response.json(); // Parse the response body as JSON
      })
      // Here, 'data' contains the parsed response data
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  });
});
