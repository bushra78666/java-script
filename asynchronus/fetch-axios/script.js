const url = "https://jsonplaceholder.typicode.com/posts";
 function fetchRandomPost() {
    fetch(url)
        .then(response => response.json())  
        .then(posts => {
          
            const user1 = Math.floor(Math.random() * posts.length);
            const user = posts[user1];
            console.log(`id :${user .id}`);
            console.log(`title :${user.title}`);
            console.log(`body: ${user.body}`);
        })
        .catch(error => console.log("Error:", error));
}


fetchRandomPost();




 const url1 = "https://jsonplaceholder.typicode.com/posts";

function fetchRandomPost() {
    axios.get(url)
        .then(response => { 
            const posts = response.data;
            const user1 = Math.floor(Math.random() * posts.length);
            const user = posts[user1];
            console.log(`id :${user .id}`);
            console.log(`title :${user.title}`);
            console.log(`body: ${user.body}`);
        })
        .catch(error => console.log("Error:", error));
}


fetchRandomPost();