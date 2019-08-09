function matrixGenerator(rows, columns) {
  // do work here
  let results = [];
  for (let i = 0; i < rows; i++) {
    let rows = [];
    for (let j = 0; j < columns; j++) {
      let randomNum = Math.floor(Math.random() * 100) + 1;
      rows.push(randomNum);
      rows.sort(function(a, b) {
        return a - b;
      });
    }
    results.push(rows);
    results.sort(function(a, b) {
      return a[0] - b[0];
    });
  }
  return results;
}

module.exports = matrixGenerator;
