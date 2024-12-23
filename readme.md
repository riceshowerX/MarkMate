
# Markdown 编辑器（Windows版）

这是一个使用 Electron 框架构建的简洁且功能强大的 Markdown 编辑器。该编辑器支持实时预览 Markdown 文档，并为代码块提供语法高亮功能，适合日常的 Markdown 编辑、文档编写和笔记管理。

## 功能特点

- **实时 Markdown 预览**：当你输入 Markdown 内容时，编辑器会自动将其转换为 HTML，并实时显示预览效果。
- **代码语法高亮**：使用 `highlight.js` 提供代码块的语法高亮功能，支持多种编程语言。
- **跨平台支持**：虽然该版本是为 Windows 平台设计的，但你也可以将其构建和运行在 macOS 和 Linux 平台上。
- **轻量简洁**：专注于为 Markdown 用户提供一个简洁、无干扰的写作体验。

## 下载与安装

### Windows 用户

1. 访问 [GitHub Releases 页面](https://github.com/yourusername/my-markdown-editor/releases)。
2. 下载适合你操作系统的安装包（`.exe` 文件）。
3. 运行安装程序并按照提示完成安装。

### 源码安装

如果你想自己构建该应用，可以按照以下步骤进行安装：

#### 克隆仓库：
```bash
git clone https://github.com/yourusername/my-markdown-editor.git
cd my-markdown-editor
```

#### 安装依赖：
```bash
npm install
```

#### 启动应用：
```bash
npm start
```

运行后，应用会启动，你可以看到 Markdown 编辑器。

## 打包与分发

你可以使用 `electron-builder` 来打包和分发应用。使用以下命令生成可分发的文件：

### 创建分发版本：
```bash
npm run dist
```

此命令会在 `dist/` 文件夹中创建一个打包后的应用文件。

## 贡献

欢迎参与贡献！如果你希望改善这个项目，请按照以下步骤操作：

1. Fork 本仓库。
2. 创建一个新分支 (`git checkout -b feature-name`)。
3. 进行修改。
4. 提交修改 (`git commit -am 'Add some feature'`)。
5. 推送到你的分支 (`git push origin feature-name`)。
6. 创建一个 Pull Request。

请确保你的代码遵循现有的代码风格，并在必要时添加测试。

## 许可证

该项目是开源的，使用 [MIT 许可证](LICENSE)。

## 致谢

- **[Electron](https://www.electronjs.org/)**: 用于构建桌面应用的框架。
- **[Marked](https://github.com/markedjs/marked)**: 用于将 Markdown 渲染为 HTML 的 Markdown 解析库。
- **[highlight.js](https://highlightjs.org/)**: 提供代码语法高亮的库。

---

如果你在使用过程中遇到任何问题，或者有新的功能建议，欢迎在 GitHub 上提 Issue 或提交 Pull Request。