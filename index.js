// Fetch posts
function getPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => {
      displayPosts(data);
    })
    .catch(error => {
      console.error("Error fetching posts:", error);
    });
}

// Display posts
function displayPosts(posts) {
  const postList = document.getElementById("post-list");

  posts.forEach(post => {
    const li = document.createElement("li");
    const title = document.createElement("h1");
    const body = document.createElement("p");

    title.textContent = post.title;
    body.textContent = post.body;

    li.appendChild(title);
    li.appendChild(body);
    postList.appendChild(li);
  });
}

// Call function
getPosts();