document.getElementById("saveBtn").addEventListener("click", function () {
  const emailInput = document.getElementById("emailInput");
  const email = emailInput.value.trim();

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  // Log the email to the console
  console.log(`Email entered: ${email}`);

  // Clear the input field
  emailInput.value = "";

  // Scroll to the bottom of the page
  window.scrollTo(0, document.body.scrollHeight);
});