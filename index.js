const $ = document.querySelector.bind(document);
const MAX_COL = 19;
const MAX_ROW = 19;

window.onload = () => {
  createGrid();
  paletColors();
}

let colorSelected = 'c99';

const colors = ['c11', 'c12', 'c13', 'c14', 'c15', 'c21', 'c22', 'c23', 'c24', 'c25', 'c99', 'c98'];

const createGrid = () => {
  let root = $('.main')
  let content = '';

  for (let row = 1; row < MAX_ROW; row++) {
    for (let col = 1; col < MAX_COL; col++) {
      content += `<div onClick="setColor(this)" class="block block_row${row} block_col${col}"></div>`
    }
  }
  root.innerHTML = content;
}

const paletColors = () => {
  let root = $('#palet')
  let content = '';
  for (let row = 1; row < 3; row++) {
    for (let col = 1; col < 6; col++) {
      content += `<div id="c${row + '' + col}" onClick="selectColor(this.id)" class="block block_row${row} block_col${col} ${'c' + row + '' + col}"></div>`
    }
  }
  root.innerHTML = content;
}

const selectColor = (color) => {
  colorSelected = color;
}

const setColor = (el) => {
  if (el.classList.contains(colorSelected)) {
    el.classList.remove(colorSelected)
  } else {
    removeColors(el);
    el.classList.add(colorSelected);
  }
}

const removeColors = (el) => {
  colors.forEach(c => {
    if (el.classList.contains(c)) {
      el.classList.remove(c);
    }
  });
}