function checkUsername() {
  var username = document.getElementById("username").value;

  // Send an HTTP GET request to the server-side script
  fetch("https://zshadowskilled1.github.io/username-checker/username-checker.php?username=" + encodeURIComponent(username))
    .then(response => response.text())
    .then(data => {
      if (data === "exists") {
        document.getElementById("result").textContent = "This username is in the database.";
      } else if (data === "added") {
        document.getElementById("result").textContent = "Username added to the database.";
      } else {
        document.getElementById("result").textContent = "Error occurred.";
      }
    })
    .catch(error => {
      console.error(error);
    });
}
