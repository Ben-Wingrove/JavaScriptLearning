// The this Keyword
//
// This = The OBJECT that is executing the current function

// If method -> object
// if funtion -> global (window, global)

const video = {
  title: "a",
  play() {
    console.log(this);
    // In this instance (this) references its object video {};
  },
};
video.play();

video.stop = function () {
  console.log(this);
  // in this instance (this) references its object video {};
};
video.stop();

function playVideo() {
  console.log(this);
  // In this instance (this) references the global window
}
playVideo();

function Video(title) {
  this.title = title;
  console.log(this);
  // in this instance (this) references the new empty object that was created
}
const v = new Video("Alpha");

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showT() {
    console.log(this);
    // In this instance (this) references its object video {};
  },
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this, tag);
      // In this instance (this) references the window / global
    }, this);
    // in this instance (this) references its object video {};
  },
};
video.showT();
video.showTags();

const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this, tag);
      // In this instance (this) references the window / global
    }, this);
    // in this instance (this) references its object video {};
  },
};

video.showTags();
