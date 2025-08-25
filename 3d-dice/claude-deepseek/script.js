class Dice {
    constructor() {
        this.dice = document.querySelector('.dice');
        this.rollBtn = document.getElementById('rollBtn');
        this.resultDisplay = document.getElementById('result');
        this.isRolling = false;
        
        this.faceRotations = {
            1: { x: 0, y: 0 },      // 正面
            2: { x: 0, y: 180 },    // 背面
            3: { x: 0, y: 90 },     // 右侧
            4: { x: 0, y: -90 },    // 左侧
            5: { x: 90, y: 0 },     // 上面
            6: { x: -90, y: 0 }     // 下面
        };
        
        this.initializeEventListeners();
    }
    
    initializeEventListeners() {
        this.rollBtn.addEventListener('click', () => this.roll());
    }
    
    roll() {
        if (this.isRolling) return;
        
        this.isRolling = true;
        this.rollBtn.disabled = true;
        this.resultDisplay.textContent = '骰子旋转中...';
        this.rollBtn.classList.add('rolling');
        
        const randomResult = Math.floor(Math.random() * 6) + 1;
        const targetRotation = this.faceRotations[randomResult];
        
        const randomX = Math.floor(Math.random() * 10 + 5) * 360;
        const randomY = Math.floor(Math.random() * 10 + 5) * 360;
        const randomZ = Math.floor(Math.random() * 5 + 2) * 360;
        
        this.dice.style.transition = 'transform 2s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
        this.dice.style.transform = `
            rotateX(${randomX + targetRotation.x}deg) 
            rotateY(${randomY + targetRotation.y}deg) 
            rotateZ(${randomZ}deg)
        `;
        
        setTimeout(() => {
            this.showResult(randomResult);
        }, 2000);
    }
    
    showResult(result) {
        this.isRolling = false;
        this.rollBtn.disabled = false;
        this.rollBtn.classList.remove('rolling');
        
        const resultText = `投掷结果: ${result}点`;
        this.resultDisplay.textContent = resultText;
        
        this.dice.style.transition = 'transform 0.5s ease';
        
        setTimeout(() => {
            this.dice.style.transition = 'transform 2s cubic-bezier(0.17, 0.67, 0.83, 0.67)';
        }, 500);
    }
    
    reset() {
        this.dice.style.transform = 'rotateX(0deg) rotateY(0deg)';
        this.resultDisplay.textContent = '点击按钮开始投掷';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Dice();
});