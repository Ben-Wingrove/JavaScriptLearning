// Changing this
//
// How to change the value of this
//
// Option X - Do not use
// Declare
const self = this;

// Option 1 - .bind     ({ })
//Returns new function and sets this to be whatever we have told it to be.

// Option 1.5 - .call     ({ }, 1, 2)
// Pass object, that will be referenced
// Option 1.5 - .apply    ({ }, [1, 2])
// pass object, arguments need to be passed as Array

// Option 2 -  =>          This is inherited through the arrow function

// Option X - DO NOT USE
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};
video.showTags();

// Option 1 - .bind

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};
video.showTags();

// Option 1 - .bind /.call /.apply

function playVideo() {
  console.log(this);
}
playVideo.call({ name: "Socks" });
// Calls this as "{name:'Socks'}"
playVideo.apply({ name: "Smidge" });
// Applys this as "{name:"Smidge"}
const fn = playVideo.bind({ name: "Cats" });
fn();

// Option 2 - Arrow Function =>
// (Inherit This)

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};
video.showTags();
