/* 基本重置 */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* 右上角社交按钮样式 */
.social-buttons {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 100;
}

.social-button {
    display: inline-block;
    padding: 12px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    font-size: 16px;
    border: 2px solid #555;
    border-radius: 5px;
    margin-left: 15px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.3s;
}

.social-button i {
    margin-right: 8px;
}

.social-button:hover {
    background-color: #333;
    transform: scale(1.1);
}

/* 页面主体样式 */
#main-content {
    padding: 40px;
    color: #fff;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    font-family: Arial, sans-serif;
}

/* 海图背景的样式 */
.sea-map {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('mingweb3.0.png');
    background-size: cover;
    background-position: center;
    z-index: 1000;
    opacity: 1;
    transition: opacity 3s ease-in-out;
}

.sea-map .sea-content {
    text-align: center;
    color: white;
    font-size: 24px;
    text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.8);
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform: translateX(-50%);
}

/* 页面标题样式 */
.title h1 {
    text-align: center;
    font-size: 36px;
    color: #ddd;
    margin-bottom: 10px;
}

.title p {
    text-align: center;
    font-size: 20px;
    color: #999;
}

/* 介绍部分样式 */
.about, .memecoin, .roadmap {
    margin: 30px 0;
    font-size: 18px;
}

/* 路线图样式 */
.roadmap h2, .memecoin h2, .about h2 {
    font-size: 28px;
    color: #f5f5f5;
    margin-bottom: 20px;
    text-align: center;
}

.roadmap ul {
    list-style: none;
    padding-left: 0;
    font-size: 18px;
}

.roadmap li {
    margin: 15px 0;
}

/* 页脚样式 */
footer {
    text-align: center;
    font-size: 14px;
    color: #999;
    margin-top: 40px;
}

/* 横幅图像样式 */
.banner-image {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
}

/* 优化页面背景 */
body {
    background-color: #121212;
    color: #fff;
    font-family: 'Arial', sans-serif;
}

.hidden {
    display: none;
}
