// Napisz skrypt, który dla każdego elementu tablicy ingredients:
//    1. Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
//    2. Doda nazwę elementu jako jego zawartość tekstową.
//    3. Doda do elementu klasę item.
//    4. Po czym umieści wszystkie <li> na liście podczas jednej operacji ul.ingredients.

// Tablica do stworzenia.
const ingredients = 
[
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listUl = document.querySelector("#ingredients");

// Tworzenie elementów listy
const createListElem = (element)=> {
  const item = document.createElement("li"); // dodajemy element li
  item.textContent = element;
  item.classList.add("item"); // dodajemy klasę
  return item;
}

listUl.append(...ingredients.map(createListElem)); // dodawanie elementów z podanej tablicy

const ingredintsList = listUl.querySelectorAll("li");

console.log(ingredintsList);
