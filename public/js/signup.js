const signupBtn = document.getElementById("signupBtn");
const signupUsername = document.getElementById("signupUsername");
const signupPassword = document.getElementById("signupPassword");

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = signupUsername.value;
  const password = signupPassword.value;
  const data = {
    username,
    password,
  };
  fetch("/signup", {
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
      alert("Failed to sign up");
    });
});
