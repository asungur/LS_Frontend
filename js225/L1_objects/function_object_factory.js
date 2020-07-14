/* THERE IS CODE DUPLICATION
let sedan = {
  speed: 0,
  rate: 8,
  accelerate() {
    this.speed += this.rate;
  },
};

let coupe = {
  speed: 0,
  rate: 12,
  accelerate() {
    this.speed += this.rate;
  },
};
*/

// Define a makeCar function that takes rate argument

function makeCar(rate, brakeRate) {
  let tempObj = {
    speed: 0,
    accelRate,
    brakeRate,
    accelerate() {
      this.speed += this.accelRate;
    },
    brake() {
      this.speed -= this.brakeRate;
      if (this.speed < 0) {
        this.speed = 0;
      }
    },
  };
}

let hatchback = makeCar(9);