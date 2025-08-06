    function factorial(event) {
      event.preventDefault();
      var num = document.getElementById("num1").value;
      let result;
      if (num < 0) {
        result = "und";
      } else if (num == 0 || num == 1) {
        result = 1;
      } else {
        result = 1;
        for (let i = 2; i <= num; i++) {
          result *= i;
        }
      }
      document.getElementById("result").innerHTML = `Factorial: ${result}`;
    }