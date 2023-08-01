var accordQues=document.querySelectorAll(".accord-qurey");
//console.log(accordQues)

accordQues.forEach(function(ques){
   ques.addEventListener("click",function(){
    //ques.nextElementSibling.classList.add("active");

    if(ques.nextElementSibling.classList.contains("active"))
    {
        ques.nextElementSibling.classList.remove("active");
        ques.querySelector("i").style.transform="rotate(180deg)";
    }
    else{
        ques.nextElementSibling.classList.add("active");
        ques.querySelector("i").style.transform="rotate(0deg)";
    }
}) 
})


// var rotate=document.querySelectorAll(".name-icon");
// //console.log(rotate)


// rotate.forEach(function(icon){
//     icon.addEventListener("click",function(){
//       if(icon.classList.contains("name-icon"))
//        {
//         icon.classList.remove("name-icon");
//        } 
//        else{
//         icon.classList.add("name-icon");
//        }

//     })
// })