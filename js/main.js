const card2 = document.querySelector('.item-2');
const imagenHombre = document.getElementById("hombre_home");

card2.addEventListener ('click', ()=> {
    card2.style.backgroundImage = 'url(img/hombre_cyberpunk.png)';
});
imagenHombre.addEventListener('click', ()=> {
    imagenHombre.src = "./img/hombre.png";
});


/* ------------------------------------------- */










/* LEO TESTING */

/* const card2 = document.querySelector('.item-2');
const imagenHombre = document.getElementById("hombre_home");

card2.addEventListener ('mouseenter', ()=> {
    card2.style.backgroundImage = 'none';
    card2.textContent = "Hola MUNDO";
    card2.style.fontSize = "50px";
    card2.style.color = "blue";
    card2.style.fontWeight = "bold";
});

card2.addEventListener('mouseleave', () => {

    card2.style.backgroundImage = 'url(img/home_1.jpg)';
    card2.textContent = "";

}); */