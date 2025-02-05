const input = document.getElementById("input-calculadora");
const buttons = document.querySelectorAll(".text-calculadora");
const clearButton = document.querySelector(".text-calculadora:nth-child(1)");
const resultButton = document.getElementById("btn-enviar");

// Añadir evento a cada botón
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerText;

        if (value === "C") {
            input.value = "";
        } else if (value === "=") {
            try {
                input.value = eval(input.value.replace('÷', '/').replace('×', '*'));
            } catch {
                input.value = "Error";
            }
        } else {
            input.value += value;
        }
    });
});

// esta es la primera version de mi calculadora
