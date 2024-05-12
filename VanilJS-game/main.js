const character = document.getElementById("character");
const block = document.getElementById("block");
const game = document.getElementById("game");

const jump = () => {
    if (!character.classList.contains("animate")) {
        character.classList.add("animate");
    }
    jumpTimeout();
};

const jumpTimeout = () => {
    setTimeout(() => {
        character.classList.remove("animate");
    }, 500);
};

const checkDead = setInterval(() => {
    const characterTop = parseInt(window.getComputedStyle(character)
                         .getPropertyValue("top"));

    console.log(characterTop);
    const blockLeft = parseInt(window.getComputedStyle(block)
                      .getPropertyValue("left"));

    //// ako div sa animacijom dodatke diva koji skace == game over
    if (blockLeft <20 && blockLeft>0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        alert("You lose");
        resetGame();
    }
}, 10);

const resetGame = () => {
    // resetuj na pocetnu vrednost block diva
    block.style.left = "480px"; 
    block.style.animation = ""; 
    block.style.display = "block"; 
};

    game.addEventListener("click", jump);

