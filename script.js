// Set starting Position

var right = 0;

// Get Slide Width

var slideWidth = document.getElementsByClassName("person")[0].offsetWidth;

var slider = document.querySelector(".people");

// Get Point At Which Slideshow Should Stop (Right)

function getRightStoppingPoint(){
  
  
  var sliderFullwidth = document.getElementsByClassName("slider")[0].offsetWidth;
  var slidecount = document.getElementsByClassName("person").length;
  var slidesAllWidth = slidecount * slideWidth;
  
  return fullyRight = slidesAllWidth + slideWidth - sliderFullwidth;

}

// Run

getRightStoppingPoint();

// Add listener for Change in Window Width

window.addEventListener("resize", sliderWidthChanged);

// Re-Calculate Point At Which Slideshow Should Stop (Right)

function sliderWidthChanged(){
  
  getRightStoppingPoint();
  
};

// Define Clicks To Activate each

var rightClick = document.querySelector(".rightButton");
var leftClick = document.querySelector(".leftButton");

function bothClicksActive(){
  
  rightClick.classList.add("active");
  leftClick.classList.add("active");
}


// Right Click

function slideLeft(){

  
  if(right <= -fullyRight){
    
    rightClick.classList.remove("active");
    
  }
  
  else{
    
    right -= slideWidth;
    bothClicksActive();
    
  }
  
   slider.style.marginLeft = right+"px";
   
}

// Left Click

function slideRight(){
  
  if(right===0 || right >= fullyRight){
    
    leftClick.classList.remove("active");
    
  }
  
  else{
    
     right += slideWidth;
     bothClicksActive();
     
  }
  
  slider.style.marginLeft = right+"px";
  
}