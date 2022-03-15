// 1. Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name - input(zdarzenie input) 
// wstawia jego aktualną wartość do span#name - output.Jeśli pole input jest puste, 
// w spanie powinien wyświetlić się komunikat "Anonymous".

const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (event) => {
  if (event.target.value) {
    nameOutput.textContent = event.target.value;
    nameOutput.textContent = input
  } else { nameOutput.textContent = `Anonymous`};
});
