// Get the form element
const form = document.getElementById('loginForm');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the username and password input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Your login logic here...
  // For demonstration purposes, I'll assume a successful login
  const isLoggedIn = true;

  if (isLoggedIn) {
    // Redirect to the text file
    window.location.href = 'text.html';
  } else {
    // Handle login failure
    console.log('Login failed');
  }
});