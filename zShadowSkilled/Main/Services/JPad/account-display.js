// Retrieve the account name from cookies
function getAccountName() {
    var cookies = document.cookie.split(';');
    var accountName = "";

    cookies.forEach(cookie => {
        var parts = cookie.split('=');
        var key = parts[0].trim();
        var value = parts[1] ? parts[1].trim() : '';

        if (key === "username") {
            accountName = value;
        }
    });

    return accountName;
}

// Display the account name in the account info section
function displayAccountName() {
    var accountNameElement = document.getElementById("account-name");
    var accountName = getAccountName();

    if (accountName) {
        accountNameElement.innerText = accountName;
    }
}

// Logic to handle logout
function logout() {
    // Clear all cookies
    document.cookie.split(';').forEach(function(c) {
        document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });

    window.location.href = "../../index.html"; // Redirect to login page after logout
}
