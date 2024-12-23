const { renderMarkdown } = require('./src/markdown-renderer');
const { toggleTheme } = require('./src/theme-manager');

const editor = document.getElementById('editor');
const preview = document.getElementById('preview');
const themeToggleButton = document.getElementById('toggle-theme');
const openFileButton = document.getElementById('open-file');
const saveFileButton = document.getElementById('save-file');
const exportPDFButton = document.getElementById('export-pdf');
const fileInfo = document.getElementById('file-info');

let currentFilePath = null;

// 监听主题切换
themeToggleButton.addEventListener('click', toggleTheme);

// 监听编辑器内容变化
editor.addEventListener('input', () => {
  preview.innerHTML = renderMarkdown(editor.value);
});

// 打开文件
openFileButton.addEventListener('click', async () => {
  try {
    const fileData = await window.electron.openFile();
    if (fileData) {
      editor.value = fileData.content;
      preview.innerHTML = renderMarkdown(fileData.content);
      currentFilePath = fileData.path;
      fileInfo.textContent = `当前文件: ${fileData.path}`;
    }
  } catch (err) {
    console.error('打开文件失败:', err);
  }
});

// 保存文件
saveFileButton.addEventListener('click', async () => {
  try {
    if (currentFilePath) {
      await window.electron.saveFile(editor.value, currentFilePath);
      fileInfo.textContent = `已保存: ${currentFilePath}`;
    } else {
      const fileData = await window.electron.saveFile(editor.value);
      currentFilePath = fileData.path;
      fileInfo.textContent = `已保存: ${fileData.path}`;
    }
  } catch (err) {
    console.error('保存文件失败:', err);
  }
});

// 导出为 PDF
exportPDFButton.addEventListener('click', async () => {
  try {
    const filePath = await window.electron.exportPDF(editor.value);
    if (filePath) {
      alert(`PDF 导出成功，保存在：${filePath}`);
    }
  } catch (err) {
    console.error('导出 PDF 失败:', err);
  }
});
