const forBtn = document.querySelector(".forwardBtn");
const bacBtn = document.querySelector(".backwardBtn");
const photos = document.querySelector(".photos");
let marginLeft = 140;
let useMarR;
const dot1 = document.querySelector(".dot1");
const dot2 = document.querySelector(".dot2");
const dot3 = document.querySelector(".dot3");
const dot4 = document.querySelector(".dot4");
dot1.style.background = 'orange';
function updateCircle(){
  if(marginLeft == 140){
       dot1.style.backgroundColor = 'orange'
       dot2.style.backgroundColor = '#bbb'
       dot3.style.backgroundColor = '#bbb'
       dot4.style.backgroundColor = '#bbb'
  }
  if(marginLeft == -60){
       dot1.style.backgroundColor = '#bbb'
       dot2.style.backgroundColor = 'orange'
       dot3.style.backgroundColor = '#bbb'
       dot4.style.backgroundColor = '#bbb'
  } 
  if(marginLeft == -260){
       dot1.style.backgroundColor = '#bbb'
       dot2.style.backgroundColor = '#bbb'
       dot3.style.backgroundColor = 'orange'
       dot4.style.backgroundColor = '#bbb'
  }
  if(marginLeft == -460){
       dot1.style.backgroundColor = '#bbb'
       dot2.style.backgroundColor = '#bbb'
       dot3.style.backgroundColor = '#bbb'
       dot4.style.backgroundColor = 'orange'
  }
}
dot1.addEventListener('click', function(){
  console.log("dot 1 clicked");
  marginLeft = 140;
  useMarR = marginLeft.toString();
  photos.style.marginLeft = useMarR + "px";
  updateCircle();
});
dot2.addEventListener('click', function(){
  console.log("dot 2 clicked");
  marginLeft = -60;
  useMarR = marginLeft.toString();
  photos.style.marginLeft = useMarR + "px";
  updateCircle();
});
dot3.addEventListener('click', function(){
  console.log("dot 3 clicked");
  marginLeft = -260;
  useMarR = marginLeft.toString();
  photos.style.marginLeft = useMarR + "px";
  updateCircle();
});
dot4.addEventListener('click', function(){
  console.log("dot 4 clicked");
  marginLeft = -460;
  useMarR = marginLeft.toString();
  photos.style.marginLeft = useMarR + "px";
  updateCircle();
});
forBtn.addEventListener('click', function(){
    console.log("forward button clicked");
    marginLeft -= 200;
    if(marginLeft >= -460 ){
        useMarR = marginLeft.toString();
        photos.style.marginLeft = useMarR + "px";
        console.log(photos.style.marginLeft);
        updateCircle();
    } else { marginLeft += 200}
});
bacBtn.addEventListener('click', function(){
    console.log("backward button clicked");
    marginLeft += 200;
    if(marginLeft <= 140){
         useMarR = marginLeft.toString();
         photos.style.marginLeft = useMarR + "px";
         console.log(photos.style.marginLeft);
         updateCircle();
    } else {marginLeft -= 200}
});

var interval = setInterval(function() { 
    if (time <= 400) { 
         marginLeft -= 200;
         if(marginLeft >= -460){
              useMarR = marginLeft.toString();
              photos.style.marginLeft = useMarR + "px";
              updateCircle();
         }
       time++;
    }
    else { 
       clearInterval(interval);
    }
 }, 4000);