'use strict';
let cubeArray = [];
const cubes = document.querySelector('.cubes');
const btnEasy = document.querySelector('.easy-mode');
const btnMedium = document.querySelector('.medium-mode');
const btnHard = document.querySelector('.hard-mode');
const startingScore = document.querySelector('.starting-clicks');
const maxClick = document.querySelector('.max-clicks');
let cubeNumber;
let score = 0;
//
addingNewObject(3);
createGrid(3);
//
btnEasy.addEventListener('click', function (e) {
  cubeNumber = e.target.value;
  maxClick.textContent = cubeNumber * cubeNumber;
  addingNewObject(cubeNumber);
  createGrid(cubeNumber);
});
btnMedium.addEventListener('click', function (e) {
  cubeNumber = e.target.value;
  maxClick.textContent = cubeNumber * cubeNumber;
  addingNewObject(cubeNumber);
  createGrid(cubeNumber);
});
btnHard.addEventListener('click', function (e) {
  cubeNumber = e.target.value;
  maxClick.textContent = cubeNumber * cubeNumber;
  addingNewObject(cubeNumber);
  createGrid(cubeNumber);
});
function addingNewObject(number) {
  cubeArray = [];
  for (let i = 0; i < number * number; i++) {
    let red = Math.trunc(Math.random() * 255) + 1;
    let blue = Math.trunc(Math.random() * 255) + 1;
    let yellow = Math.trunc(Math.random() * 255) + 1;
    let cubeColor = `RGB(${red}, ${blue}, ${yellow})`;

    const NewObject = {
      class: 'cube',
      id: crypto.randomUUID(),
      color: cubeColor,
      isClicked: false,
    };
    cubeArray.push(NewObject);
  }
}
function createGrid(size) {
  cubes.innerHTML = '';
  cubeArray.forEach(cube => {
    cubes.innerHTML += `<div class="${cube.class}" id="${cube.id}"></div>`;
    const cubeId = document.getElementById(cube.id);
    cubeId.style.backgroundColor = cube.color;
  });
  cubes.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  cubes.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

cubes.addEventListener('click', function (e) {
  const cube = e.target.closest('.cube');
  if (e.target.closest('.cube')) {
    const newCubeArray = cubeArray.find(c => c.id === cube.id);
    if (newCubeArray.isClicked === false) {
      newCubeArray.isClicked = true;
      score++;
      startingScore.textContent = score;
      if (score === Number(maxClick.textContent)) {
        alert('You win!!!!');
        score = 0;
        startingScore.textContent = score;
      }
    } else if (newCubeArray.isClicked === true) {
      alert('You lose! Try again!');
      score = 0;
      startingScore.textContent = score;
    }
  }

  shuffle(cubeArray);

  createGrid();
});
