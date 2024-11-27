// 页面加载后执行
window.onload = () => {
    // 默认显示英文内容
    let isEnglish = true;

    // 切换语言按钮
    const languageToggleBtn = document.getElementById('language-toggle-btn');

    // 语言切换逻辑
    languageToggleBtn.addEventListener('click', () => {
        isEnglish = !isEnglish;

        // 切换语言按钮文本
        languageToggleBtn.textContent = isEnglish ? 'EN' : 'CN';

        // 切换页面中所有带有 data-* 属性的元素
        const elements = document.querySelectorAll('[data-en], [data-zh]');
        elements.forEach(element => {
            if (isEnglish) {
                // 切换到英文文本
                element.textContent = element.getAttribute('data-en');
            } else {
                // 切换到中文文本
                element.textContent = element.getAttribute('data-zh');
            }
        });
    });

    // 初始显示英文内容
    languageToggleBtn.textContent = 'EN';

    // 默认显示首页内容，隐藏其他部分
    const mainContent = document.getElementById('main-content');
    const seaMap = document.getElementById('sea-map');
    
    // 设置一个延时，让首页内容加载后再显示主内容
    setTimeout(() => {
        seaMap.style.opacity = '0';  // 渐变消失
        mainContent.classList.remove('hidden');  // 显示主内容
    }, 3000);  // 海图背景消失时间为3秒
};
