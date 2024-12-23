const { dialog } = require('electron');
const fs = require('fs');
const path = require('path');

function openFile(window) {
  return dialog.showOpenDialog(window, {
    properties: ['openFile'],
    filters: [{ name: 'Markdown Files', extensions: ['md'] }]
  }).then(result => {
    if (!result.canceled && result.filePaths.length > 0) {
      const filePath = result.filePaths[0];
      const content = fs.readFileSync(filePath, 'utf-8');
      return { path: filePath, content };
    }
    return null;
  });
}

function saveFile(window, content, filePath = null) {
  return dialog.showSaveDialog(window, {
    defaultPath: filePath || path.join(__dirname, 'untitled.md'),
    filters: [{ name: 'Markdown Files', extensions: ['md'] }]
  }).then(result => {
    if (!result.canceled) {
      const filePath = result.filePath;
      fs.writeFileSync(filePath, content, 'utf-8');
      return { path: filePath };
    }
  });
}

function exportAsPDF(window, content) {
  return window.webContents.printToPDF({}).then(pdfData => {
    return dialog.showSaveDialog(window, {
      filters: [{ name: 'PDF Files', extensions: ['pdf'] }]
    }).then(result => {
      if (!result.canceled) {
        fs.writeFileSync(result.filePath, pdfData);
      }
    });
  });
}

module.exports = { openFile, saveFile, exportAsPDF };
