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

// Function to save the note
function saveNote() {
    var noteContent = document.getElementById("notepad").value;

    // You can implement the logic to save the note here
    // For example, you can send the note content to your server using fetch() or save it to a database
    // Make sure to handle the server-side part to actually save the note

    alert("Note saved successfully!");
}

// Display the account name on page load
document.addEventListener("DOMContentLoaded", function() {
    displayAccountName();
});
