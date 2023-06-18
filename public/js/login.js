const loginBtn = document.getElementById("login-btn");
const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginUsername.value;
  const password = loginPassword.value;
  const data = {
    username,
    password,
  };
  fetch("/api/login", {
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
      alert("Incorrect username or password");
    });
});
