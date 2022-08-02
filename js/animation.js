window.onload = function () {
    window.displayImgCount = 0;
    function cycleImage() {
        if (displayImgCount !== 0) {
            document.getElementById("img" + displayImgCount).style.display = "none";
        }
        displayImgCount = displayImgCount === 5 ? 1 : displayImgCount + 1;
        document.getElementById("img" + displayImgCount).style.display = "block";
        setTimeout(cycleImage, 3000);
    }
    cycleImage();
}