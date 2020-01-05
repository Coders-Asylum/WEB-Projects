var decision1= document.getElementsByClassName(decisio1)
var decision1_positionInfo=decision1.getBoundingClientRect();
var decisio1_height=decision1_positionInfo.height;
var decisio1_width=decision1_positionInfo.width;

$(".decisio1").css("background-size", decisio1_width+"px " + decisio1_height + "px");
