// 背景图片切换逻辑（所有页面通用）
document.addEventListener("DOMContentLoaded", function() {
    const slideshow = document.querySelector('.slideshow');
    if (slideshow) {
        const images = slideshow.querySelectorAll('img');
        let current = 0;

        function switchImage() {
            images[current].style.opacity = 0; // 当前图片隐藏
            current = (current + 1) % images.length; // 切换到下一张
            images[current].style.opacity = 1; // 显示下一张
        }

        setInterval(switchImage, 8000); // 每 8 秒切换一次
    }
});
