// Napisz skrypt, który przy utracie fokusu na polu input (zdarzenie blur) 
// sprawdza jego zawartość na prawidłową liczbę wprowadzonych symboli.
 
//  1. Informacja o liczbie symboli, która powinna znajdować się w polu input,
//      pokazuje się w jego atrybucie data - length.
//  2. Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielone,
//      a jeśli liczba jest nieprawidłowa - czerwone.


const inputValidation = document.querySelector("#validation-input");

inputValidation.addEventListener("blur", isValid);

function isValid(event) {
  if (event.target.value.length == event.target.dataset.length) {
    event.target.classList.add("valid");
    event.target.classList.remove("invalid");
  } else {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
}
