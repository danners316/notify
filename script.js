var right=0,slideWidth=document.getElementsByClassName("person")[0].offsetWidth,slider=document.querySelector(".people");function getRightStoppingPoint(){var t=document.getElementsByClassName("slider")[0].offsetWidth,e=document.getElementsByClassName("person").length;return fullyRight=e*slideWidth+slideWidth-t}function sliderWidthChanged(){getRightStoppingPoint()}getRightStoppingPoint(),window.addEventListener("resize",sliderWidthChanged);var rightClick=document.querySelector(".rightButton"),leftClick=document.querySelector(".leftButton");function bothClicksActive(){rightClick.classList.add("active"),leftClick.classList.add("active")}function slideLeft(){right<=-fullyRight?rightClick.classList.remove("active"):(right-=slideWidth,bothClicksActive()),slider.style.marginLeft=right+"px"}function slideRight(){0===right||right>=fullyRight?leftClick.classList.remove("active"):(right+=slideWidth,bothClicksActive()),slider.style.marginLeft=right+"px"}