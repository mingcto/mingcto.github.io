// 页面加载后执行
window.onload = () => {
    // 延时隐藏海图并显示主内容
    setTimeout(() => {
        document.getElementById('sea-map').style.opacity = 0;
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('main-content').style.opacity = 1;
    }, 3000);
};
