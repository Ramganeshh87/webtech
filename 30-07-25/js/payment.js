        function validatePayment() {
            const cardNumber = document.getElementById('cardNumber').value;
            const expiryDate = document.getElementById('expiryDate').value;
            const cvv = document.getElementById('cvv').value;
            if (cardNumber.length !== 16) {
                alert("Card number must be 16 digits");
                return false;
            }
            if (expiryDate === "") {
                alert("Expiry date is required");
                return false;
            }
            if (cvv.length !== 3) {
                alert("CVV must be 3 digits");
                return false;
            }
            alert("Payment successful!");
            return true;
        }