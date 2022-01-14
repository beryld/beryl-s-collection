import { ramen }  from './collectionArray.js'; /* To be able to import like that, have to add the type "module to the script section in html " */

console.log('ramen')
const newSec = document.createElement("section");
document.body.appendChild(newSec);
newSec.classList.add("card-group");
newSec.style.display = "flex";

for (let i = 0; i < ramen.length; i++) {
  const newCard = document.createElement("div"); //Create a div for every 'i'
  newCard.classList.add("card"); // Give the class name 'card'
  newCard.setAttribute("id", [i + 1]); // Set the id of the cards with a number
  document.querySelector("section").appendChild(newCard); // Locate the section and push the divs into it

  const newName = document.createElement("h3"); //Create titles
  newName.classList.add("names"); // Add a class to the H3 titles element
  document.getElementById([i + 1]).appendChild(newName);
  newName.textContent = ramen[i].name;

  const newPict = document.createElement("img");
  newPict.classList.add("pictures");
  newPict.setAttribute("src", ramen[i].images);
  document.getElementById([i + 1]).appendChild(newPict);

  const newFlavor = document.createElement("p"); // Create Flavor tag
  newFlavor.classList.add("flavors");
  document.getElementById([i + 1]).appendChild(newFlavor);
  newFlavor.textContent =
    "Flavor " + ":\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + ramen[i].Flavor;

  const newCountry = document.createElement("p"); //
  newCountry.classList.add("countries");
  document.getElementById([i + 1]).appendChild(newCountry);
  newCountry.textContent = "Country : \xa0\xa0" + ramen[i].Country;

  const newLevel = document.createElement("p"); //
  newLevel.classList.add("spicynesses");
  document.getElementById([i + 1]).appendChild(newLevel);
  newLevel.textContent = "Spicyness : " + ramen[i].Spicyness;

  const newDate = document.createElement("p"); //
  newDate.classList.add("years");
  document.getElementById([i + 1]).appendChild(newDate);
  newDate.textContent = " Creation : \xa0\xa0" + ramen[i].Year;

  const newBrand = document.createElement("p"); //
  newBrand.classList.add("brands");
  document.getElementById([i + 1]).appendChild(newBrand);
  newBrand.textContent =
    "Brand : \xa0\xa0\xa0\xa0\xa0\xa0\xa0 " + ramen[i].Brand;

  const newLink = document.createElement("a");
  newLink.classList.add("liens");
  newLink.href = ramen[i].Website;
  document.getElementById([i + 1]).appendChild(newLink);
  newLink.textContent = ramen[i].Brand;

  function hideThem(newCard) {
    newCard.onmouseover = function () {
      newCard.style.zIndex = 1;
      newCard.style.transition = "1.5s";
      newCard.style.transform = "scale(1.05, 1.05 )"
      newCard.style.boxShadow = "0 0 0 10000px rgba(255, 255, 255, 0.964)";
    };
    newCard.onmouseout = function () {
      newCard.style.zIndex = 0;
      newCard.style.transform = "scale(1, 1 )"
      newCard.style.boxShadow = "0 0 0 9999px #00000000";
    };
  }

  hideThem(newCard);
}
