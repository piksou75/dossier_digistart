function ok(){
    alert("ok");

}
var btn= document.getElementById("toggleBtn");
btn.addEventListener("click",ok);
function image(){
img.setAttribute("src","./dos_img/orange.jpeg");
}
var img= document.getElementById("image");
img.addEventListener("mouseover", image);

img.addEventListener("mouseout",image1);
function image1(){
    img.setAttribute("src","./dos_img/pomme.jpeg");
}
var title1=document.getElementById("titre");
function color1(){
title1.style.color = "green";
}
title1.addEventListener("mouseover",color1);
