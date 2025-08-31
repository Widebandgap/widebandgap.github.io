document.addEventListener("DOMContentLoaded", function() {
  // 遍历所有 compact view 的 publication 块
  document.querySelectorAll(".pub-compact").forEach(function(pubBlock) {
    // 从 data-authors-star 属性读取 JSON
    const starData = pubBlock.getAttribute("data-authors-star");
    if (!starData) return;
    let stars = [];
    try {
      stars = JSON.parse(starData);
    } catch(e) {
      console.error("authors_star JSON parse error", e);
      return;
    }

    // 遍历作者 DOM
    pubBlock.querySelectorAll(".author").forEach(function(el, index) {
      if (stars[index]) {
        el.textContent += "*"; // 在名字后加星号
      }
    });
  });
});
