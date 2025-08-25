class DiceRoller {
    constructor() {
        this.dice = document.getElementById('dice');
        this.rollButton = document.getElementById('rollButton');
        this.result = document.getElementById('result');
        this.isRolling = false;
        
        this.rollButton.addEventListener('click', () => this.rollDice());
        
        this.faceRotations = {
            1: { x: 0, y: 0, z: 0 },
            2: { x: 0, y: -90, z: 0 },
            3: { x: 0, y: 0, z: -90 },
            4: { x: 0, y: 90, z: 0 },
            5: { x: 90, y: 0, z: 0 },
            6: { x: -90, y: 0, z: 0 }
        };
    }
    
    rollDice() {
        if (this.isRolling) return;
        
        this.isRolling = true;
        this.rollButton.disabled = true;
        this.rollButton.textContent = '投掷中...';
        
        this.result.innerHTML = '<p>骰子正在滚动...</p>';
        
        const randomResult = Math.floor(Math.random() * 6) + 1;
        
        const totalRotations = 4 + Math.random() * 2;
        const finalRotation = this.faceRotations[randomResult];
        
        const finalX = finalRotation.x + (totalRotations * 360);
        const finalY = finalRotation.y + (totalRotations * 360);
        const finalZ = finalRotation.z + (totalRotations * 360);
        
        const finalTransform = `rotateX(${finalX}deg) rotateY(${finalY}deg) rotateZ(${finalZ}deg)`;
        
        this.dice.style.setProperty('--final-rotation', finalTransform);
        
        this.dice.classList.add('rolling');
        
        setTimeout(() => {
            this.dice.classList.remove('rolling');
            this.dice.style.transform = finalTransform;
            
            setTimeout(() => {
                this.showResult(randomResult);
                this.isRolling = false;
                this.rollButton.disabled = false;
                this.rollButton.textContent = '再次投掷';
            }, 200);
        }, 2000);
    }
    
    showResult(number) {
        const points = {
            1: '一点',
            2: '两点',
            3: '三点',
            4: '四点',
            5: '五点',
            6: '六点'
        };
        
        this.result.innerHTML = `
            <p>投掷结果：<strong>${points[number]} (${number})</strong></p>
        `;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DiceRoller();
});