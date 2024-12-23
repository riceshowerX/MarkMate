const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  openFile: () => ipcRenderer.invoke('open-file'),
  saveFile: (content, path) => ipcRenderer.invoke('save-file', content, path),
  exportPDF: (content) => ipcRenderer.invoke('export-pdf', content),
});
