const ramen = [
  {
    images: "./images/shin.png",
    name: " Shin Ramyun",
    Flavor: "Original",
    Country: "South Korea",
    Spicyness: " 5",
    Year: "1986",
    Brand: "Nongshim",
    Website: " http://eng.nongshim.com/main/index",
  },
  {
    images: "./images/indomie.png",
    name: "Indomie",
    Flavor: "Chicken",
    Country: "Indonesia",
    Spicyness: "0",
    Year: "1972",
    Brand: "Indofood",
    Website: "https://www.indofood.com",
  },
  {
    images: "./images/nissin.png",
    name: "Demae Ramen",
    Flavor: "Sesame",
    Country: "Japan",
    Spicyness: "1",
    Year: "1968",
    Brand: "Nissin",
    Website: "https://nissinfoods.com",
  },
  {
    images: "./images/buldak.png",
    name: "Buldak",
    Flavor: "Hot Chicken",
    Country: "South Korea",
    Spicyness: "5",
    Year: "2012",
    Brand: "Samyang",
    Website: "https://samyangfoods.com",
  },
  {
    images: "./images/jin.png",
    name: "Jin Ramyun",
    Flavor: "Beef",
    Country: "South Korea",
    Spicyness: "5",
    Year: "" /* Waiting update from Peha !  */,
    Brand: "Ottogi",
    Website: "https://www.ottogi.co.kr",
  },
  {
    images: "./images/kumamoto.png",
    name: " Kumamoto Ma-Yu",
    Flavor: " Tonkotsu",
    Country: "Japan",
    Spicyness: "0",
    Year: "1959",
    Brand: "Marutai",
    Website: "https://re-how.net",
  },
  {
    images: "./images/yumyum.png",
    name: "Yum Yum",
    Flavor: "Chicken sriracha",
    Country: "Thailand",
    Spicyness: "1",
    Year: "1971",
    Brand: "Wan Thai Food",
    Website: "https://yumyumfoods.com",
  },
  {
    images: "./images/jjajang.png",
    name: "Jjajang Men",
    Flavor: "Black Bean",
    Country: "South Koren",
    Spicyness: "1",
    Year: "1984",
    Brand: "Paldo (Yakult)",
    Website: "http://www.paldofood.com",
  },
  {
    images: "./images/soba.png",
    name: "Soba",
    Flavor: "Chili",
    Country: "Japan",
    Spicyness: "2",
    Year: "XXXX",
    Brand: "Nissin",
    Website: "https://nissinfoods.com",
  },
  {
    images: "./images/samyang.png",
    name: "Samyang Original",
    Flavor: "Beef",
    Country: "South Korea",
    Spicyness: "4",
    Year: "1963",
    Brand: "Samyang",
    Website: "https://samyangfoods.com",
  },
];

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
      newCard.style.transform = "scale(1.10, 1.10 )"
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
