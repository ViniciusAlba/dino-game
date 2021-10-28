const ghost = document.querySelector('.ghost');

function handleKeyUp(event) {

    if (event.keyCode === 32) {

        jump();

    }

}

function jump() {

    let position = 0;

    let upInterval = setInterval(() => {

        if (position >= 150) {

            // Down Ghost

            clearInterval(upInterval);

            let downInterval = setInterval(() => {

                if (position <= 0) {

                    cleartInterval(downInterval);

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