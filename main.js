let color = 'black';
let click = true;

function populateBoard(size) {
 let board = document.querySelector('.board');
 let squares = board.querySelectorAll('div');
 squares.forEach((div) => div.remove());
 board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
 board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

 let amount = size * size;
 for(let i = 0; i<amount; i++) {
  let square = document.createElement('div');
  square.addEventListener('mouseover', colorSquare)
  square.style.backgroundColor = 'white';
  board.insertAdjacentElement('afterbegin', square);
}
}

populateBoard(16)

function changeSize(input) {
 if (input >=2 && input <=100) {
  populateBoard(input);
 } else {
 console.log('too many squares');
 }
}

function colorSquare() {
 if (click) {
  if (color === 'random') {
   this.style.backgroundColor = randomColor();
  } else {
   this.style.backgroundColor = color;
  }
 }
}

function randomColor() {

 const o = Math.round,
     r = Math.random,
     s = 255;
 return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

function changeColor(choice) {
 color = choice;
}

function resetBoard() {
 let board = document.querySelector('.board');
 let squares = board.querySelectorAll('div');
 squares.forEach((div) => div.style.backgroundColor = 'white');
}

document.querySelector('body').addEventListener('click', (e) => {
 if(e.target.tagName != 'BUTTON') {
  click = !click;
  if (click) {
   document.querySelector('.mode').textContent = "Mode: Coloring"
  } else {
   document.querySelector('.mode').textContent = "Mode: Not Coloring"
 }
 }
})
