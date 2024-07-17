// const container = document.getElementById("container");
// console.log("Element with ID 'container':", container);

// const contentElements = document.getElementsByClassName("content");
// console.log("Elements with class 'content':", contentElements);

// const listItems = document.getElementsByTagName("li");
// console.log("List items:", listItems);

// document.getElementById('changeDirectionButton').addEventListener('click', function() {
//     const flexContainer = document.querySelector('.flex');
//     if (flexContainer.style.flexDirection === 'row') {
//       flexContainer.style.flexDirection = 'column';
//     } else {
//       flexContainer.style.flexDirection = 'row';
//     }
//   });
  
// document.getElementById('changeDirectionButton').addEventListener('click', function() {
//     const flexContainer = document.querySelector('.flex');
//     if (flexContainer.style.flexDirection === 'row') {
//       flexContainer.style.flexDirection = 'column';
//     } else {
//       flexContainer.style.flexDirection = 'row';
//     }
    
//     const container = document.querySelector('.container');
//     const paragraph = document.querySelector('p');
//     if (paragraph) {
//       container.style.backgroundColor = '#f990'; 
//     }
//     else{
//       container.style.backgroundColor = '#f99'; 
//     }
//   });
  

// document.getElementById('changeColorButton').addEventListener('click', function() {
//     const containerById = document.getElementById('container');
//     const paragraphById = containerById.querySelector('p');
    
//     const containerByClass = document.getElementsByClassName('container')[3];
//     const paragraphByClass = containerByClass.querySelector('p');
    
   
//     const containersByTag = document.getElementsByTagName('div');
//     const containerByTag = document.getElementsByTagName('div');
//     for (var i = 0; i < containersByTag.length; i++) {
//       if (containersByTag[i].className === 'container') {
//         containerByTag = containersByTag[i];
//         break;
//       }
//     }
//     const paragraphByTag = containerByTag.querySelector('p');
    
//     if (paragraphById || paragraphByClass || paragraphByTag) {
//       containerById.classList.toggle('highlight');
//       containerByClass.classList.toggle('highlight');
//       containerByTag.classList.toggle('highlight');
//     } else {
//       console.log('No p');
//     }
//   });
  
const names = ["Jumberiko", "Abramiani", "Shengelia", "Ipsum", "Willy"];

const paragraphs = document.getElementsByClassName('man');

for (var i = 0; i < paragraphs.length; i++) {
  paragraphs[i].textContent += " " + names[i];
}