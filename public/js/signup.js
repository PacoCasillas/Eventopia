const signupBtn = document.getElementById("signup-btn");
const signupUsername = document.getElementById("signup-username");
const signupPassword = document.getElementById("signup-password");

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const username = signupUsername.value;
  const password = signupPassword.value;
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
