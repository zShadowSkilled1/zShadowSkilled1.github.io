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

function saveNote() {
    var noteContent = document.getElementById("note-content").value;
    
    // Check if the note is empty
    if (!noteContent.trim()) {
        alert("Note is empty. Please add some content before saving.");
        return;
    }

    var blob = new Blob([noteContent], { type: "text/plain" });
    var a = document.createElement("a");
    a.href = URL.createObjectURL(blob);

    // Set a default file name (you can change this)
    var fileName = "note.txt";
    a.download = fileName;

    // Append the anchor element to the body
    document.body.appendChild(a);

    // Programmatically trigger a click event on the anchor element
    a.click();

    // Remove the anchor element from the body
    document.body.removeChild(a);
}
