document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Clear previous error messages
    const errors = document.querySelectorAll(".error-message");
    errors.forEach(error => error.textContent = "");
  
    let isValid = true;
  
    // Username validation
    const username = document.getElementById("username").value.trim();
    if (username.length < 6 || username.length > 15) {
      showError("usernameError", "Username must be 6-15 characters.");
      isValid = false;
    }
  
    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError("emailError", "Invalid email address.");
      isValid = false;
    }
  
    // Password validation
  const password = document.getElementById("password").value.trim();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*_)[A-Za-z\d_]{9,}$/;
  if (!passwordRegex.test(password)) {
    showError(
      "passwordError",
      "Password must:\n- Have more than 8 characters\n- Contain at least one capital letter\n- Contain at least one lowercase letter\n- Contain at least one number\n- Contain an underscore (_)"
    );
    isValid = false;
  }
    // If all validations pass
    if (isValid) {
      alert("Form submitted successfully!");
      this.reset();
    }
  });
  
  // Function to show error messages with a fade-in effect
  function showError(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.opacity = "0";
    setTimeout(() => {
      errorElement.style.opacity = "1";
    }, 100);
  }
  