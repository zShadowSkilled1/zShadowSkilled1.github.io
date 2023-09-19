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
                    setLoginCookies(username, password); // Save login information to cookies
                    window.location.href = "Main/Home/welcome.html"; // Redirect after successful login
                    return;
                }
            }
            alert("Invalid username or password.");
        })
        .catch(error => console.error("Error:", error));
}

function setLoginCookies(username, password) {
    document.cookie = `username=${username}`;
    document.cookie = `password=${password}`;
}

function register() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var url = "https://socialpost.shadowbot1.repl.co/?q=create&account_name=" + username + "&account_password=" + password + "&password=YOUR_PASSWORD"; // Replace with your actual password

    fetch(url)
        .then(response => response.text())
        .then(data => {
            alert(data); // Display response message
            if (data.includes("created successfully")) {
                window.location.href = "Main/Home/welcome.html"; // Redirect after successful registration
            }
        })
        .catch(error => console.error("Error:", error));
}
