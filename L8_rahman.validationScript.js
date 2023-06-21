    // JavaScript code for form validation
	// Prevent form from submitting
  function mySubmitFunction(e) {
    e.preventDefault();
    someBug();
    return false;
  }
      // Retrieve the input field value

      // Regular expression pattern for alphanumeric input

      // Check if the input value matches the pattern
      
        // Valid input: display confirmation and submit the form
        var output = document.getElementById('output');
      function getInputAndValidate() {
         let string = prompt("Enter a string to validate", "1232dwe");
         let strRegex = new RegExp(/[^a-zA-Z0-9]/);
         
         // match the regex with the string
         let result = strRegex.test(string);
         if (!result) {
            output.innerHTML += "Confirmation! Submits' the form with your email. The string " + string + " is an alphanumeric! </br>";
         } else {
            output.innerHTML += "Error Message!!The string " + string + " is not alphanumeric! </br>";
         }
      }
        // Invalid input: display error message
        function myFunction() {
          document.getElementById("demo").innerHTML = "confirmation and submit the form";
      
        }
        function validation() {
          var email = document.getElementById('email').value;
          var emailcheck = /^[A-Za-z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
        if (emailcheck.test(email)) {
            document.getElementById('email').innerHTML = "confirmation!";
          } else {
            document.getElementById('emailcheck').innerHTML = "Error Message!! Your Email-id is invalid";
            return false;
          }
          
        }