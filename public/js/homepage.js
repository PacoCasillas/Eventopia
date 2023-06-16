const btnattend = document.querySelectorAll("#btn-attend");
const btnfavorite = document.querySelectorAll("#btn-favorite");

// ADD EVENT AS ATTENDEE TO FAVORITE PAGE
btnattend.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    const url = `/api/events/${id}/attend`;
    const method = "POST";
    fetch(url, { method })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          btn.classList.add("btn-success");
          btn.innerHTML = "Attending";
        }
      });
  });
});

// ADD EVENT AS FAVORITE TO FAVORITE PAGE
btnfavorite.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    const url = `/api/events/${id}/favorite`;
    const method = "POST";
    fetch(url, { method })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          btn.classList.add("btn-success");
          btn.innerHTML = "Favorite";
        }
      });
  });
});
