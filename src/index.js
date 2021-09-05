module.exports = function solveSudoku(matrix) {

  function findNextPosition(matrix) {

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (matrix[i][j] === 0) {
          return [i, j];
        }
      }
    }
    return null;

  }

  function checkRow(rowIndex, number, matrix) {
    for (let i = 0; i < 9; i++) {
      if (matrix[rowIndex][i] === number) {
        return true;
      }
    }
    return false;
  }

  function checkColumn(colIndex, number, matrix) {
    for (let i = 0; i < 9; i++) {
      if (matrix[i][colIndex] === number) {
        return true;
      }
    }
    return false;
  }

  function checkSquare(rowIndex, colIndex, number, matrix) {

    startRow = 3 * Math.floor(rowIndex / 3);
    startCol = 3 * Math.floor(colIndex / 3);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (matrix[startRow + i][startCol + j] === number) {
          return true;
        }
      }
    }

    return false;

  }

  function solve() {

    let nextPosition = findNextPosition(matrix); // array [i, j]

    if (nextPosition === null) {
      return true;
    }

    let i = nextPosition[0];
    let j = nextPosition[1];

    for (let num = 1; num <= 9; num++) {

      if (!checkRow(i, num, matrix) && !checkColumn(j, num, matrix) && !checkSquare(i, j, num, matrix)) {

        matrix[i][j] = num;

        if (solve()) {
          return true;
        }

        matrix[i][j] = 0;

      }

    }
    return false;
  }

  solve();
  return matrix;

}
