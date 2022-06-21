let sub=document.getElementsByClassName("submit");
let rating=document.getElementsByClassName("num");
// console.log(rating);
sub[0].addEventListener("click",()=>{
// console.log(r.innerText)
document.querySelector(".main").classList.add("vis1");
document.querySelector(".main2").classList.add("vis2");
document.querySelector(".rate1").innerText=`You selected ${value} out of 5`;})
let value=0;
for (let index = 0; index < 5; index++) {
    rating[index].addEventListener("click",()=>{
        for(let j=0;j<5;j++){
            rating[j].classList.remove("org");
        }
        rating[index].classList.add("org");
        value=rating[index].innerText;
        // console.log(value);
    })
}