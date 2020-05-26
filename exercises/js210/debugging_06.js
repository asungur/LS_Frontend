// Todd wrote some simple code in an attempt to log his shop's financial transactions. Each time he makes a sale or spends money on inventory, he logs that deposit or withdrawal via the logTransaction function. His code also intends to ensure that each transaction logged is a valid numerical amount. At the end of each day, he displays his total gain or loss for the day with transactionTotal.

// Test out the code yourself. Can you spot the problem and fix it?

var transactionLog = [];

function processInput(input) {
  var numericalData = parseFloat(input);

  if (isNaN(numericalData)) {
    throw (new Error('Data could not be converted to numerical amount.'));
  }

  return numericalData;
}

function logTransaction() {
  var data = prompt('Please enter the transaction amount: ');

  try {
    data = processInput(data);
    transactionLog.push(data);

    alert('Thank you. Data accepted.');
    //catch block needs to receive an Error object
  } catch(error) {
    alert(error.message);
  }
}

function transactionTotal() {
  var total = 0;
  var i;

  for (i = 0; i < transactionLog.length; i++) {
    total += transactionLog[i];
  }

  return total;
}

logTransaction();
logTransaction();
logTransaction();

console.log(transactionTotal());