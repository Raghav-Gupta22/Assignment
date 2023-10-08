document.getElementById('surveyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var dob = document.getElementById('dob').value;
    var country = document.getElementById('country').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var profession = document.getElementById('profession').value;
    var email = document.getElementById('email').value;
    var mobileNumber = document.getElementById('mobileNumber').value;

    var formValues = 'First Name: ' + firstName + '\n' +
                     'Last Name: ' + lastName + '\n' +
                     'Date of Birth: ' + dob + '\n' +
                     'Country: ' + country + '\n' +
                     'Gender: ' + gender + '\n' +
                     'Profession: ' + profession + '\n' +
                     'Email: ' + email + '\n' +
                     'Mobile Number: ' + mobileNumber;

    alert(formValues);

    document.getElementById('surveyForm').reset();
});
