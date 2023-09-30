let spot = document.getElementById('spot');
let image = document.getElementById('image');
let spotlight = document.querySelector('.spotlight');

spot.addEventListener('mousemove', (e) => {
    let mouseX = e.clientX;
    let mouseY = e.clientY;

    spotlight.style.left = mouseX + 'px';
    spotlight.style.top = mouseY + 'px';
    spotlight.style.display = 'block';

    let imageX = (mouseX / window.innerWidth) * 100;
    let imageY = (mouseY / window.innerHeight) * 100;

    image.style.filter = `brightness(100%)`;
    image.style.clipPath = `circle(150px at ${imageX}% ${imageY}%)`;

    document.body.style.backgroundColor = 'black';
})

spot.addEventListener('mouseleave', () => {
    spotlight.style.display = 'none';
    image.style.filter = `brightness(0)`;
    image.style.clipPath = 'circle(0% at 50% 50%)';
    document.body.style.backgroundColor = 'black';
})
