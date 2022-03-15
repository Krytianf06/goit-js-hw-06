
// Napisz skrypt, który:
//   1. Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.
//   2. Dla każdego elementu li.item na liście ul#categories, znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>) i liczbę elementów w kategorii (wszystkich <li>).


const listRef = document.querySelector("#categories").children;
console.log(`Ilość Kategorii: ${listRef.length}`);

const itemTitle = document.querySelectorAll(".item > h2");
const categoryList = document.querySelectorAll(".item > ul");

itemTitle.forEach((element, index) => {
  console.log(
    `Kategoria: ${element.textContent} 
    Elementy: ${categoryList[index].children.length}`  
    );
});
