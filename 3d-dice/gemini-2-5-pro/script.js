document.addEventListener('DOMContentLoaded', () => {
    const dice = document.querySelector('.dice');
    const rollButton = document.getElementById('roll-button');

    const faces = {
        front: 1,
        back: 6,
        right: 3,
        left: 4,
        top: 2,
        bottom: 5,
    };

    const faceElements = document.querySelectorAll('.face');

    // Create dots
    faceElements.forEach(face => {
        let dots = '';
        const faceName = Object.keys(faces).find(key => face.classList.contains(key));
        const dotCount = faces[faceName];

        if (dotCount === 1) {
            dots = '<div class="dot dot-g"></div>';
        } else if (dotCount === 2) {
            dots = '<div class="dot dot-a"></div><div class="dot dot-b"></div>';
        } else if (dotCount === 3) {
            dots = '<div class="dot dot-a"></div><div class="dot dot-g"></div><div class="dot dot-b"></div>';
        } else if (dotCount === 4) {
            dots = '<div class="dot dot-a"></div><div class="dot dot-c"></div><div class="dot dot-d"></div><div class="dot dot-b"></div>';
        } else if (dotCount === 5) {
            dots = '<div class="dot dot-a"></div><div class="dot dot-c"></div><div class="dot dot-g"></div><div class="dot dot-d"></div><div class="dot dot-b"></div>';
        } else if (dotCount === 6) {
            dots = '<div class="dot dot-a"></div><div class="dot dot-c"></div><div class="dot dot-e"></div><div class="dot dot-f"></div><div class="dot dot-d"></div><div class="dot dot-b"></div>';
        }
        face.innerHTML = dots;
    });

    const rotations = {
        1: 'rotateX(0deg) rotateY(0deg)',
        2: 'rotateX(-90deg) rotateY(0deg)',
        3: 'rotateX(0deg) rotateY(-90deg)',
        4: 'rotateX(0deg) rotateY(90deg)',
        5: 'rotateX(90deg) rotateY(0deg)',
        6: 'rotateX(0deg) rotateY(180deg)',
    };

    rollButton.addEventListener('click', () => {
        rollButton.disabled = true;

        // Random spinning animation
        const randomX = (Math.floor(Math.random() * 4) + 4) * 360;
        const randomY = (Math.floor(Math.random() * 4) + 4) * 360;
        dice.style.transition = 'transform 2s ease-out';
        dice.style.transform = `rotateX(${randomX}deg) rotateY(${randomY}deg)`;

        setTimeout(() => {
            const result = Math.floor(Math.random() * 6) + 1;
            dice.style.transition = 'transform 0.5s ease-in-out'; // Smoother landing
            dice.style.transform = rotations[result];
            rollButton.disabled = false;
        }, 2000); // Wait for the spin to finish
    });
});
