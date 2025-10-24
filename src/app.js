import "bootstrap";
import "./style.css";

let pinta = ['diamante', 'corazon', 'picas', 'trebol'];
let numeroCarta = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

// Generador de cartas aleatorias
window.onload = function generadorDeCartas() {
  let numeroCartaAleatorio = numeroCarta[Math.floor(Math.random() * numeroCarta.length)];
  let pintaAleatoria = pinta[Math.floor(Math.random() * pinta.length)];

  document.querySelector('.top_left').classList.add(`${pintaAleatoria}`);
  document.querySelector('.valor').innerHTML = numeroCartaAleatorio;
  document.querySelector('.buttom_right').classList.add(`${pintaAleatoria}`);
};