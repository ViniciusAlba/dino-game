const ghost = document.querySelector('.ghost');
const background = document.querySelector('.background');
let isJumping = false;
let position = 0;
let score = document.querySelector('.score');
let playerScore = 0;

setInterval(() => {

    playerScore += 10;

    score.innerHTML = playerScore.toString();

}, 1000);

function handleKeyUp(event) {

    if (event.keyCode === 32) {

        if (!isJumping) {

            jump();

        }

    }

}

function jump() {

    isJumping = true;

    let upInterval = setInterval(() => {

        if (position >= 200) {

            clearInterval(upInterval);

            let downInterval = setInterval(() => {

                if (position <= 0) {

                    clearInterval(downInterval);
                    isJumping = false;

                } else {

                    position -= 20;
                    ghost.style.bottom = position + 'px';

                }

            }, 20);

        } else {

            position += 20;
            ghost.style.bottom = position + 'px';

        }
    
    }, 20);

}

function createPumpkins() {

    const pumpkins = document.createElement('div');
    let pumpkinsPosition = 1800;
    let randomTime = Math.random() * 6000 + Math.random() * 6000;

    pumpkins.classList.add('pumpkins');
    pumpkins.style.left = pumpkinsPosition + 'px';
    background.appendChild(pumpkins);

    let leftInterval = setInterval(() => {

        if (pumpkinsPosition < -80) {

            clearInterval(leftInterval);
            background.removeChild(pumpkins);

        } else if (pumpkinsPosition > 0 && pumpkinsPosition < 80 && position < 80) {

            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de jogo</h1>';

        } else {

            pumpkinsPosition -= 10;
            pumpkins.style.left = pumpkinsPosition + 'px';

        }

    }, 20);
    
    setTimeout(createPumpkins, randomTime);

}

createPumpkins();

document.addEventListener('keyup', handleKeyUp);