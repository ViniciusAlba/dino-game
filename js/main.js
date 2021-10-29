const ghost = document.querySelector('.ghost');
let isJumping = false;

function handleKeyUp(event) {

    if (event.keyCode === 32) {

        if (!isJumping) {

            jump();

        }

    }

}

function jump() {

    let position = 0;

    isJumping = true;

    let upInterval = setInterval(() => {

        if (position >= 150) {

            // Down Ghost

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

            // Up Ghost

            position += 20;
        
            ghost.style.bottom = position + 'px';

        }
    
    }, 20);

}

document.addEventListener('keyup', handleKeyUp);