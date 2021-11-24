// Exercise 4

// Create blogpost object with these properties
// title
// body
// author
// views
// comments
// (author, body)
// isLive (T / F)

// Attempt 1
const blogPost = {
  title: "Dogs",
  body: "blah blah blah dogs",
  author: "Dogma Mckarthy",
  views: 1000,
  comments: {
    author: "Suzie Dogsbane",
    body: "heck u dogma",
  },
  isLive: false,
};
console.log(blogPost);

// Feedback
// 90% of the way there. derped out on the requirements there.
// line 18-21 is off.
// Wanted a list of comments, each with an  author + body
// Dont forget propper punctuation.

// Attempt 2; Post Feedback
const blogPost = {
  title: "Dogs",
  body: "blah blah blah dogs",
  author: "Dogma Mckarthy",
  views: 1000,
  comments: [
    { author: "Suzie Dogsbane", body: "heck u dogma" },
    { author: "Suzie Dogsbane2", body: "heck u dogma1!" },
  ],
  isLive: false,
};
console.log(blogPost);
