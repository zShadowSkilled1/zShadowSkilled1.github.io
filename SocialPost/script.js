function generateAndLogin() {
    var username = document.getElementById("username").value;

    // Generate a random password
    var randomPassword = generateRandomPassword();

    // Store the generated password in the hidden input field
    document.getElementById("generatedPassword").value = randomPassword;

    // Make the API request with the generated password
    var url = "https://socialpost.shadowbot1.repl.co/?q=get&password=" + encodeURIComponent(randomPassword);

    fetch(url)
        .then(response => response.text())
        .then(data => {
            var accounts = data.split('\n');
            for (var i = 0; i < accounts.length; i++) {
                var [accountName, accountPassword] = accounts[i].split(':');
                if (accountName === username && accountPassword === randomPassword) {
                    alert("Login successful!");
                    return;
                }
            }
            alert("Invalid username or password.");
        })
        .catch(error => console.error("Error:", error));
}

function generateRandomPassword() {
    // Generate a random password, e.g., using Math.random() or a library
    // For simplicity, here's a basic example:
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var length = 8; // Adjust the length of the password as needed
    var randomPassword = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        randomPassword += characters.charAt(randomIndex);
    }
    return randomPassword;
}
