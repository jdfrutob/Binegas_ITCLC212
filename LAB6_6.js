function formValidation() {
  var firstName = document.registration.Fname.value;
  var lastName = document.registration.LName.value;
  var email = document.registration.Email.value;
  var password = document.registration.pass.value;
  var confirmPassword = document.registration.cpass.value;
  var dateOfBirth = document.registration.DoB.value;

  if (
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    password === "" ||
    confirmPassword === "" ||
    dateOfBirth === ""
  ) {
    alert("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  var alerts = [];

  if (!isValidFirstName(firstName)) {
    alerts.push("Invalid First Name");
  }

  if (!isValidLastName(lastName)) {
    alerts.push("Invalid Last Name");
  }

  if (!isValidEmail(email)) {
    alerts.push("Invalid Email");
  }

  if (!isValidPassword(password)) {
    alerts.push("Invalid Password");
  }

  if (alerts.length > 0) {
    for (var i = 0; i < alerts.length; i++) {
      alert(alerts[i]);
    }
    return false;
  }

  return true;
}

function isValidFirstName(firstName) {
  return firstName.length >= 2;
}

function isValidLastName(lastName) {
  return lastName.length >= 2;
}

function isValidEmail(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
function isValidPassword(password) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/;
  return passwordPattern.test(password);
}
