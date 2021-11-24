const forBtn = document.querySelector(".forwardBtn");
const bacBtn = document.querySelector(".backwardBtn");
const photos = document.querySelector(".photos");
let marginLeft = 140;
let useMarR;
forBtn.addEventListener('click', function(){
    console.log("forward button clicked");
    marginLeft -= 200;
    if(marginLeft >= -460 ){
        useMarR = marginLeft.toString();
        photos.style.marginLeft = useMarR + "px";
        console.log(photos.style.marginLeft);
    }
});
bacBtn.addEventListener('click', function(){
    console.log("backward button clicked");
    marginLeft += 200;
    if(marginLeft <= 140){
         useMarR = marginLeft.toString();
         photos.style.marginLeft = useMarR + "px";
         console.log(photos.style.marginLeft);
    }
});