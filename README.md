# HTML → EXE 轻量打包

基于 [Neutralinojs](https://neutralino.js.org) 将 HTML/CSS/JS 打包为轻量 Windows/Linux/macOS 可执行程序。

**打包后体积约 1-2 MB**，使用系统自带 WebView，不内嵌浏览器。

## 快速开始

### 本地开发

```bash
# 安装 CLI
npm install -g @neutralinojs/neu

# 下载运行时二进制
neu update

# 启动开发模式（热加载）
neu run
```

### 本地构建

```bash
# 构建当前平台的可执行文件
neu build --release

# 输出在 dist/ 目录
```

### 自动构建（推荐）

**推送到 GitHub 自动生成 Windows/Linux/macOS 的 exe：**

1. 把这个文件夹 push 到 GitHub 仓库
2. GitHub Actions 自动运行构建
3. 在 Actions → 最新 run → Artifacts 下载 `.exe`

或者点击 GitHub 仓库的 Actions → "Build HTML to EXE" → "Run workflow" 手动触发。

## 自定义

### 修改 HTML

编辑 `resources/index.html` —— 这是你的应用界面。

### 修改窗口配置

编辑 `neutralino.config.json`：
- `modes.window.title` —— 窗口标题
- `modes.window.width/height` —— 窗口大小
- `cli.binaryName` —— 输出文件名

### 添加更多功能

Neutralinojs 提供了丰富的原生 API（文件系统、系统命令、通知等）：
https://neutralino.js.org/docs/api/overview

## 文件结构

```
html2exe/
├── resources/          # 前端资源（你的 HTML/CSS/JS 放这里）
│   ├── index.html
│   ├── styles.css
│   ├── js/
│   │   ├── neutralino.js   # 自动下载的客户端库
│   │   └── app.js          # 你的应用逻辑
│   └── icons/
├── neutralino.config.json  # 应用配置
├── .github/workflows/      # GitHub Actions 自动构建
└── .gitignore
```

## 技术对比

| 方案 | 体积 | 缺点 |
|------|------|------|
| **Neutralinojs** ✅ | ~1-2MB | WebView2 需系统自带 |
| Tauri | ~600KB | 需要 Rust 工具链 |
| Electron | ~100MB+ | 太大 |
| NW.js | ~50MB+ | 太大 |
