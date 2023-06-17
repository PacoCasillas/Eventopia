const loginBtn = document.getElementById("login-btn");
const loginUsername = document.getElementById("login-username");
const loginPassword = document.getElementById("login-password");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = loginUsername.value;
  const password = loginPassword.value;
  // Check password length
  if (password.length < 8) {
    alert("Password must be at least 8 characters long");
    return;
  }

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
      } else {
        alert("Account not found. Please sign up.");
      }
    })
    .catch((err) => {
      alert("Incorrect username or password");
    });
});
