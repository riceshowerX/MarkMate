const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const fs = require('fs');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadFile('index.html');

  // 处理打开文件
  ipcMain.handle('open-file', async () => {
    const result = await dialog.showOpenDialog(win, {
      properties: ['openFile'],
      filters: [{ name: 'Markdown Files', extensions: ['md'] }],
    });

    if (!result.canceled && result.filePaths.length > 0) {
      const filePath = result.filePaths[0];
      const content = fs.readFileSync(filePath, 'utf-8');
      return { path: filePath, content };
    }
    return null;
  });

  // 处理保存文件
  ipcMain.handle('save-file', async (event, content, filePath) => {
    const result = await dialog.showSaveDialog(win, {
      defaultPath: filePath || path.join(__dirname, 'untitled.md'),
      filters: [{ name: 'Markdown Files', extensions: ['md'] }],
    });

    if (!result.canceled) {
      fs.writeFileSync(result.filePath, content, 'utf-8');
      return { path: result.filePath };
    }
    return null;
  });

  // 处理导出为 PDF
  ipcMain.handle('export-pdf', async (event, content) => {
    const pdfData = await win.webContents.printToPDF({});
    const result = await dialog.showSaveDialog(win, {
      filters: [{ name: 'PDF Files', extensions: ['pdf'] }],
    });

    if (!result.canceled) {
      fs.writeFileSync(result.filePath, pdfData);
      return result.filePath;
    }
    return null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
