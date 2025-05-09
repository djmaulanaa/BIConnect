document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const errorMsg = document.getElementById("error");

  const users = [
    { username: "11008182", password: "190500" },
    { username: "11004867", password: "130299" },
    { username: "11005511", password: "161199" },
    { username: "63500", password: "ckjuara01" },  
    { username: "11007210", password: "ckjuara01" },  
    { username: "10477", password: "ckjuara01" },  
    { username: "26570", password: "ckjuara01" },  
    { username: "18619", password: "ckjuara01" }, 
    { username: "11005510", password: "ckjuara01" },
    { username: "PCS", password: "ckjuara01" },
    { username: "51179", password: "ckjuara01" },
    { username: "51364", password: "ckjuara01" },
    { username: "26570", password: "12345" },
    { username: "MeidiWibowo", password: "12345" }

  ];

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
      localStorage.setItem("loggedInUser", username);

      // Tambahkan efek fade-out sebelum redirect
      const body = document.getElementById("body");
      body.classList.add("opacity-0");

      // Tunggu animasi selesai, lalu redirect
      setTimeout(() => {
        window.location.href = "login.html"; // atau index.html
      }, 500); // sesuai durasi animasi (700ms)
    } else {
      errorMsg.style.display = "block";
    }
  });
});
