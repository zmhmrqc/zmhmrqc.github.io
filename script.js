/**
 * zmhmrqc.github.io 网站交互脚本
 */

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('网站加载完成，当前时间：' + new Date().toLocaleString());
    
    // 更新页脚年份
    updateFooterYear();
});

/**
 * 更新页脚年份
 */
function updateFooterYear() {
    const footer = document.querySelector('.footer');
    if (footer) {
        const currentYear = new Date().getFullYear();
        // 替换页脚中的年份，例如将 "© 2026" 替换为当前年份
        footer.textContent = footer.textContent.replace(/© \d{4}/, `© ${currentYear}`);
    }
}
