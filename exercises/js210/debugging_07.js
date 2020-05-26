// Run the following code. Why is every warning displayed twice? Change the code so that each warning is displayed only once, as intended.

var species = ['wolf', 'human', 'wasp', 'squirrel', 'weasel', 'dinosaur'];
var isMidnight = true;
var isFullmoon = true;

function isTransformable(species) {
  return species[0] === 'w';
}

function transform(species) {
  return 'were' + species;
}

var i;
for (i = 0; i < species.length; i++) {
  var thisSpecies = species[i];
  // reassignment is required otherwise newSpecies will remain referenced to the last value
  var newSpecies = '' ;

  if (isMidnight && isFullmoon && isTransformable(thisSpecies)) {
      newSpecies = transform(thisSpecies);
  }

  if (newSpecies) {
    console.log('Beware of the ' + newSpecies + '!');
  }
}