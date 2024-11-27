window.onload = () => {
    // 延时隐藏海图并显示主内容
    setTimeout(() => {
        document.getElementById('sea-map').style.opacity = 0;
        document.getElementById('main-content').classList.remove('hidden');
        document.getElementById('main-content').style.opacity = 1;
    }, 3000);

    // 为按钮添加点击事件，直接访问链接
    document.getElementById('tg-btn').addEventListener('click', () => {
        console.log("TG按钮被点击");
        window.location.href = 'https://t.co/zyYsMnlXPM'; // 替换为 Telegram 链接
    });

    document.getElementById('twitter-btn').addEventListener('click', () => {
        console.log("推特按钮被点击");
        window.location.href = 'https://x.com/MINGToken'; // 替换为 Twitter 链接
    });

    document.getElementById('dex-btn').addEventListener('click', () => {
        console.log("DEX按钮被点击");
        window.location.href = 'https://pump.fun/coin/4JvuLhSDs2soJUEd6bzpWsC43zCUqJBj65aQ3vu6pump'; // 替换为 DEX 链接
    });
};
