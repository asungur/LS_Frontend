// Object literal
// let me = {
//   firstName: 'Jane',
//   lastName: 'Doe',
// };
// OR
// Define via dot notation
let me = {};
me.firstName = 'Jane';
me.lastName = 'Doe';

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

// fullName(me);

let friend = {
  firstName: 'John',
  lastName: 'Smith',
};

// fullName(friend);

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

// fullName(mother); // => Amber Doe
// fullName(father); // => Shane Doe

// people = [];

// people.push(me);
// people.push(friend);
// people.push(mother);
// people.push(father);

// function rollCall(collection) {
//   // collection.forEach(function(item) {
//   //   fullName(item);
//   // });
//   collection.forEach(fullName);
// }

// rollCall(people);

// That's a significant improvement over our original for loop, but we can go even further. For example, let's package our collection and functions together:

// create an object named people,
// create a collection property for all our person objects,
// create a rollCall method, and
// create a fullName method.

let people = {
  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },
  rollCall: function() {
    // people.collection.forEach(people.fullName);
    this.collection.forEach(this.fullName);
  },
  add: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    this.collection.push(person);
  },
  getIndex: function(person) {
    let index = -1;
    this.collection.forEach(function(comparator, i) {
      if (comparator.firstName === person.firstName &&
          comparator.lastName  === person.lastName) {
            index = i;
      }
    })
    return index;
  },
  get: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }

    return this.collection[this.getIndex(person)];
  },
  remove: function(person) {
    let index;
    if (this.isInvalidPerson(person)) {
      return;
    }

    index = this.getIndex(person);
    if (index === -1) {
      return;
    }

    this.collection(splice(index, 1));
  },
  update: function(person) {
    if (this.isInvalidPerson(person)) {
      return;
    }
  
    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },
  isInvalidPerson: function(person) {
    return typeof person.firstname !== 'string' || typeof person.lastName !== 'string';
  },
};

people.remove(mother);