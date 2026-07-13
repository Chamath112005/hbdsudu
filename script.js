// ================================
// NANGI BABA CINEMATIC BIRTHDAY
// SCRIPT FILE
// ================================



let music = document.getElementById("music");

let musicPlaying = false;



// ================================
// OPEN GIFT INTRO
// ================================


function openGift(){


    let intro = document.getElementById("intro");

    let movie = document.getElementById("movie");


    // gift animation

    document.querySelector(".gift-box").style.transform =
    "scale(2)";


    document.querySelector(".gift-box").style.opacity =
    "0";



    setTimeout(()=>{


        intro.style.display="none";


        movie.classList.remove("hidden");



        startMusic();


        typeWriter();



        startFireworks();



    },1500);



}







// ================================
// MUSIC SYSTEM
// ================================



function startMusic(){


    music.volume = 0;


    music.play();



    let fade = setInterval(()=>{


        if(music.volume < 0.8){


            music.volume +=0.05;


        }

        else{


            clearInterval(fade);


        }


    },300);



    musicPlaying=true;


}




function toggleMusic(){



if(musicPlaying){


    music.pause();


    musicPlaying=false;


    document.getElementById("musicBtn").innerHTML="🔇";


}

else{


    music.play();


    musicPlaying=true;


    document.getElementById("musicBtn").innerHTML="🎵";


}


}







// ================================
// TYPEWRITER MESSAGE
// ================================



let message = `


Dear Nangi Baba ❤️


Today is not just another day...


It is the day when a beautiful soul
came into this world.


Your smile brings happiness,
your kindness touches hearts,
and your presence makes moments special.


May your dreams become reality,
your heart always stay happy,
and your life be filled with endless success.


Never stop believing in yourself.


Keep shining ✨
Keep smiling 😊


Happy Birthday Nangi Baba 🎂💖


`;



let position =0;



function typeWriter(){



let box=document.getElementById("typing");



function write(){



if(position < message.length){



box.innerHTML += message.charAt(position);



position++;


setTimeout(write,45);



}



}



write();



}







// ================================
// CAKE CANDLE
// ================================



function blowCandle(){


let flame =
document.getElementById("flame");



flame.innerHTML="💨";


setTimeout(()=>{


flame.style.display="none";


document.getElementById("wish").innerHTML=

"✨ Your wish will come true, Nangi Baba ❤️ ✨";



celebration();


},1000);



}







// ================================
// FINAL CELEBRATION
// ================================



function celebration(){



document.body.style.transition="2s";


document.body.style.background=

"linear-gradient(45deg,#ff0080,#7928ca,#ffd700)";



startFireworks();



}







// ================================
// AUTO CURSOR GLOW
// ================================


document.addEventListener(
"mousemove",
(e)=>{


let glow=document.createElement("div");


glow.style.position="fixed";


glow.style.left=e.clientX+"px";


glow.style.top=e.clientY+"px";


glow.style.width="10px";


glow.style.height="10px";


glow.style.background="#ff69b4";


glow.style.borderRadius="50%";


glow.style.pointerEvents="none";


glow.style.boxShadow="0 0 20px pink";


glow.style.zIndex="999";


document.body.appendChild(glow);



setTimeout(()=>{


glow.remove();


},500);



});
