function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var url = "https://socialpost.shadowbot1.repl.co/?q=get&password=YOUR_PASSWORD"; // Replace with your actual password
    fetch(url)
        .then(response => response.text())
        .then(data => {
            var accounts = data.split('\n');
            for (var i = 0; i < accounts.length; i++) {
                var [accountName, accountPassword] = accounts[i].split(':');
                if (accountName === username && accountPassword === password) {
                    alert("Login successful!");
                    window.location.href = "Main/Dashboard.html"; // Redirect after successful login
                    return;
                }
            }
            alert("Invalid username or password.");
        })
        .catch(error => console.error("Error:", error));
}
