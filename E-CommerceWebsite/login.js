                                                                                                                                                                                                                                                 document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Perform login logic (e.g., send data to a server)
    console.log('Username:', username);
    console.log('Password:', password);

    // Redirect to dashboard after login
    window.location.href = 'dashboard.html'; // Replace with your redirect page
});