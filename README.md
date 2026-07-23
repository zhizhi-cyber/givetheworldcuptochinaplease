# 缺你一票｜静态本地版

## 运行

最简单的方式：直接双击 `index.html`。

推荐方式：

```bash
python3 -m http.server 8080
```

然后打开 `http://localhost:8080`。

## 文件

- `index.html`：页面结构与文案
- `styles.css`：全部视觉样式和响应式布局
- `app.js`：投票、结果、国家选择、分享、海报下载和本地数据

## 数据说明

此版本不依赖服务器，投票结果保存在浏览器 `localStorage`。不同设备、浏览器之间不会同步。如需全网实时计票，需要把 `loadData`、`saveData` 和提交逻辑替换成后端 API。

图片使用 Unsplash 远程链接，首次打开需要联网。
