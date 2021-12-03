//Function inside object

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  fullName: function () {
    return `${person.firstName} ${person.lastName}`;
  },
};

// fullName: function() {}
// and
// fullName () {}
// operate exactly the same.

const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
};
