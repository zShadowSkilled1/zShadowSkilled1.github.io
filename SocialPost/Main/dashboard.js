document.addEventListener("DOMContentLoaded", function() {
    getPosts();
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
                postElement.classList.add('post');
                postElement.innerHTML = '<h3>' + username + '</h3><p>' + content + '</p>';
                postsElement.appendChild(postElement);
            }
        })
        .catch(error => console.error("Error:", error));
}
