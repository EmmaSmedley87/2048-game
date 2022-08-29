var board;
var score = 0;
var rows = 4;
var columns = 4;

// 1) when page loads call setGame function
window.onload = function () {
  setGame();
};

// defining setGame Function
// defining game board
function setGame() {
  board = [
    [2, 0, 0, 0],
    [0, 4, 16, 0],
    [0, 8, 32, 0],
    [0, 0, 0, 0],
  ];

  // iterate through the rows and columns

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      // create a new div(<div><div>)
      let tile = document.createElement("div");
      // set id
      // sets cordinates on our game board and adds an id (<div id="0-0"><div>)
      tile.id = r.toString() + "-" + c.toString();
      // get the number from the board
      let num = board[r][c];
      // call an update tile function that updates the styling
      updateTile(tile, num);
      // add tile div tag to our board
      document.getElementById("board").append(tile);
    }
  }
}

function updateTile(tile, num) {
  tile.innerText = "";
  // clear the class list so we don't have multiple classes of the same tile
  tile.classList.value = "";
  // add tile back
  tile.classList.add("tile");
  // make a num check if num is more than 0 than add style class
  if (num > 0) {
    // tile.innerText = num;
    tile.innerText = num;
    // add style class if the number is less or equal to 4096
    // else add x8192 style class
    if (num <= 4096) {
      tile.classList.add("x" + num.toString());
    } else {
      tile.classList.add("x8192");
    }
  }
}
