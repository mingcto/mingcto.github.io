window.onload = () => {
    // 延时隐藏海图并显示主内容
    setTimeout(() => {
        document.getElementById('sea-map').style.opacity = 0;
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('main-content').style.opacity = 1;
    }, 3000);

    // 为按钮添加点击事件
    document.getElementById('tg-btn').addEventListener('click', () => {
        window.open('https://t.me/+6OHBlZS3Lpo4OGVl',); // 替换为 Telegram 链接
    });

    document.getElementById('twitter-btn').addEventListener('click', () => {
        window.open('https://t.me/+6OHBlZS3Lpo4OGVl'); // 替换为 Twitter 链接
    });

    document.getElementById('dex-btn').addEventListener('click', () => {
        window.open('https://t.me/+6OHBlZS3Lpo4OGVl'); // 替换为 DEX 链接
    });
};
