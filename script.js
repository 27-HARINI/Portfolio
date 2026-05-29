const text = [
    "Software Developer",
    "Frontend Developer",
    "AI Enthusiast",
    "Problem Solver",
    "React Developer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        setTimeout(() => {

            index = 0;
            count++;

        },1000);

    }else{

        setTimeout(type,120);

    }

})();



// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    navbar.classList.toggle("sticky", window.scrollY > 50);

});



// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        if(pageYOffset >= sectionTop - 200){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === `#${current}`){
            link.classList.add("active");
        }

    });

});



// ===============================
// SCROLL TO TOP BUTTON
// ===============================

// CREATE BUTTON

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

document.body.appendChild(topBtn);

topBtn.classList.add("top-btn");


// SHOW/HIDE BUTTON

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});


// BUTTON CLICK

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});



// ===============================
// PROJECT CARD HOVER EFFECT
// ===============================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / 20);
        const rotateY = ((centerX - x) / 20);

        card.style.transform =
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "rotateX(0deg) rotateY(0deg)";

    });

});



// ===============================
// PARTICLE BACKGROUND EFFECT
// ===============================

const canvas = document.createElement("canvas");

canvas.id = "particles";

document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

class Particle{

    constructor(){

        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;

        this.size = Math.random() * 3 + 1;

        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = Math.random() * 1 - 0.5;

    }

    update(){

        this.x += this.speedX;
        this.y += this.speedY;

        if(this.x > canvas.width) this.x = 0;
        if(this.x < 0) this.x = canvas.width;

        if(this.y > canvas.height) this.y = 0;
        if(this.y < 0) this.y = canvas.height;

    }

    draw(){

        ctx.fillStyle = "rgba(255,255,255,0.5)";

        ctx.beginPath();

        ctx.arc(this.x,this.y,this.size,0,Math.PI*2);

        ctx.fill();

    }

}


// CREATE PARTICLES

function initParticles(){

    particlesArray = [];

    for(let i=0;i<100;i++){

        particlesArray.push(new Particle());

    }

}


// ANIMATE PARTICLES

function animateParticles(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    particlesArray.forEach(particle => {

        particle.update();
        particle.draw();

    });

    requestAnimationFrame(animateParticles);

}

initParticles();
animateParticles();



// ===============================
// RESIZE CANVAS
// ===============================

window.addEventListener("resize", () => {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    initParticles();

});



// ===============================
// LOADING ANIMATION
// ===============================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



// ===============================
// CUSTOM CURSOR EFFECT
// ===============================

const cursor = document.createElement("div");

cursor.classList.add("custom-cursor");

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});



// ===============================
// CURSOR HOVER EFFECT
// ===============================

const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .skill-card"
);

hoverElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursor.classList.add("cursor-grow");

    });

    element.addEventListener("mouseleave", () => {

        cursor.classList.remove("cursor-grow");

    });

});



// ===============================
// FADE-IN EFFECT ON LOAD
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const fadeElements = document.querySelectorAll(
        ".hero-text, .hero-image"
    );

    fadeElements.forEach(element => {

        element.style.opacity = "0";

        setTimeout(() => {

            element.style.transition = "1.5s";
            element.style.opacity = "1";

        },300);

    });

});