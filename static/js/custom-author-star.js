// static/js/custom-author-star.js
document.addEventListener("DOMContentLoaded", function() {
  // ====== 在这里维护每篇 publication 的 author-star 映射 ======
  // 键: publication 页面 URL 的后缀（建议复制浏览器中 title 的 href，保留 "/.../Conference1/" 形式）
  // 值: 与 publication front-matter 的 authors 顺序一一对应的布尔数组
  // 例子（请用你自己页面的 href 替换下面的 key）：
  const starsByPath = {
    // 示例（把下面 key 替换为你复制的链接地址或其路径后缀）
    "https://ethan-zhang-hku.github.io/publication/conference-paper/conference1/": [false,false,false,false,false,false,false,false,false,false,false,false,true]
    // 如果还有其它文章需要设置，继续在这里添加：
    // "/publication/conference-paper/Conference2/": [true, false, ...],
  };

  // ====== 帮助函数：返回没有尾部 / 的 pathname 形式 ======
  function normalizePath(href) {
    try {
      const a = document.createElement('a');
      a.href = href;
      let p = a.pathname || href;
      // 某些情况 pathname 可能为空，回退到 href 本身
      if (!p) p = href;
      // 保证以 / 开头
      if (p[0] !== '/') p = '/' + p;
      // 去掉末尾斜杠（为了匹配的一致性，如果你在 keys 保留末尾 /，也可改）
      if (p.length > 1 && p.endsWith('/')) p = p.replace(/\/+$/, '');
      return p;
    } catch(e) {
      return href;
    }
  }

  // 先把映射表的 key 标准化成 pathname（没有末尾 /）
  const normStars = {};
  Object.keys(starsByPath).forEach(function(k) {
    const nk = normalizePath(k);
    normStars[nk] = starsByPath[k];
  });

  // 查找所有可能是 publication 标题链接的 <a>（尽量广泛匹配）
  // 然后针对每个映射表 key 去匹配对应的链接
  Object.keys(normStars).forEach(function(pagePath) {
    // 尝试匹配页面上所有 href 结尾为 pagePath 或 pathname 相等的链接
    // Use attribute selector that matches ending with pagePath or exact match
    const selector1 = 'a[href$="' + pagePath + '"]';
    const anchorCandidates = Array.from(document.querySelectorAll(selector1));

    // 有时链接是绝对 URL（包含域名），并不能被上面选择器捕获，所以也用 full-match扫描
    // 另外遍历所有 a，检查 normalizePath(a.href) 是否等于 pagePath
    const allA = Array.from(document.querySelectorAll('a'));
    allA.forEach(function(aEl) {
      try {
        const p = normalizePath(aEl.href);
        if (p === pagePath && anchorCandidates.indexOf(aEl) === -1) {
          anchorCandidates.push(aEl);
        }
      } catch(e) {}
    });

    if (anchorCandidates.length === 0) {
      // 没找到任何标题链接，打印提示（在 Console 中可见）
      console.warn("[author-star] no anchor found for", pagePath);
      return;
    }

    // 遍历匹配到的每个锚点（理论上列表页应该只有一个，但有时会有多个）
    anchorCandidates.forEach(function(titleLink) {
      // 从这个 titleLink 向上找最近的祖先（包含它自己）里包含作者链接的容器
      let anc = titleLink;
      let found = false;
      while (anc && anc !== document.body) {
        // 尝试常见的作者链接选择器组合（覆盖不同主题写法）
        const authorLinks = anc.querySelectorAll('.author a, .authors a, .article-authors a, a.author, .pub-author a');
        if (authorLinks && authorLinks.length > 0) {
          found = true;
          const stars = normStars[pagePath] || [];
          // 遍历作者链接并按索引加星号（如果 stars[index] 为 true）
          Array.from(authorLinks).forEach(function(aEl, idx) {
            if (stars[idx]) {
              // append star as clickable text inside the <a> so star is part of the link
              aEl.appendChild(document.createTextNode('*'));
            }
          });
          break;
        }
        anc = anc.parentElement;
      }
      if (!found) {
        // 如果没找到作者链接容器，报告一下，方便调试
        console.warn("[author-star] found title anchor but could not locate author links near it for", pagePath, titleLink);
      } else {
        console.log("[author-star] applied stars for", pagePath);
      }
    });
  });

});
