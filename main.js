    function validateUsername() {
        var usernameInput = document.getElementById("username");
        var usernameError = document.getElementById("usernameError");

        var usernameValue = usernameInput.value.trim();

        if (usernameValue.length < 3) {
            usernameInput.style.borderColor = "red";
            usernameError.textContent = "Atleast 3 characters";
        } else {
            usernameInput.style.borderColor = "green";
            usernameError.textContent = "";
        }
    }

 function validateEmail() {
    var emailInput = document.getElementById("email");
    var emailError = document.getElementById("emailError");

    var emailValue = emailInput.value.trim();

    if (emailValue.length < 3) {
        emailInput.style.borderColor = "red";
    } 
    else {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        if (!emailPattern.test(emailValue)) {
            emailInput.style.borderColor = "red";
            emailError.textContent = "Invalid email format";
        } else {
            emailInput.style.borderColor = "green";
            emailError.textContent = "";
        }
    }
}


    function validatePassword() {
        var passwordInput = document.getElementById("password");
        var passwordError = document.getElementById("passwordError");

        var passwordValue = passwordInput.value;

        if (passwordValue.length < 6 || /\s/.test(passwordValue)) {
            passwordInput.style.borderColor = "red";
            passwordError.textContent = "Atleast 6 characters";
        } else {
            passwordInput.style.borderColor = "green";
            passwordError.textContent = "";
        }
    }

// focus email

function moveLabelUp(inputId) {
  const input = document.getElementById(inputId);
  const label = input.nextElementSibling;

  label.style.transform = 'translateY(-20px)';
  label.style.color = '#ff652f';
  label.style.fontSize = '0.8rem';
}
