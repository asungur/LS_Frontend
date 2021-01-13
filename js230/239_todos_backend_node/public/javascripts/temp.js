function Album(name = 'N/A', artist = 'N/A', year = 'N/A') {
  let privateData = [];

  this.name = name;
  this.artist = artist;
  this.year = year;

  this.readTag = function() {
    console.log(this.name + ' by ' + this.artist);
    console.log('Released in ' + this.year);
    console.log(privateData);
  };
}

let inAbsentia = new Album('In Absentia', 'Porcupine Tree', '2002');

inAbsentia.readTag();