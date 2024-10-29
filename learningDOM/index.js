const a=document.querySelectorAll("h1") ;
console.log(a); //prints the h1 tag and its content
a.forEach(function(e){
    console.log(e);

})
a[0].textContent="This is my world"
a.innerHTML="Change HTML";
a[0].style.color="red"
a[0].style.backgroundColor="black"
a[0].addEventListener("click",function(){
    a.style.backgroundColor="green";
    a.style.color="blue";
    a.innerHTML="Yeaaahhhhhhh"
})
const bulb=document.querySelector("#bulb");
const button=document.querySelector("button")
button.addEventListener("click",function(){
    (bulb.style.backgroundColor==="black")?bulb.style.backgroundColor="yellow":bulb.style.backgroundColor="black";
    
    (button.innerHTML==="ON")?button.innerHTML==="OFF":button.innerHTML==="ON";
})