class DiceGame {
    constructor() {
        this.dice = document.getElementById('dice');
        this.rollBtn = document.getElementById('rollBtn');
        this.result = document.getElementById('result');
        this.isRolling = false;
        
        this.init();
    }
    
    init() {
        this.rollBtn.addEventListener('click', () => this.rollDice());
        this.dice.classList.add('show-1');
    }
    
    rollDice() {
        if (this.isRolling) return;
        
        this.isRolling = true;
        this.rollBtn.disabled = true;
        this.rollBtn.textContent = '投掷中...';
        this.result.textContent = '';
        
        this.dice.classList.remove('show-1', 'show-2', 'show-3', 'show-4', 'show-5', 'show-6');
        this.dice.classList.add('rolling');
        
        const finalResult = Math.floor(Math.random() * 6) + 1;
        
        setTimeout(() => {
            this.dice.classList.remove('rolling');
            this.dice.classList.add(`show-${finalResult}`);
            
            setTimeout(() => {
                this.showResult(finalResult);
                this.isRolling = false;
                this.rollBtn.disabled = false;
                this.rollBtn.textContent = '投掷骰子';
            }, 100);
            
        }, 2000);
    }
    
    showResult(number) {
        const messages = {
            1: '🎯 投出了 1 点！',
            2: '🎲 投出了 2 点！',
            3: '🎊 投出了 3 点！',
            4: '🍀 投出了 4 点！',
            5: '⭐ 投出了 5 点！',
            6: '🎉 投出了 6 点！大吉大利！'
        };
        
        this.result.textContent = messages[number];
        
        if (number === 6) {
            this.result.style.color = '#ffd700';
            this.result.style.textShadow = '0 0 10px rgba(255, 215, 0, 0.8)';
        } else {
            this.result.style.color = 'white';
            this.result.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.3)';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DiceGame();
});