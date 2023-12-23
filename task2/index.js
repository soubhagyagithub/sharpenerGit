// Write your code below:
const fruit = document.getElementsByClassName('fruit');
fruit[2].style.backgroundColor = 'yellow'
const fruits = document.getElementsByClassName('fruits');
var fruitElements = document.getElementsByClassName('fruit');

  // Iterate through the elements and make them bold
  for (var i = 0; i < fruitElements.length; i++) {
    fruitElements[i].style.fontWeight = 'bold';
  }
