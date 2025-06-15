'use strict';
let cubeArray = [];
const cubes = document.querySelector('.cubes');
const btnEasy = document.querySelector('.easy-mode');
const btnMedium = document.querySelector('.medium-mode');
const btnHard = document.querySelector('.hard-mode');
let cubeNumber;
//
addingNewObject(3);
createGrid(3);
//
btnEasy.addEventListener('click', function (e) {
  cubeNumber = e.target.value;
  addingNewObject(cubeNumber);
  createGrid(cubeNumber);
});
btnMedium.addEventListener('click', function (e) {
  cubeNumber = e.target.value;
  addingNewObject(cubeNumber);
  createGrid(cubeNumber);
});
btnHard.addEventListener('click', function (e) {
  cubeNumber = e.target.value;
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
      class: 'cub',
      id: crypto.randomUUID(),
      color: cubeColor,
      isClicked: false, //dodao
    };
    cubeArray.push(NewObject);
  }
}
