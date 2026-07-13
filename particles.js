// =================================
// CINEMATIC STAR PARTICLE SYSTEM
// NANGI BABA BIRTHDAY
// =================================


const canvas = document.getElementById("particles");

const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



let stars = [];



for(let i=0;i<180;i++){


stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

size:Math.random()*2+1,

speed:Math.random()*0.5+0.2,

opacity:Math.random()


});


}






function drawStars(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



stars.forEach(star=>{


ctx.beginPath();



ctx.fillStyle =
`rgba(255,255,255,${star.opacity})`;



ctx.shadowBlur=15;

ctx.shadowColor="white";



ctx.arc(
star.x,
star.y,
star.size,
0,
Math.PI*2
);



ctx.fill();



star.y += star.speed;



if(star.y > canvas.height){

star.y=0;

star.x=Math.random()*canvas.width;

}



});



requestAnimationFrame(drawStars);



}




drawStars();







// RESIZE FIX


window.addEventListener(
"resize",
()=>{


canvas.width=
window.innerWidth;


canvas.height=
window.innerHeight;


});
