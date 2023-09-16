

const show = (x) => { console.log('Result: ' + x); }
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

Person.nationality = "English";
show(myFather.nationality);

Person.prototype.nationality = "English";
show(myFather.nationality);

Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

show(myMother.fullName());

//JavaScript Iterables

for (const x of "Google.com") {
  console.log(x + "-");
}

for (const x in [1, 2, 3, 4, 5]) {
  console.log(x);
}

function myNumber() {
  let n = 0;
  return {
    next: function () {
      n += 10;
      return { value: n, done: false };
    }
  };
}

const n = myNumber();
show(n.next().value);
show(n.next().value);
show(n.next().value);

const myNum = {};
myNum[Symbol.iterator] = function () {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 10) { done = true }
      return { value: n, done: done }
    }
  }
}

let iterator=myNum[Symbol.iterator]();
while(true){
  const result=iterator.next();
  if(result.done) break;
}

