/* Step 2 - Variables */
let fullName = 'Ruby Ruan';
let currentYear = '2023';
const profilePicture = 'images/9421.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('profileImage');
const foodElement = document.getElementById('food'); // Added this line to get the food element

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);

/* Step 5 - Array */
let favFoods = ['Stinky Tofu', 'Beef Noodle', 'HotPot'];

// Modify the HTML element with the id of 'food' to display your favorite foods array
foodElement.innerHTML = favFoods.join('<br>');


imageElement.setAttribute('src', profilePicture);
