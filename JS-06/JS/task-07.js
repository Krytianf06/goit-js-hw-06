// Napisz skrypt, który reaguje na zmianę wartości 
// input#font-size-control (zdarzenie input) i zmienia styl inline
// span#text aktualizując właściwość font-size. W rezultacie, 
// podczas przeciągania paska przesuwania będzie zmieniał się rozmiar tekstu.

const fontSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

fontSize.addEventListener("input", () =>
    {
  text.style.fontSize = `${fontSize.value}px`;
});
