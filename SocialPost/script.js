function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Read the API endpoint and password from endpoint.txt
    fetch('endpoint.txt')
        .then(response => response.text())
        .then(data => {
            var [endpoint, apiPassword] = data.split('&password=');

            if (password === apiPassword) {
                // Make an API request to check the account
                var url = endpoint;
                fetch(url)
                    .then(response => response.text())
                    .then(data => {
                        var accounts = data.split('\n');
                        for (var i = 0; i < accounts.length; i++) {
                            var [accountName, accountPassword] = accounts[i].split(':');
                            if (accountName === username && accountPassword === password) {
                                alert("Login successful!");
                                return;
                            }
                        }
                        alert("Invalid username or password.");
                    })
                    .catch(error => console.error("Error:", error));
            } else {
                alert("Invalid API password.");
            }
        })
        .catch(error => console.error("Error:", error));
}
