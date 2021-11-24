const forBtn = document.querySelector(".forwardBtn");
const bacBtn = document.querySelector(".backwardBtn");
const photos = document.querySelector(".photos");
let marginRight = 800;
forBtn.addEventListener('click', function(){
    console.log("forward button clicked");
    marginRight -= 200;
    useMarR = marginRight.toString();
    photos.style.marginRight = useMarR + "px";
    console.log(photos.style.marginRight);
});