// Simple 3D dice roller
(function () {
  const cube = document.getElementById('cube');
  const rollBtn = document.getElementById('rollBtn');
  const resultEl = document.getElementById('result');

  const faceRotations = {
    // 让对应点数朝向前面（可见）时的世界旋转角度
    1: { x: 0,   y: 0   },        // front
    2: { x: 90,  y: 0   },        // bottom -> 朝前需要绕X 90
    3: { x: 0,   y: -90 },        // right -> 朝前需要绕Y -90
    4: { x: 0,   y: 90  },        // left -> 朝前需要绕Y 90
    5: { x: -90, y: 0   },        // top -> 朝前需要绕X -90
    6: { x: 180, y: 0   },        // back -> 朝前需要绕X 180 或 Y 180
  };

  // 为了更自然的动画，我们在目标基础上加上多个 360 度整圈
  function buildRotation(target, spinsX, spinsY) {
    return `translateZ(-70px) rotateX(${target.x + spinsX * 360}deg) rotateY(${target.y + spinsY * 360}deg)`;
  }

  // 返回 [1..6] 的随机整数
  function randFace() {
    return Math.floor(Math.random() * 6) + 1;
  }

  let animating = false;
  let current = 1; // 当前朝前的点数

  function roll() {
    if (animating) return;
    animating = true;
    rollBtn.disabled = true;

    const next = randFace();

    // 增加随机圈数，保证每次旋转路径不同且流畅
    const spinsX = 1 + Math.floor(Math.random() * 3); // 1~3 圈
    const spinsY = 1 + Math.floor(Math.random() * 3);

    const target = faceRotations[next];

    // 在开始前给一个轻微的预旋转，减少“静止->旋转”突变感
    cube.classList.add('rolling');

    // 强制触发一次重绘，确保类名切换被浏览器采纳
    // eslint-disable-next-line no-unused-expressions
    cube.offsetHeight;

    cube.style.transform = buildRotation(target, spinsX, spinsY);

    const onEnd = () => {
      cube.removeEventListener('transitionend', onEnd);
      cube.classList.remove('rolling');
      current = next;
      resultEl.textContent = String(current);
      rollBtn.disabled = false;
      animating = false;
    };

    cube.addEventListener('transitionend', onEnd, { once: false });
  }

  // 初始化朝向（1 朝前）
  cube.style.transform = buildRotation(faceRotations[current], 0, 0);

  rollBtn.addEventListener('click', roll);
})();
