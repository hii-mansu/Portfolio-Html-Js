//testimonial slider

function tstsldr1(){
   /* document.querySelector("#rv1").style.marginLeft="0%";
    document.querySelector("#rv2").style.marginLeft="-200%";
    document.querySelector("#rv3").style.marginLeft="-200%";*/
    
    
    document.querySelector("#tstmnlkey1").style.backgroundColor="goldenrod";
    document.querySelector("#tstmnlkey2").style.backgroundColor="#ffffff";
    document.querySelector("#tstmnlkey3").style.backgroundColor="#ffffff";

    document.querySelector("#rv1").style.display="block";
    document.querySelector("#rv2").style.display="none";
    document.querySelector("#rv3").style.display="none";
}

function tstsldr2(){
   /* document.querySelector("#rv1").style.marginLeft="-200%";
    document.querySelector("#rv2").style.marginLeft="0%";
    document.querySelector("#rv3").style.marginLeft="-200%";*/


    document.querySelector("#tstmnlkey1").style.backgroundColor="#ffffff";
    document.querySelector("#tstmnlkey2").style.backgroundColor="goldenrod";
    document.querySelector("#tstmnlkey3").style.backgroundColor="#ffffff";

    document.querySelector("#rv1").style.display="none";
    document.querySelector("#rv2").style.display="block";
    document.querySelector("#rv3").style.display="none";
}

function tstsldr3(){
    /* document.querySelector("#rv1").style.marginLeft="-200%";
    document.querySelector("#rv2").style.marginLeft="-200%";
    document.querySelector("#rv3").style.marginLeft="0%";*/

    document.querySelector("#tstmnlkey1").style.backgroundColor="#ffffff";
    document.querySelector("#tstmnlkey2").style.backgroundColor="#ffffff";
    document.querySelector("#tstmnlkey3").style.backgroundColor="goldenrod";

   document.querySelector("#rv1").style.display="none";
    document.querySelector("#rv2").style.display="none";
    document.querySelector("#rv3").style.display="block";
}

//qna
/*
var question = document.querySelectorAll(".question");

question.forEach(function(myqs){
    var title = myqs.querySelector(".h1");
    var content = myqs.querySelector(".p");
    var icon = myqs.querySelector(".icon");

    title.addEventListener("click",function(){
        for(i=0;i<question.length;i++){
            if(question[i]!=myqs){
                question[i].classList.remove("active");
                question[i].classList.remove("icon");
            }
            else{
                myqs.classList.toggle("active");
                myqs.classList.toggle("icon");
            }
        }
    })
})
*/

var allqna = document.querySelectorAll(".qna");
allqna.forEach(function(qna){
    var title = qna.querySelector(".h3");
    var answer = qna.querySelector(".p");

    title.addEventListener("click", function(){
        for(i=0; i<allqna.length;i++){
            if(allqna[i]!=qna){
                allqna[i].classList.remove("show");
            }
            else{
                qna.classList.toggle("show");
            }
        }
    })
})

/*For nav*/

var openbtn = document.querySelector(".openbtn");
var nav = document.querySelector("nav");
var closebtn = document.querySelector("nav ul li:first-child");

openbtn.addEventListener("click", function(){
    nav.style.display="block";
    openbtn.style.display="none";
})

closebtn.addEventListener("click", function(){
    nav.style.display="none";
    openbtn.style.display="block";
})