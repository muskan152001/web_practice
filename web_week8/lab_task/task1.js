document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const logoutBtn = document.getElementById('logout-btn');
    
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
      showLogoutUI();
    } else {
      showLoginUI();
    }
  
    // Login function
    function login(username, password) {
      // You may implement your own authentication logic here
      // For demo purposes, we'll just check if the username and password match
      if (username === 'admin' && password === 'password') {
        localStorage.setItem('isLoggedIn', true);
        showLogoutUI();
      } else {
        alert('Invalid username or password');
      }
    }
  
    // Logout function
    function logout() {
      localStorage.removeItem('isLoggedIn');
      showLoginUI();
    }
  
    // Event listener for login form submission
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;
      login(username, password);
    });
  
    // Event listener for logout button
    logoutBtn.addEventListener('click', function() {
      logout();
    });
  
    // Function to display login UI
    function showLoginUI() {
      loginForm.style.display = 'block';
      logoutBtn.style.display = 'none';
    }
  
    // Function to display logout UI
    function showLogoutUI() {
      loginForm.style.display = 'none';
      logoutBtn.style.display = 'block';
    }
  });
  