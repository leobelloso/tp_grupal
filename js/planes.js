
const titulo1 = document.querySelector(".cambiarP1");
const titulo2 = document.querySelector(".cambiarP2");
const titulo3 = document.querySelector(".cambiarP3");

/* El código cambia el texto y le agrega sombreado al texto nuevo cuando se pasa el mouse por encima, luego se restaura al texto original, sin sombreado. */
titulo1.addEventListener('mouseenter', () => {
    titulo1.textContent = "Entretenimiento"; 
    titulo1.style.textShadow = "1px 1px 8px rgba(73, 217, 244, 0.5)"; 
});


titulo1.addEventListener('mouseleave', () => {
    titulo1.style.textShadow = "none"; 
    titulo1.textContent = "Plan Home";
});


titulo2.addEventListener('mouseenter', () => {
    titulo2.textContent = "Profesionalidad";
    titulo2.style.textShadow = "1px 1px 8px rgba(73, 217, 244, 0.5)";
});


titulo2.addEventListener('mouseleave', () => {
    titulo2.style.textShadow = "none";
    titulo2.textContent = "Plan Pro";
});


titulo3.addEventListener('mouseenter', () => {
    titulo3.textContent = "Confiabilidad";
    titulo3.style.textShadow = "1px 1px 8px rgba(73, 217, 244, 0.5)";
});


titulo3.addEventListener('mouseleave', () => {
    titulo3.style.textShadow = "none";
    titulo3.textContent = "Plan Business";
});