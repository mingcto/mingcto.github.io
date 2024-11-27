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
