function formValidation() {
  var studentNumber = document.registration.StudentNumber.value;
  var name = document.registration.Name.value;
  var address = document.registration.Address.value;
  var zipCode = document.registration.Zip.value;
  var city = document.registration.City.value;
  var gender = document.registration.Gender.value;
  var course = document.registration.Course.value;
  var schedule = document.registration.Schedule.value;
  var phoneNumber = document.registration.phoneNumber.value;
  var password = document.registration.Password.value;
  var confirmPassword = document.registration.VerifyPassword.value;
  var dateOfBirth = document.registration.date.value;
  var fileToUpload = document.registration.fileToUpload.value;
  var enrollmentDate = document.registration.EnrollmentDate.value;
  var notes = document.registration.comment.value;

  if (
    studentNumber === "" ||
    name === "" ||
    address === "" ||
    zipCode === "" ||
    city === "" ||
    gender === "" ||
    course === "" ||
    schedule === "" ||
    phoneNumber === "" ||
    password === "" ||
    confirmPassword === "" ||
    dateOfBirth === "" ||
    fileToUpload === "" ||
    enrollmentDate === "" ||
    notes === ""
  ) {
    alert("Please fill in all fields");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return false;
  }

  var alerts = [];

  if (!isValidStudentNumber(studentNumber)) {
    alerts.push("Invalid Student Number");
  }

  if (!isValidName(name)) {
    alerts.push("Invalid Name");
  }

  if (!isValidAddress(address)) {
    alerts.push("Invalid Address");
  }

  if (!isValidZipCode(zipCode)) {
    alerts.push("Invalid Zip Code");
  }

  if (!isValidPhoneNumber(phoneNumber)) {
    alerts.push("Invalid Phone Number");
  }

  if (!isValidPassword(password)) {
    alerts.push("Invalid Password");
  }

  if (alerts.length > 0) {
    alert(alerts.join("\n"));
    return false;
  }

  return true;
}

function isValidStudentNumber(studentNumber) {
  if (
    typeof studentNumber !== "string" ||
    !/^\d+$/.test(studentNumber) ||
    studentNumber.length !== 9
  ) {
    return false;
  }
  return true;
}

function isValidName(name) {
  const regex = /^[a-zA-Z ]+$/;
  return regex.test(name);
}

function isValidAddress(address) {
  return true;
}

function isValidZipCode(zipCode) {
  return /^\d{5}$/.test(zipCode);
}

function isValidPhoneNumber(phoneNumber) {
  const regex = /^\d{11}$/;
  return regex.test(phoneNumber);
}

function isValidPassword(password) {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,15}$/;
  return passwordPattern.test(password);
}

var form = document.forms.registration;
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var isValid = formValidation();
  if (!isValid) {
    alert("Please fill in all fields");
  } else {
    form.submit();
  }
});
