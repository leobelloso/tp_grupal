const card2 = document.querySelector('.item-2');
const imagenHombre = document.getElementById("hombre_home");

card2.addEventListener ('click', ()=> {
    card2.style.backgroundImage = 'url(img/hombre_cyberpunk.png)';
});
imagenHombre.addEventListener('click', ()=> {
    imagenHombre.src = "./img/hombre.png";
});
