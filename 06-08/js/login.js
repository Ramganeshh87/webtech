function validateLogin() {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const usernameRegex = /^[a-zA-Z0-9_]{3,15}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    if (!usernameRegex.test(username)) {
        alert("Username must be 3–15 characters");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 6 characters");
        return false;
    }
    alert("Login successful!");
    return true;
}
