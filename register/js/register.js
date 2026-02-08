function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirm = document.getElementById('confirm').value;
    const errorElement = document.getElementById('error');

    // Reset error display
    errorElement.style.display = "none";

    if (username.length === 0) {
        showError("Username is required");
    } else if (password.length === 0) {
        showError("Password is required");
    } else if (confirm.length === 0) {
        showError("Please confirm your password");
    } else if (password !== confirm) {
        showError("Passwords do not match");
    } else {
        alert('Registered successfully!');
    }
}

function showError(message) {
    const errorElement = document.getElementById('error');
    errorElement.innerHTML = message;
    errorElement.style.display = "block";
}