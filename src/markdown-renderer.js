const marked = require('marked');
const hljs = require('highlight.js');

// 配置 marked
marked.setOptions({
  highlight: (code, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(code, { language: lang, ignoreIllegals: true }).value;
      } catch (err) {
        console.error(err);
      }
    }
    return hljs.highlightAuto(code).value; // 默认高亮
  }
});

function renderMarkdown(content) {
  return marked(content);
}

module.exports = { renderMarkdown };
