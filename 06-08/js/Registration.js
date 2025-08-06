function validateRegistration() {
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const usernameRegex=/^[a-zA-Z0-9]{3,16}$/;
            const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-z]$/;
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
            if(!usernameRegex.test(username)){
                alert("enter username");
            }
            if(!emailRegex.test(email)){
                alert("Enter email");
            }
            if(!passwordRegex.test(password)){
                alert("pswd must be 6 ways");
            }
            if (password !== confirmPassword) {
                alert("Pswd do not match!");
                return false;
            }
            alert("Registration sucess")
        }
