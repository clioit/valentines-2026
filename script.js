// Clio Tsao, Feb. 11, 2026
// Built from Su Lei's "Will you be my Valentine?" at https://github.com/lovesulei/valentine-ask/tree/main

// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const yesFinalBtn = document.querySelector(".yes-final-btn");
const noFinalBtn = document.querySelector(".no-final-btn");

const bgm1 = document.getElementById("bgm1");
const bgm2 = document.getElementById("bgm2");
const clickSound = document.getElementById("click");


// Click Envelope
envelope.addEventListener("click", () => {
    clickSound.play();
    bgm1.play();
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn
noBtn.addEventListener("mouseover", () => {
    const min = 100;
    const max = 100;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow
let yesScale = 1;

yesBtn.style.position = "flex"
yesBtn.style.transformOrigin = "center center";
yesBtn.style.transition = "transform 0.3s ease";

noBtn.addEventListener("click", () => {
    yesScale += 2;

    if (yesBtn.style.position !== "flex") {
        yesBtn.style.position = "flex";
        yesBtn.style.top = "50%";
        yesBtn.style.left = "50%";
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }else{
        yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
    }
});


// Click NoBtn
noBtn.addEventListener("click", () => {
    clickSound.play();
    title.textContent = "hm.";

    // catImg.src = "images/cat-side-eye-cat.gif";
    catImg.src = "images/mad-cat-side-eye.gif";


    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    noFinalBtn.style.display = "inline-block";

    noBtn.style.display= "none";

});

// Click YesBtn
yesBtn.addEventListener("click", () => {
    clickSound.play();
    bgm1.pause();
    bgm1.currentTime = 0;
    bgm2.play();

    title.textContent = "Yippeeee!";

    catImg.src = "images/yippee-cat.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "none";

    yesFinalBtn.style.display = "inline-block";

});

// Click NoFinalBtn
noFinalBtn.addEventListener("click", () => {
    clickSound.play();
    title.textContent = "will you be my valentine..";

    catImg.src = "images/cat-side-eye-cat.gif";

    document.querySelector(".letter-window").classList.remove("no-btn");

    buttons.style.display = "flex";
    
    noFinalBtn.style.display = "none";
});


// Click YesFinalBtn
yesFinalBtn.addEventListener("click", () => {
    clickSound.play();
    title.textContent = "muah muah";

    catImg.src = "images/kiss-cat.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";

    yesFinalBtn.style.display = "none";

});