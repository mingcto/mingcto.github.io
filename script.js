window.onload = () => {
    // 延时隐藏海图并显示主内容
    setTimeout(() => {
        document.getElementById('sea-map').style.opacity = 0;
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('main-content').style.opacity = 1;
    }, 3000);

    // 为按钮添加点击事件，直接访问链接
// JavaScript (script.js)
document.getElementById('tg-button').onclick = function() {
    window.location.href = 'https://www.baidu.com'; // TG 链接
};

document.getElementById('twitter-button').onclick = function() {
    window.location.href = 'https://www.baidu.com'; // Twitter 链接
};

document.getElementById('dex-button').onclick = function() {
    window.location.href = 'https://www.baidu.com'; // DEX 链接
};

