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
