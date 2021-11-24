// Exercise 5
// Use a constructor function to create a post object
// Bulding a posting engine;

let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    { author: "a", body: "words" },
    { author: "b", body: "words2" },
  ],
  isLive: true,
};

let post = Post("a", "b", "c");

function Post(title, body, author) {
  // only pass necassary arguements - Aim to have functions with fewer perameters
  // The more perameters a function has, the harder it is to use.
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  // No Views yet.
  this.comments = [];
  // No comments yet.
  this.isLive = false;
  // Not live yet
}
