function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var url = "https://socialpost.shadowbot1.repl.co/?q=get&password=YOUR_PASSWORD"; // Replace with your actual password

    fetch(url)
        .then(response => response.text())
        .then(data => {
            var accounts = data.split('\n');
            var accountExists = false;

            for (var i = 0; i < accounts.length; i++) {
                var [accountName, accountPassword] = accounts[i].split(':');
                if (accountName === username) {
                    accountExists = true;
                    break;
                }
            }

            if (accountExists) {
                alert("An account with the same name exists.");
            } else {
                // Continue with the registration process
                var registerUrl = `https://socialpost.shadowbot1.repl.co/?q=create&account_name=${username}&account_password=${password}&password=YOUR_PASSWORD`; // Replace with your actual password

                fetch(registerUrl)
                    .then(response => response.text())
                    .then(responseData => {
                        alert(responseData); // Display response message
                        if (responseData.includes("created successfully")) {
                            window.location.href = "Main/Home/welcome.html"; // Redirect after successful registration
                        }
                    })
                    .catch(error => console.error("Error:", error));
            }
        })
        .catch(error => console.error("Error:", error));
}
