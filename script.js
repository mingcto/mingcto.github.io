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

