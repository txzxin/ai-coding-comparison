class DiceGame {
    constructor() {
        this.dice = document.getElementById('dice');
        this.rollButton = document.getElementById('rollButton');
        this.result = document.getElementById('result');
        this.isRolling = false;
        
        this.rollButton.addEventListener('click', () => this.rollDice());
        
        this.diceRotations = {
            1: 'dice-1',
            2: 'dice-2', 
            3: 'dice-3',
            4: 'dice-4',
            5: 'dice-5',
            6: 'dice-6'
        };
    }
    
    getRandomNumber() {
        return Math.floor(Math.random() * 6) + 1;
    }
    
    rollDice() {
        if (this.isRolling) return;
        
        this.isRolling = true;
        this.rollButton.disabled = true;
        this.rollButton.textContent = '投掷中...';
        this.result.textContent = '';
        
        this.dice.classList.remove('dice-1', 'dice-2', 'dice-3', 'dice-4', 'dice-5', 'dice-6');
        this.dice.classList.add('rolling');
        
        const randomResult = this.getRandomNumber();
        
        setTimeout(() => {
            this.dice.classList.remove('rolling');
            this.dice.classList.add(this.diceRotations[randomResult]);
            
            setTimeout(() => {
                this.showResult(randomResult);
                this.isRolling = false;
                this.rollButton.disabled = false;
                this.rollButton.textContent = '投掷骰子';
            }, 200);
            
        }, 2000);
    }
    
    showResult(number) {
        this.result.textContent = `投掷结果: ${number}`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new DiceGame();
});