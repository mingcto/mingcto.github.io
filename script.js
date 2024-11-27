// 处理海图显示和过渡
window.onload = () => {
    const backgroundImages = [
        'underworld1.jpg',
        'underworld2.jpg',
        'underworld3.jpg'
    ];

    // 随机选择一个背景图
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    document.querySelector('.sea-map').style.backgroundImage = `url(${backgroundImages[randomIndex]})`;

    // 3秒后切换内容
    setTimeout(() => {
        document.getElementById('sea-map').style.opacity = 0;  // 隐藏海图
        document.getElementById('main-content').classList.remove('hidden'); // 显示主内容
    }, 3000);  // 延时3秒后过渡
};
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
};
