/*
// Our desired output for the code below is: Christopher Turk is a Surgeon. What will the code output, and what explains the difference, if any, between the actual and desired outputs?

let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a ' + this.occupation + '.';
  }
};


function logReturnVal(func, context) {
  let returnVal = func.call(context);
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);


// Suppose that we want to extract getDescription from turk, but always have it execute with turk as context. Use one of the methods we've learned in the last lesson to assign such a permanently bound function to a new variable, getTurkDescription.
let getTurkDescription = turk.getDescription.bind(turk);
*/
/*
let TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ' ' + title);
    }, this);
  }
};

TESgames.listGames();

// Desired output:

// The Elder Scrolls Arena
// The Elder Scrolls Daggerfall
// The Elder Scrolls Morrowind
// The Elder Scrolls Oblivion
// The Elder Scrolls Skyrim
*/

let foo = {
  a: 0,
  incrementA() {
    let increment = function() {
      this.a += 1;
    }.bind(this);

    increment();
    increment();
    increment();    
  }
};

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();