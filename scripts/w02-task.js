/* Step 2 - Variables */
const fullName = 'Ruby Ruan';
const currentYear = new Date().getFullYear(); // Use JavaScript to get the current year dynamically
const profilePicture = 'ruby.jpg'; // Update with your image file name

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const imageElement = document.getElementById('profileImage');
const foodElement = document.getElementById('food');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', `./images/${profilePicture}`); // Update path to your images folder
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favFoods = ['Beef Noodles', 'HotPot', 'Chocolate']; // Add your favorite foods here

// Add another favorite food
const newFavoriteFood = 'New Favorite Food';
favFoods.push(newFavoriteFood);

// Remove the first and last elements from the array
favFoods.shift();
favFoods.pop();

// Display the modified array on the HTML page
foodElement.innerHTML = favFoods.join('<br>');
