const shareButton = document.getElementById('share');
const rotateShape = document.getElementById('rotateShape');
const shareOptions = document.getElementById('shareOptions');
const mobileRotateShape = document.getElementById('mb-rotateShape');
const mobileShareOptions = document.getElementById('mb-shareOptions');
const mobileFooter = document.getElementById('mobileFooter');

const svgPath = document.getElementById('path');

shareButton.addEventListener('click', () => {
    svgPath.classList.toggle("white-icon");
    
    if (svgPath.classList.contains("white-icon")){
        shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
        rotateShape.classList.add("show");
        shareOptions.classList.add("show");

        mobileFooter.classList.add("show");

    } else {
        shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
        rotateShape.classList.remove("show");
        shareOptions.classList.remove("show");

        mobileFooter.classList.remove("show");
    }
    
})