function century(array) {
  let centuryArray = [];

  array.forEach((num) => {
    centuryArray.push(num * 100);
  });

  return centuryArray;
}

console.log(century([1, 2, 3, 4, 5]));

function variables() {
  const dogName = "Snoopy"
  return `${dogName} is the best`;
}

console.log(variables());

// if (true) {
//   return "puppies";
// } else if (false) {
//   return "fats";
// } else {
//   return "this";
// };

function negIndexing(array) {
  // return array[array.length - 1];
  return array.at(-1);
}

console.log(negIndexing([1,2,3]));

function sayHi() {
  console.log("hi")
}

// setInterval(sayHi, 1000);

console.log(test);

const feedMe2 = (food) => {
  return 'Thanks for the ' + food + '!';
};

const feedMe3 = food => 'Thanks for teh ' + food + '!';

function User(username, age) {
  this.username = username;
  this.age = age;
}

// User.prototype.greeting = () => {
//   return `Hello, my name is ${this.username}!`;
// }

user = new User("Taylor", 34);
