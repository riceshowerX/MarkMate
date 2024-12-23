const { ipcRenderer } = require('electron'); // 引入 ipcRenderer
const marked = require('marked');
const hljs = require('highlight.js');

const editor = document.getElementById('editor');
const preview = document.getElementById('preview');


marked.setOptions({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang, ignoreIllegals: true }).value;
      } catch (__) {}
    }
    return hljs.highlightAuto(code).value;
  }
});

editor.addEventListener('input', () => {
    preview.innerHTML = marked.parse(editor.value);
});