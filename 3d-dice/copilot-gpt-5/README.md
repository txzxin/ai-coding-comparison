# 3D 掷骰子（copilot-gpt-5）

一个纯前端的 3D 骰子页面：点击“投掷”按钮，骰子进行平滑旋转并随机停在某一面，正面点数即为结果，可重复投掷。

## 运行

方式一：直接用浏览器打开 `index.html`。

方式二：本地起一个静态服务器后访问（可选）：

- PowerShell（Windows）：
  - 如果已安装 Python：`python -m http.server 8080` 然后浏览器访问 `http://localhost:8080/3d-dice/copilot-gpt-5/`

## 说明
- 仅使用 HTML/CSS/JS，无依赖。
- 使用 CSS 3D transform 构建立方体与圆点（pip）。
- 通过为目标姿态叠加随机整圈数，实现自然、非突变的旋转过渡。
