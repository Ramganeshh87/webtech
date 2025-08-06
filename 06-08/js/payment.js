function validatePayment() {
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const expiryDate = document.getElementById("expiryDate").value.trim();
    const cvv = document.getElementById("cvv").value.trim();
    const cardNumberRegex = /^\d{16}$/;              
    const expiryDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; 
    const cvvRegex = /^\d{3}$/;                   
    if (!cardNumberRegex.test(cardNumber)) {
        alert("Please enter a valid 16-digit card number");
        return false;
    }
    if (!expiryDateRegex.test(expiryDate)) {
        alert("Please enter expiry date in MM/YY format");
        return false;
    }
    if (!cvvRegex.test(cvv)) {
        alert("Please enter a valid 3-digit CVV");
        return false;
    }
    alert("Payment validated successfully!");
    return true;
}
