// Define global variables
let dogs = [];

// Function to add a new dog
const addDog = (name) => {
    // Create a new dog object
    const dog = {
        id: Date.now(),
        name: name,
        walked: false
    };
    
    // Add the new dog to the dogs array
    dogs.push(dog);
    
    // Update the display
    displayDogs();
};

// Function to remove a dog
const removeDog = (id) => {
    // Filter out the dog with the specified id
    dogs = dogs.filter(dog => dog.id !== id);
    
    // Update the display
    displayDogs();
};

// Function to mark a dog as walked
const walkDog = (id) => {
    // Find the dog with the specified id
    const dog = dogs.find(dog => dog.id === id);
    
    // Toggle the walked status of the dog
    dog.walked = !dog.walked;
    
    // Update the display
    displayDogs();
};

// Function to display the list of dogs
const displayDogs = () => {
    // Get the element where the dogs will be displayed
    const dogList = document.getElementById('dog-list');
    
    // Clear the previous content
    dogList.innerHTML = '';
    
    // Loop through the dogs array and create HTML elements for each dog
    dogs.forEach(dog => {
        // Create a list item for the dog
        const listItem = document.createElement('li');
        
        // Set the text content of the list item
        listItem.textContent = dog.name;
        
        // Add a class based on the walked status of the dog
        if (dog.walked) {
            listItem.classList.add('walked');
        }
        
        // Create buttons for removing and walking the dog
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', () => removeDog(dog.id));
        
        const walkButton = document.createElement('button');
        walkButton.textContent = dog.walked ? 'Unwalk' : 'Walk';
        walkButton.addEventListener('click', () => walkDog(dog.id));
        
        // Append the buttons to the list item
        listItem.appendChild(removeButton);
        listItem.appendChild(walkButton);
        
        // Append the list item to the dog list
        dogList.appendChild(listItem);
    });
};

// Function to initialize the app
const init = () => {
    // Get the form for adding a new dog
    const dogForm = document.getElementById('dog-form');
    
    // Add an event listener to the form submit event
    dogForm.addEventListener('submit', (event) => {
        // Prevent the default form submission
        event.preventDefault();
        
        // Get the value of the dog name input
        const dogNameInput = document.getElementById('dog-name');
        const dogName = dogNameInput.value.trim();
        
        // Add the dog if the name is not empty
        if (dogName !== '') {
            addDog(dogName);
            dogNameInput.value = ''; // Clear the input field
        }
    });
    
    // Display the initial list of dogs
    displayDogs();
};

// Initialize the app when the DOM content is loaded
document.addEventListener('DOMContentLoaded', init);
