
        function validateLogin() {
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            if (username === "" || password === "") {
                alert("Please fill username and password.");
                return false;
            }
            alert("Login successful!");
            return true;
        }