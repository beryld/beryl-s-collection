
const ramen = [
    {
        name : 'Shin Ramyun',
        Flavor : 'Original',
        Country :'South Korea',
        Spicyness :' 5',
        Year :'1986',
        Brand : 'Nongshim'

    },
    {
        name : 'Indomie',
        Flavor : 'Chicken',
        Country : 'Indonesia',
        Spicyness : '0',
        Year : '1972',
        Brand : 'Indofood',


    },
    {
        name : 'Demae Ramen',
        Flavor : 'Sesame',
        Country : 'Japan',
        Spicyness : '1',
        Year : '1968',
        Brand : 'Nissin',


    },
    {
        name : 'Buldak',
        Flavor : 'Hot Chicken',
        Country : 'South Korea',
        Spicyness : '5',
        Year : '2012',
        Brand : 'Samyang',


    },
    {
        name : 'Jin Ramyun',
        Flavor : 'Beef',
        Country : 'South Korea',
        Spicyness : '5',
        Year : '', /* Waiting update from Peha !  */
        Brand : 'Ottogi',


    },
    {
        name : ' Kumamoto Ma-Yu',
        Flavor : ' Tonkotsu',
        Country : 'Japan',
        Spicyness : '0',
        Year : '1959',
        Brand : 'Marutai',


    },
    {
        name : 'Yum Yum',
        Flavor : 'Chicken sriracha',
        Country : 'Thailand',
        Spicyness : '1',
        Year : '1971',
        Brand : 'Wan Thai Food',


    },
    {
        name : 'Jjajang Men',
        Flavor : 'Black Bean',
        Country : 'South Koren',
        Spicyness : '1',
        Year : '1984',
        Brand : 'Paldo (Yakult)',


    },
    {
        name : 'Soba',
        Flavor : 'Chili',
        Country : 'Japan',
        Spicyness : '2',
        Year : 'XXXX',
        Brand : 'Nissin',


    },
    {
        name : 'Samyang Original',
        Flavor : 'Beef',
        Country : 'South Korea',
        Spicyness : '4',
        Year : '1963',
        Brand : 'Samyang',


    },
];

const newSec = document.createElement('section');
document.body.appendChild(newSec);
newSec.classList.add('card-group');

for(let i = 0; i<ramen.length; i++){
    const newCard = document.createElement('div'); //Create a div for every 'i'
    newCard.classList.add('card'); // Give the class name 'card'
    newCard.setAttribute('id' ,  [i+1]) // Set the id of the cards with a number
    document.querySelector('section').appendChild(newCard); // Locate the section and push the divs into it 
    
    const newName = document.createElement('h3'); //Create titles
    newName.classList.add('names'); // Add a class to the H3 titles element
    document.getElementById([i + 1]).appendChild(newName);
    newName.textContent= ramen[i].name;

    const newFlavor = document.createElement('p') // Create Flavor tag
    newFlavor.classList.add('flavors');
    document.getElementById([i + 1]).appendChild(newFlavor);
    newFlavor.textContent= ramen[i].Flavor;

    const newCountry = document.createElement('p'); // 
    newCountry.classList.add('countries');
    document.getElementById([i + 1]).appendChild(newCountry);
    newCountry.textContent = ramen[i].Country;

    const newLevel = document.createElement('p'); // 
    newLevel.classList.add('spicynesses');
    document.getElementById([i + 1]).appendChild(newLevel);
    newLevel.textContent= ramen[i].Spicyness;

    const newDate = document.createElement('p'); // 
    newDate.classList.add('years');
    document.getElementById([i + 1]).appendChild(newDate);
    newDate.textContent=ramen[i].Year;

    const newBrand = document.createElement('p'); // 
    newBrand.classList.add('brands');
    document.getElementById([i + 1]).appendChild(newBrand);
    newBrand.textContent= ramen[i].Brand;

    


}



