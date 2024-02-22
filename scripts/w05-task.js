// w05-task.js

// Declare Global Variables
const templesElement = document.getElementById('temples');
let templeList = [];

// Function: displayTemples()
const displayTemples = (temples) => {
  temples.forEach(temple => {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
}

// Function: getTemples()
const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (!response.ok) {
      throw new Error('Failed to fetch temple data');
    }
    templeList = await response.json();
    displayTemples(templeList);
  } catch (error) {
    console.error('Error fetching temple data:', error);
  }
}

// Function: reset()
const reset = () => {
  templesElement.innerHTML = '';
}

// Function: filterTemples()
const filterTemples = (temples) => {
  reset();
  const filter = document.getElementById('filtered').value;
  switch (filter) {
    case 'utah':
      displayTemples(temples.filter(temple => temple.location.includes('Utah')));
      break;
    case 'notutah':
      displayTemples(temples.filter(temple => !temple.location.includes('Utah')));
      break;
    case 'older':
      displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
      break;
    case 'all':
      displayTemples(temples);
      break;
    default:
      displayTemples(temples);
      break;
  }
}

// Event Listener: filterTemples Element change
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });

// Call the getTemples function
getTemples();
