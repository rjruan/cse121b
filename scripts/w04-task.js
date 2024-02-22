/* Profile Object */
/* Profile Object */
let myProfile = {
    name: "Ruby Ruan",
    photo: 'ruby.jpg',
    favoriteFoods: [
        'Stinky Tofu',
        'Chocolate',
        'HotPot',
    ],
    hobbies: [
        'Swimming',
        'Listening to music',
        'Eating food',
    ],
    placesLived: [
        {
            place: 'Miaoli, Taiwan',
            length: '18 years'
        },
        {
            place: 'Taipei, Taiwan',
            length: '1 year'
        },
        {
            place: 'Pingdong, Taiwan',
            length: '3 months'
        },
        {
            place: 'Taichung, Taiwan',
            length: '8 months'
        },
        {
            place: 'Kaohsiung, Taiwan',
            length: '3 months'
        },
        {
            place: 'Yunlin, Taiwan',
            length: '3 months'
        },
        {
            place: 'Rexburg, Idaho',
            length: '2 years'
        },
    ]
};
/* DOM Manipulation - Output */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
const photoElement = document.querySelector('#photo');
photoElement.setAttribute('src', myProfile.photo);
photoElement.setAttribute('alt', myProfile.name);

/* Favorite Foods List */
const favoriteFoodsList = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(food => {
    const liElement = document.createElement('li');
    liElement.textContent = food;
    favoriteFoodsList.appendChild(liElement);
});

/* Hobbies List */
const hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(hobby => {
    const liElement = document.createElement('li');
    liElement.textContent = hobby;
    hobbiesList.appendChild(liElement);
});

/* Places Lived DataList */
const placesLivedDl = document.querySelector('#places-lived');
myProfile.placesLived.forEach(place => {
    const dtElement = document.createElement('dt');
    dtElement.textContent = place.place;

    const ddElement = document.createElement('dd');
    ddElement.textContent = place.length;

    placesLivedDl.appendChild(dtElement);
    placesLivedDl.appendChild(ddElement);
});
