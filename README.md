# Chenliang Li — academic homepage

个人学术主页初稿，采用 al-folio 风格的简洁排版。当前实现为独立 HTML/CSS/JavaScript，不依赖 Jekyll、Node.js、外部字体或 CDN；并未安装 al-folio 主题。

## 本地预览

在仓库根目录执行：

```bash
python -m http.server 8000 --bind 127.0.0.1
```

在运行服务器的电脑上访问 http://127.0.0.1:8000 。如果服务器运行在远端集群，先通过 SSH 转发 8000 端口：

```bash
ssh -L 8000:127.0.0.1:8000 your-user@your-server
```

也可以直接用浏览器打开 `index.html`，主页没有必须通过 HTTP 加载的依赖。

## 修改内容

- `index.html`：个人介绍、论文、研究实习、教育、奖项及链接。
- `static/css/home.css`：配色、响应式布局、深色模式及打印样式。
- `static/js/home.js`：精选 / 全部论文切换及主题切换；关闭 JavaScript 时仍显示所有论文。
- `static/pdfs/Chenliang_Li_CV.pdf`：用户提供的完整 CV 副本；更新 CV 时替换此文件。
- `offline-mlirl.html`：原仓库首页完整保留的 NeurIPS 2023 项目页，继续使用原有 `static/` 资源。

头像使用仓库根目录的 `photo.jpg`，桌面端位于介绍右侧（200 × 250px），移动端位于介绍上方（140 × 175px）。照片通过 CSS 的 `object-fit` 适配显示区域，原图文件不作修改。HTML 中也设置了显示尺寸，避免样式加载前出现原始大图。更换头像时替换该图片，并同步更新图片描述。修改样式后可更新 CSS 链接的版本参数，避免浏览器沿用旧缓存。

新增论文时复制 `.publication` 条目；`data-selected="true"` 表示默认展示，其他条目在点击 All 后展示。同步更新 All 按钮中的总数。静态页脚日期需要手动更新。

## 内容依据（2026-11-16）

个人信息、教育、实习、奖项及录用信息以用户提供的 `Chenliangli_CV_v2.pdf` 为基础。作者与论文链接按以下公开来源核对：

- PACE: https://arxiv.org/abs/2609.36830
- SORL: https://arxiv.org/abs/2511.20718
- AIHF: https://arxiv.org/abs/2406.06874
- Offline ML-IRL: https://arxiv.org/abs/2302.07457
- Multi-turn reward structure: https://arxiv.org/abs/2505.11821
- Overparameterized IRL: https://arxiv.org/abs/2503.17865
- Adaptive rank control: https://openreview.net/forum?id=lG7VizZQcS
- 对应早期预印本标题为 ADARL: https://arxiv.org/abs/2510.11899
- 导师课题组的录用记录：https://agarcia.engr.tamu.edu/machine-learning-and-artificial-intelligence/

Google Scholar 链接来自 CV；自动访问返回 403，因此没有抓取引用数、h-index 或宣称这是完整论文列表。AIHF 展示 CV / arXiv 标题；会议版本可能使用其他标题。SORL 使用 arXiv 页面上的标题拼写。TMLR 使用正式发表标题，预印本链接保留其早期名称。

## GitHub Pages

该版本可从仓库根目录直接部署到 GitHub Pages。`.nojekyll` 让 GitHub 直接提供静态文件。将修改推送到用于 Pages 的分支，并在 GitHub Settings → Pages 中选取该分支及 `/ (root)`。后续推送后，GitHub Pages 会按仓库的发布配置更新网站。
