'use strict';
let cubeArray = [];
const cubes = document.querySelector('.cubes');
const startingScore = document.querySelector('.starting-clicks');
const maxClick = document.querySelector('.max-clicks');
const btnControle = document.querySelectorAll('.btn-control');
let cubeNumber;
let cubeColor;
let score = 0;
//
addingNewObject(3);
createGrid(3);

btnControle.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    cubeNumber = e.target.value;
    maxClick.textContent = cubeNumber * cubeNumber;
    addingNewObject(cubeNumber);
    createGrid(cubeNumber);
    score = 0;
    startingScore.textContent = score;
  });
});

function addingNewObject(number) {
  cubeArray = [];
  for (let i = 0; i < number * number; i++) {
    coloringCubes();
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
    cubes.innerHTML += `<div style="bacgroundColor=${cube.color}" class="${cube.class}" id="${cube.id}"></div>`;
    const cubeId = document.getElementById(cube.id);
    cubeId.style.backgroundColor = cube.color;
  });
  cubes.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  cubes.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

cubes.addEventListener('click', function (e) {
  const cube = e.target.closest('.cube');
  if (e.target.closest('.cube')) {
    const oneCube = cubeArray.find(c => c.id === cube.id);
    if (oneCube.isClicked === false) {
      oneCube.isClicked = true;
      score++;
      startingScore.textContent = score;
      if (score === cubeArray.length) {
        alert('You win!!!!');
        score = 0;
        startingScore.textContent = score;
      }
    } else if (oneCube.isClicked === true) {
      alert('You lose! Try again!');
      score = 0;
      oneCube.isClicked = false;
      startingScore.textContent = score;
    }
    shuffle(cubeArray);
  }
  createGrid();
});

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [array[i], array[random]] = [array[random], array[i]];
  }
}
