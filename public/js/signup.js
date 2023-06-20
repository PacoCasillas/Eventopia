const signupBtn = document.getElementById("signup-btn");
const signupUsername = document.getElementById("signup-username");
const signupPassword = document.getElementById("signup-password");
const signupPassword2 = document.getElementById("signup-password-confirm");

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = signupUsername.value;
  const password = signupPassword.value;
  const password2 = signupPassword2.value;
  if (!username || !password || !password2) {
    alert("Please fill out all fields");
    return;
  }
  if (password.length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }
  if (password !== password2) {
    alert("Passwords do not match");
    return;
  }
  const data = {
    username,
    password,
  };
  fetch("/api/signup", {
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
