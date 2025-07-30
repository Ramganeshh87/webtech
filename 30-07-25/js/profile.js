       function validateProfile() {
            const email = document.getElementById('profileEmail').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmNewPassword').value;
            if(email===""){
                alert("Enter email");
            }
            if(password.length<6){
                alert("pswd must be 6 ways");
            }
            if (newPassword !== confirmPassword) {
                alert("Passwords do not match!");
                return false;
            }
            alert("Profile updated successfully!");
            return true;
        }