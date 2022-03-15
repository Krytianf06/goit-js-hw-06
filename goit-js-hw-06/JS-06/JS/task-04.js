
// Licznik składa się ze spana i przycisków, które, po ich kliknięciu,
// powinny zwiększać i zmniejszać jego wartość na jednostkę.
//  1. Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i inicjalizuj wartość 0.
//  2. Dodaj click listeners do przycisków, wewnątrz których zwiększaj i zmniejszaj wartość licznika.
//  3. Aktualizuj interfejs nową wartością zmiennej counterValue.


const counterValue = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

//Wartość wyjściowa
let value = 0;

const increment = () => {
  value += 1;
  counterValue.textContent = value;
}
const decrement = () => {
  value -= 1;
  counterValue.textContent = value;
};
// klikniecie
decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
