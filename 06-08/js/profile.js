       function validateProfile() {
            const email = document.getElementById('profileEmail').value;
            const newPassword = document.getElementById('newPassword').value;
            const confirmPassword = document.getElementById('confirmNewPassword').value;
            const emailRegex=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
            const passwordRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]$/;
            if(!emailRegex.test(email)){
                alert("Invalid Email");
            }
            if(!passwordRegex.test(newPassword)){
                alert("Invalid Password");
            }
            if (newPassword !== confirmPassword) {
                alert("Passwords do not match!");
                return false;
            }
            alert("Profile updated successfully!");
            return true;
        }