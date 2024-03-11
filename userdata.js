function displayUserInfo() {
    var name = document.getElementById('name').value;
    console.log(name);
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var accountType = document.querySelector('input[name="accountType"]:checked').value;
    var countryCode = document.getElementById('countryCode').value;
    var contactNumber = document.getElementById('contactNumberInput').value;

    var userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = "<h2>User Information:</h2>" +
        "<p><strong>Name:</strong> " + name + "</p>" +
        "<p><strong>Email:</strong> " + email + "</p>" +
        "<p><strong>Password:</strong> " + password + "</p>" +
        "<p><strong>Account Type:</strong> " + accountType + "</p>" +
        "<p><strong>Contact Number:</strong> " + countryCode + " " + contactNumber + "</p>";
}