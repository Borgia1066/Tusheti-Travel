let Descript = document.getElementById('Descript');
let Text = document.getElementById('Text');
let Choose = document.getElementById('Choose');
window.addEventListener('scroll', function () {
    let value = window.scrollY;
    Descript.style.marginLeft = -value + 'px';
    Text.style.marginLeft = -value + 'px';
    Choose.style.marginLeft = -value + 'px';
})
let Circle = document.getElementById('circle');
let Right = document.getElementById('rightArrow');
let Left = document.getElementById('leftArrow');
let first = document.getElementById('firstIm');
let second = document.getElementById('secondIm');
let third = document.getElementById('thirdIm');

Right.addEventListener("click", myFunction);
Left.addEventListener("click", MyFunction);

function myFunction() {
    Circle.style.marginLeft = 1300 + 30 + 'px';
    first.src = "Photos/1.jpg";
    second.src = "Photos/2.jpg";
    third.src = "Photos/3.jpg";
}

function MyFunction() {
    Circle.style.marginLeft = 1300 + 'px';
    first.src = "Photos/sven.jpg";
    second.src = "Photos/thomas-kelley-JoH60FhTp50-unsplash.jpg";
    third.src = "Photos/tommy.jpg";
}

let links = document.querySelectorAll(".scrollTo");
links.forEach((item) => {
    item.addEventListener("click", () => {
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    })
})
