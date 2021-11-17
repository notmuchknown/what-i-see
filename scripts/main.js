//Image Changer that runs via click
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/vetiver-grass.jpg') {
      myImage.setAttribute('src','images/vetiver-grass-2.jpg');
    } else {
      myImage.setAttribute('src','images/vetiver-grass.jpg');
    } 
//Personalizing/Naming button 
} 
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1'); 
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        alert('Please enter a name')
        setUserName(); ;
      } 
      else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Have you ever smelled Khus, ' + myName+'?';
      }
  } 
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'You\'ll smell good in Khus, ' + storedName;
  } 
  myButton.onclick = function() {
    setUserName();
  } 
