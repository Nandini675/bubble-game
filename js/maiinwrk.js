// game ky hai- ki hit koi random cal generste kr rha hahi toh hit jo val produce kr rhe ahi vo wale bubbles ko hit krmne pr score 10 se bad jaana chahiye aur  bubles refresh ho jana chahiye aur hit ki value bhi badal jani chahiye and timer 0 hon pr score print krna hai
bbht= new Audio('music/bht.mp3');
refresh=new Audio('music/gyab.wav');
over=new Audio('music/khatam.wav');
var timer=6;
var score=0;
var hitrn=0;
function makebubble(){// bubbles create krne ke liye we use a loop
var clutter ="";
 for (var i=1;i<=70;i++){
    var rn = Math.floor(Math.random()*10);//math .random will generate no b/w 1and 0 in decimal when multiply by 10 (decimal points shift to ryt by 1 digit eg 0.2->2) and math .floor mujhe usse bade se decimal ki int val de dega 
    clutter +=`<div class="bubble">${rn}</div>`;   // mujhe screen pr boohot are bubble chahiye
 }
 document.querySelector("#pbtm").innerHTML=clutter;    //ise hum pbtm ke andr clutter wala loop lga rhe hai
 }
 
 
 function runtimer(){// timer set kre ke liye
    var siter= setInterval(function(){
        if(timer>0) {// isse timer -ve value nhi lega
        timer--;
        document.querySelector("#timerval").textContent=timer;
        }
         // yeh setinterval wala function abhi bhi chal rha hai (-ve val)but just print nhi ho rha 
        else{
            clearInterval(siter);// isse -ve value print nhi ho rhi
            
        over.play();
            document.querySelector("#pbtm").innerHTML=`<h1>GAME OVER</h1>`;
       createbubble();
            setInterval(createbubble,50)
        }
    },1000) ;
   
}
function getnewhit(){// this function generate a 1 digit random value
hitrn = Math.floor(Math.random()*10);
document.querySelector("#hitval").textContent=hitrn;
}
function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent= score;
}
// jispr click kroge us element pr event raise hoga aur event listner na milne pr event element ke parent pr listener dhundegga,aur wha bhi na milne pr uske parent ke parent parent pr listner dhundega
//hum buble pr click kr rhe hai aur bubble ka parent kon hai pbtm usme hi saare bubble hai 
//hum jis pr click kr rhe hai hume uspr listner lgana padega  we a clicking on buble yaai saare buble jo total 70 hai un sabke liye event listner lagana pagea toh isse bettrr hai mai inke parent yani pbtm pr hi lga du 
document.querySelector("#pbtm")
.addEventListener("click",function(dets){
    bbht.play();
    //alert("chal rha hai");
    //ab mujhe pta krna hai konse buble pr click krna hai
   var clickno=Number(dets.target.textContent); // target vo buble jispr click hua hai  iss mujhe pura div tag mil jayega but muhe just vovalue chahiye(aur vo mujh textconetnt se milegi )console ke andr jo bhi value vo abhi string toh usko no mai convert kr denge
if(clickno==hitrn){
    refresh.play();
    increaseScore();
   
    makebubble();
    getnewhit();
}
});
function createbubble(){
    const til=document.querySelector("#pbtm")
    const createojk = document.createElement("span")
     var size= Math.random()*60;
      createojk.style.width=   20+size +"px";
      createojk.style.height=  20+size +"px";
      createojk.style.left =  Math.random() * innerWidth+"px";
    //   createojk.style.border-radius =  20+size +"50px";
til.appendChild(createojk);
setTimeout(()=>{
    createojk.remove()
},4000)
}

 runtimer();
 makebubble();
 getnewhit();
 
