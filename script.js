// 处理海图显示和过渡
window.onload = () => {
    setTimeout(() => {
        document.getElementById('sea-map').style.opacity = 0;  // 隐藏海图
        document.getElementById('main-content').classList.remove('hidden'); // 显示主内容
    }, 3000);  // 延时3秒后过渡
};
