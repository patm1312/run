$tres =  document.querySelector(".es3")
let x = 1;
let x2 = 2;
var slash = "/";
document.addEventListener('click',(e)=>{
    console.log("click");
    //$tres.style.transform = `translate(${x*5}px)`
    //$tres.style.left = `${x*20}px`
    $tres.style.gridColumn =  `${x} / ${x2}`;
    x = x +1;
    x2 = x + 1
})