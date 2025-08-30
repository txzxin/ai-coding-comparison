const dice = document.querySelector('.dice');
const rollBtn = document.getElementById('roll-btn');
const resultDiv = document.getElementById('result');

const faces = [
    { name: 'front', number: 1, rotateX: 0, rotateY: 0 },
    { name: 'right', number: 3, rotateX: 0, rotateY: -90 },
    { name: 'back', number: 6, rotateX: 0, rotateY: 180 },
    { name: 'left', number: 4, rotateX: 0, rotateY: 90 },
    { name: 'top', number: 2, rotateX: -90, rotateY: 0 },
    { name: 'bottom', number: 5, rotateX: 90, rotateY: 0 }
];

rollBtn.addEventListener('click', () => {
    // 禁用按钮防止重复点击
    rollBtn.disabled = true;
    resultDiv.textContent = '投掷中...';

    // 随机选择一个面
    const randomIndex = Math.floor(Math.random() * faces.length);
    const selectedFace = faces[randomIndex];

    // 添加旋转动画类
    dice.classList.add('roll');

    // 动画结束后设置最终位置并显示结果
    setTimeout(() => {
        dice.classList.remove('roll');
        dice.style.transform = `rotateX(${selectedFace.rotateX}deg) rotateY(${selectedFace.rotateY}deg)`;
        resultDiv.textContent = `结果：${selectedFace.number}`;
        rollBtn.disabled = false;
    }, 2000); // 匹配动画时间
});
