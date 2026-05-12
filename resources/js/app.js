// 初始化 Neutralino
Neutralino.init();

// 系统信息
Neutralino.os.getEnv("OS").then(env => {
  document.getElementById('os-name').textContent = env || navigator.platform || '未知';
});

Neutralino.os.execCommand('echo %cd%').catch(() => {
  // 非 Windows 环境，用 app API
  Neutralino.app.getConfig().then(cfg => {
    document.getElementById('app-path').textContent = cfg.applicationId || '未知';
  });
});

// 计数器
let count = 0;
const countEl = document.getElementById('count');

document.getElementById('btn-plus').addEventListener('click', () => {
  count++;
  countEl.textContent = count;
});

document.getElementById('btn-minus').addEventListener('click', () => {
  count--;
  countEl.textContent = count;
});

// 打开网页
document.getElementById('btn-open-url').addEventListener('click', () => {
  Neutralino.os.open("https://neutralino.js.org");
});

// 弹出消息
document.getElementById('btn-show-msg').addEventListener('click', () => {
  Neutralino.os.showMessageBox("提示", "这是你的 HTML 应用！", "OK", "INFO");
});
