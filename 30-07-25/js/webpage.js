function validateRegistration() {
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            if(username===""){
                alert("enter username");
            }
            if(email===""){
                alert("Enter email");
            }
            if(password.length<6){
                alert("pswd must be 6 ways");
            }
            if (password !== confirmPassword) {
                alert("Pswd do not match!");
                return false;
            }
            alert("Registration sucess")
        }
