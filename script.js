const messages = [
  "Estas Segura?",
  "Realmente segurta?",
  "Estas bien?",
  "Por favoooor",
  "!Piensalo bien!",
  "Si dices que no me pondre mal :(",
  "Estare muy triste :(",
  "Esta bien, dejare de preguntar",
  "Es broma, di si por favor! 😍",
];

// Array de GIFs que cambiarán
const gifs = [
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY290bXp1Nm5yeTV3dzB6MGY4d2l4YWVpdGNra3l4c3g2NTY5ZDRsYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xn8xD14FtUGQgXxST5/giphy.gif", // Primer escape
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMG9qNjIycWpjb2szcTlybHpkdmppN2p1emQ3ZG53NWo3bXBhdmF3eiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f7X8Zuo9svOHuRbCIU/giphy.gif", // Segundo escape
  "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGI3amxzcTM0MjFhdzNpZ3U4NjZnYXNpNzBzdWM2dDJqMWlwNWttZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/FY8c5SKwiNf1EtZKGs/giphy.gif", // Tercer escape
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YWpvM3VncG5xbGN6dTM4czl4djV6cHZiNXBhZmE0Z2Yyc3FpNmI5NCZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/XF5AnCJV7PCtGwdHNC/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3enVsd3R5aXFmb2hqMTBmbjdnZmRva3U4OWxybXFkYTBxZ3o5dTU4ZiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/116a8zosxwA0SI/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N2tsbWRxNDdvdW1sZWdqa253b2x1dTBka3EzaHB3Zm44dmU3cTQyMyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/Z5xk7fGO5FjjTElnpT/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3N2tsbWRxNDdvdW1sZWdqa253b2x1dTBka3EzaHB3Zm44dmU3cTQyMyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/xf20D8HzvTQzu/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3a3BsNzAwdTF6bjZqZmtvZ3poY2g1Y3gwaW1oeHduZnRuOTVyeHd5NyZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/ovif9xhHfDZ8ekYn8V/giphy.gif",
  "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OHRlb2FkMjZ3cHJhYzA3dWJ3bGxkMjA0bWNsMXVna2kweHpzcHk5ZiZlcD12MV9naWZzX3RyZW5kaW5nJmN0PWc/H6cmWzp6LGFvqjidB7/giphy.gif",
];

let mesaggeindex = 0;
let escapeCount = 0;

function handleNoClick() {
  const noBtn = document.querySelector(".no-btn");
  const yesBtn = document.querySelector(".yes-btn");

  //no
  noBtn.textContent = messages[mesaggeindex];
  mesaggeindex = (mesaggeindex + 1) % messages.length;

  //yes
  const currenSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
  const newSize = currenSize * 2;
  yesBtn.style.fontSize = `${newSize}px`;

  //animation
  yesBtn.style.transform = "scale(1.5)";
  yesBtn.style.transition = "transform 0.3s ease";

  //reset
  setTimeout(() => {
    yesBtn.style.transform = "scale(1)";
    yesBtn.style.transition = "transform 0.3s ease";
  }, 100);
}

function handleYesClick() {
  window.location.href = "./yes.html";
}

// Hacer que el botón "No" se escape
function makeNoButtonEscape() {
  const noBtn = document.querySelector(".no-btn");
  const container = document.querySelector(".container");

  function escapeButton(e) {
    e.preventDefault(); // Prevenir el click
    escapeCount++;

    const yesBtn = document.querySelector(".yes-btn");
    const gifImage = document.querySelector(".image-container img");

    // Obtener dimensiones
    const btnRect = noBtn.getBoundingClientRect();

    // Calcular posición aleatoria (dentro del viewport con margen)
    const maxX = window.innerWidth - btnRect.width - 20;
    const maxY = window.innerHeight - btnRect.height - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    // Posicionar de forma absoluta respecto a la página
    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.transform = "none";

    // Después de 3 escapes, hacer más difícil
    if (escapeCount > 3) {
      noBtn.style.transition = "all 0.1s ease";
    }

    // Cambiar el texto del botón No
    if (escapeCount <= messages.length) {
      noBtn.textContent = messages[escapeCount - 1];
    }

    // Cambiar el GIF según el número de escapes
    if (escapeCount <= gifs.length) {
      gifImage.src = gifs[escapeCount - 1];
    }

    // Hacer crecer el botón Sí cada vez que el No se escape
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    const newSize = currentSize * 1.2; // Crece un 20% cada vez
    yesBtn.style.fontSize = `${newSize}px`;

    // Animación de pulso
    yesBtn.style.transform = "scale(1.2)";
    yesBtn.style.transition = "transform 0.3s ease";

    // Reset de la animación
    setTimeout(() => {
      yesBtn.style.transform = "scale(1)";
    }, 300);
  }

  // Para desktop (mouseenter)
  noBtn.addEventListener("mouseenter", escapeButton);

  // Para móvil (touchstart y click)
  noBtn.addEventListener("touchstart", escapeButton);
  noBtn.addEventListener("click", escapeButton);
}

// Inicializar cuando cargue la página
window.addEventListener("DOMContentLoaded", makeNoButtonEscape);
