---
layout: doc
aside: false
outline: false

title: '首页'
---

<div class="custom-home-page">
  <div class="hero">
    <h1>
      <span>
        🐚 翻贝
        <span class="balloon">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><path fill="#BAE6FF" d="M41.4,-15C49.7,12.1,49.8,40.3,34.4,52.7C19.1,65.1,-11.6,61.6,-32.5,46.1C-53.4,30.6,-64.5,3,-57.5,-22.3C-50.4,-47.7,-25.2,-70.7,-4.3,-69.3C16.6,-67.9,33.1,-42,41.4,-15Z" transform="translate(100 100)" /></svg>
        </span>
      </span>
    </h1>
    <h2>英译中技术文档共享</h2>
    <div class="actions">
      <a class="action brand" href="https://gavinliu6.github.io/Git-Internals-zh_CN" target="_blank">
        Git 内部结构（最新翻译）
      </a>
      <a class="action alt" href="https://github.com/gavinliu6/fanbei" target="_blank">在 GitHub 上查看该项目</a>
    </div>
  </div>
</div>

::: info 译者说明
本站所有内容均出于译者个人兴趣翻译，仅供学习交流使用。

鉴于译者水平有限，译者不保证译文与原文含义的完全匹配以及相关翻译的准确性，请读者自行甄别。
:::

## 已翻译文档列表

- [Makefile 教程](https://gavinliu6.github.io/Makefile-Tutorial-zh-CN/)
- [Git 内部结构](https://gavinliu6.github.io/Git-Internals-zh_CN/)

## 单篇译文列表

### Git

- [🌳🚀 CS 可视化：有用的 Git 命令](/articles/cs-visualized-useful-git-commands)

<style>
.custom-home-page .hero {
  position: relative;
  margin: 76px 0 38px;
}

.custom-home-page .hero h1 {
  font-size: 40px;
  line-height: 50px;
  font-weight: 500;
  letter-spacing: 0.1em;
  margin: 0 auto;
  text-align: center;
}

.custom-home-page .hero h1 > span {
  position: relative;
}

.custom-home-page .hero .balloon {
  position: absolute;
  left: -1.2em;
  top: -1.2em;
  width: 2.5em;
  height: 2.5em;
  z-index: -1;
}

.custom-home-page .hero h2 {
  color: var(--vp-c-text-2);
  font-size: 30px;
  line-height: 36px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-align: center;
  margin-top: 0;
  margin-bottom: 36px;
  border: none;
}

.actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 16px;
}

.action {
  display: inline-block;
  width: 100%;
  border: 1px solid transparent;
  text-align: center;
  font-weight: 600;
  white-space: nowrap;
  transition: color .25s, border-color .25s, background-color .25s;
  border-radius: 20px;
  padding: 0 20px;
  line-height: 38px;
  font-size: 14px;
  text-decoration-line: none!important;
}

.action.brand {
  border-color: var(--vp-button-brand-border);
  color: var(--vp-button-brand-text);
  background-color: var(--vp-button-brand-bg);
}

.action.brand:hover {
  border-color: var(--vp-button-brand-hover-border);
  color: var(--vp-button-brand-hover-text);
  background-color: var(--vp-button-brand-hover-bg);
}

.action.alt {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-color: var(--vp-button-alt-border);
  color: var(--vp-button-alt-text);
  background-color: var(--vp-button-alt-bg);
}

.action.alt:hover {
  border-color: var(--vp-button-alt-hover-border);
  color: var(--vp-button-alt-hover-text);
  background-color: var(--vp-button-alt-hover-bg);
}

@media (min-width: 640px) {
  .custom-home-page .hero {
    margin: 96px 0 48px;
  }

  .custom-home-page .hero h2 {
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0.1em;
  }

  .custom-home-page .hero h1 {
    font-size: 60px;
    line-height: 64px;
    letter-spacing: 0.1em;
  }

  .actions {
    flex-direction: row;
    column-gap: 12px;
  }

  .action {
    width: fit-content;
  }
}
</style>
