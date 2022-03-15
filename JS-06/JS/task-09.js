// Napisz skrypt, który zmienia kolor tła elementu <body> poprzez style inline 
// po kliknięciu na button.change-color i wprowadza wartość koloru do span.color.

//Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

const randomColor = () =>  {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const changeColor = document.querySelector(".change-color");
const backgroundColor = document.body;
const colorSubscribe = document.querySelector(".color");

colorSubscribe.textContent = `${randomColor()}`;
changeColor.addEventListener(
  "click",
  () => {
    backgroundColor.style.backgroundColor = colorSubscribe.textContent;
  colorSubscribe.textContent = `${randomColor()}`;}
);
