function searchUsers() {
    var searchQuery = document.getElementById("search-query").value;

    // Make a GET request to the endpoint to search for users
    fetch("https://socialpost.shadowbot1.repl.co?q=friendget&password=YOUR_PASSWORD&query=" + searchQuery)
        .then(response => response.text())
        .then(data => {
            var users = data.split('\n');
            var userList = document.getElementById("user-list");

            // Clear existing user list
            userList.innerHTML = '';

            // Display search results
            for (var i = 0; i < users.length; i++) {
                var user = users[i];
                if (user) {
                    var listItem = document.createElement("li");
                    listItem.textContent = user;

                    var addButton = document.createElement("button");
                    addButton.textContent = "Add Friend";
                    addButton.addEventListener("click", function() {
                        addFriend(user);
                    });

                    listItem.appendChild(addButton);
                    userList.appendChild(listItem);
                }
            }
        })
        .catch(error => console.error("Error:", error));
}

function addFriend(username) {
    // Make a GET request to add a friend
    fetch("https://socialpost.shadowbot1.repl.co?q=addfriend&password=YOUR_PASSWORD&username=" + username)
        .then(response => response.text())
        .then(data => {
            alert(data);
        })
        .catch(error => console.error("Error:", error));
}
