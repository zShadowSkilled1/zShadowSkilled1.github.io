document.addEventListener("DOMContentLoaded", function() {
    getPosts();
});

document.getElementById("dashboardButton").addEventListener("click", function() {
    // Handle Dashboard button click, if needed
});

document.getElementById("postButton").addEventListener("click", function() {
    window.location.href = "Post.html"; // Redirect to Post.html
});

function getPosts() {
    var url = "https://socialpost.shadowbot1.repl.co/?q=postget&password=YOUR_PASSWORD"; // Replace with your actual password

    fetch(url)
        .then(response => response.text())
        .then(data => {
            var posts = data.split('\n');
            var postsElement = document.getElementById('posts');
            postsElement.innerHTML = '';

            for (var i = 0; i < posts.length; i++) {
                var [username, content] = posts[i].split(':');
                var postElement = document.createElement('div');
                postElement.classList.add('posts');
                postElement.innerHTML = '<h3>' + username + '</h3><p>' + content + '</p>';
                postsElement.appendChild(postElement);
            }
        })
        .catch(error => console.error("Error:", error));
}
