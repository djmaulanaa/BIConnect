document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const errorMsg = document.getElementById("error");
    const loginScreen = document.getElementById("login-screen");
    const appContent = document.getElementById("app-content");
    const welcomePopup = document.getElementById("welcome-popup");
    const welcomeMessage = document.getElementById("welcome-message");
    const closePopupBtn = document.getElementById("close-popup");
    const logoutBtn = document.getElementById("logout-btn");
  
    // ✅ List of allowed users
    const users = [
      { username: "11008182", password: "190500" },
      { username: "11004867", password: "130299" },
      { username: "11005511", password: "161199" },
      { username: "63500", password: "ckjuara01" },  
      { username: "11007210", password: "ckjuara01" },  
      { username: "10477", password: "ckjuara01" },  
      { username: "26570", password: "ckjuara01" },  
      { username: "18619", password: "ckjuara01" }

    ];
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      // ✅ Check if the user exists
      const user = users.find(u => u.username === username && u.password === password);
  
      if (user) {
        loginScreen.style.display = "none";
        appContent.style.display = "block";
        welcomeMessage.textContent = `Welcome, ${username}! You have successfully logged in.`;
        welcomePopup.classList.remove("hidden");
        errorMsg.style.display = "none";
      } else {
        errorMsg.style.display = "block";
      }
    });
  
    closePopupBtn.addEventListener("click", () => {
      welcomePopup.classList.add("hidden");
    });
  
    logoutBtn.addEventListener("click", () => {
      appContent.style.display = "none";
      loginScreen.style.display = "flex";
      loginForm.reset();
      errorMsg.style.display = "none";
    });
  });
  
