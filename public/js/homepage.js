// const btnattend = document.querySelectorAll("#btn-attend");
const btnFavorite = document.querySelectorAll("#btn-favorite");

// ADD EVENT AS ATTENDEE TO FAVORITE PAGE
// btnattend.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     const id = e.target.dataset.id;
//     const url = `/api/attend/${id}`;
//     const method = "POST";
//     fetch(url, { method })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.success) {
//           btn.classList.add("btn-success");
//           btn.innerHTML = "Attending";
//         }
//       });
//   });
// });

// ADD TO FAVORITES
btnFavorite.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    // console.log("id", id);

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
