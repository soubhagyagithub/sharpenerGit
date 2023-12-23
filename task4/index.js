// Write the code as shown in the video below:
const mainHeading = document.querySelector('#main-heading');
mainHeading.style.textAlign = 'right';

const fruitElements = document.querySelector('.fruits');
fruitElements.style.backgroundColor = 'grey';
fruitElements.style.margin = '30px';
fruitElements.style.padding = '30px';
fruitElements.style.borderRadius = '5px'
fruitElements.style.width = '50%'
fruitElements.style.listStyleType = 'none'




const basketHeading = document.querySelector('h2');
basketHeading.style.color = 'brown';
basketHeading.style.marginLeft = '30px';



const fruit = document.querySelectorAll('.fruit');
for(let i=0;i<fruit.length;i++){
  fruit[i].style.backgroundColor = 'white';
  fruit[i].style.margin = '10px';
  fruit[i].style.padding = '10px';
  fruit[i].style.borderRadius = '5px';
  
  
}



const evenItems = document.querySelectorAll('.fruit:nth-child(even)')
for(let i=0;i<evenItems.length;i++){
  evenItems[i].style.backgroundColor = 'brown'
  evenItems[i].style.color = 'white';
}
const fruitListItems = document.querySelectorAll('.fruits li');
for (let i = 0; i < fruitListItems.length; i++) {
  fruitListItems[i].style.fontWeight = 'normal';
}
