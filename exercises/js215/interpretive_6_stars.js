// Write a function that displays an 8-pointed star in an nxn grid, where n is an odd integer that is supplied as an argument to the function. The smallest such star you need to handle is a 7x7 grid (i.e., when n is 7).


console.log(star(7));
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *
console.log(star(9));
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *

function star(n) {
  const centreRow = '*'.repeat(n);

  for (let i = 0; i < n; i += 1) {
    let visualise = '';
    const lowHalf = (n - 1) / 2
    const upperHalf = (n + 1) /2

    if ( i === lowHalf) {
      visualise = centreRow;
    } else if (i < n / 2) {
      let firstHalf = generateSpaces(i) + '*' + generateSpaces(lowHalf - (i + 1)) + '*';
      let secondHalf = generateSpaces(lowHalf - i - 1) + '*';
      visualise = firstHalf + secondHalf;
    } else if (i > n / 2) {
      let firstHalf = generateSpaces(n - (i + 1)) + '*' + generateSpaces(i - upperHalf) + '*';
      let secondHalf = generateSpaces(i - upperHalf) + '*';
      visualise = firstHalf + secondHalf;
    }

    console.log(visualise);
  }
}

function generateSpaces(n) {
  if (n <= 0) {
    return '';
  } else {
    return ' '.repeat(n);
  }
}

// ALTERNATIVE GRID BASED SOLUTION
function initializeGrid(m) {
  let grid = [];
  for (let i = 0; i < m; i++) {
    grid.push([]);
    for (let j = 0; j < m; j++) {
      grid[i][j] = ' ';
    }
  }
  return grid;
}

function star(m) {
  let n = (m - 1) / 2;
  let grid = initializeGrid(m);
  for (let i = 0; i < m; i ++) {
    grid[i][n] = '*';
    grid[n][i] = '*';
    grid[i][i] = '*';
    grid[m-i-1][i] = '*';
  }
  grid.forEach(line => console.log(line.join('')));
}