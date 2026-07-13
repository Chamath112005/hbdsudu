// =================================
// HOLLYWOOD FIREWORKS ENGINE
// NANGI BABA BIRTHDAY
// =================================


const fireCanvas = document.getElementById("fireworks");

const fireCtx = fireCanvas.getContext("2d");


fireCanvas.width = window.innerWidth;
fireCanvas.height = window.innerHeight;



let fireworks = [];
let particles = [];





class Firework{


constructor(x,y,targetX,targetY){

this.x=x;
this.y=y;

this.targetX=targetX;
this.targetY=targetY;

this.speed=4;

this.angle=Math.atan2(
targetY-y,
targetX-x
);

this.distance=Math.hypot(
targetX-x,
targetY-y
);

this.traveled=0;

}



update(){


let vx=Math.cos(this.angle)*this.speed;
let vy=Math.sin(this.angle)*this.speed;


this.x += vx;
this.y += vy;


this.traveled += this.speed;



if(this.traveled >= this.distance){

explode(
this.targetX,
this.targetY
);

return true;

}


return false;


}



draw(){


fireCtx.beginPath();


fireCtx.arc(
this.x,
this.y,
3,
0,
Math.PI*2
);


fireCtx.fillStyle="#ffd700";

fireCtx.shadowBlur=20;

fireCtx.shadowColor="#ff69b4";


fireCtx.fill();



}


}







class Particle{


constructor(x,y){


this.x=x;
this.y=y;


this.speed=
Math.random()*6+2;


this.angle=
Math.random()*Math.PI*2;



this.alpha=1;


this.gravity=.05;


this.size=
Math.random()*3+1;



this.color=

[
"#ff69b4",
"#ffd700",
"#ffffff",
"#ff1493",
"#00ffff"

]
[
Math.floor(
Math.random()*5
)
];


}



update(){


this.x +=
Math.cos(this.angle)*this.speed;


this.y +=
Math.sin(this.angle)*this.speed;



this.speed *=0.96;


this.y += this.gravity;



this.alpha -=0.015;



}




draw(){


fireCtx.save();


fireCtx.globalAlpha=this.alpha;


fireCtx.beginPath();


fireCtx.arc(
this.x,
this.y,
this.size,
0,
Math.PI*2
);



fireCtx.fillStyle=this.color;


fireCtx.shadowBlur=15;

fireCtx.shadowColor=this.color;


fireCtx.fill();


fireCtx.restore();


}


}







function explode(x,y){


for(let i=0;i<80;i++){


particles.push(
new Particle(x,y)
);


}


}






function animateFireworks(){



fireCtx.clearRect(
0,
0,
fireCanvas.width,
fireCanvas.height
);



fireworks.forEach(
(f,index)=>{


if(f.update()){


fireworks.splice(index,1);


}

else{


f.draw();


}


});





particles.forEach(
(p,index)=>{


p.update();


p.draw();



if(p.alpha<=0){

particles.splice(index,1);

}


});



requestAnimationFrame(
animateFireworks
);



}



animateFireworks();









function startFireworks(){



let count=0;



let timer=setInterval(()=>{


let startX=
Math.random()*fireCanvas.width;


let targetX=
Math.random()*fireCanvas.width;



let targetY=
Math.random()*
(fireCanvas.height/2);



fireworks.push(

new Firework(
startX,
fireCanvas.height,
targetX,
targetY
)

);



count++;



if(count>15){

clearInterval(timer);

}



},500);



}






window.addEventListener(
"resize",
()=>{


fireCanvas.width=
window.innerWidth;


fireCanvas.height=
window.innerHeight;


});
