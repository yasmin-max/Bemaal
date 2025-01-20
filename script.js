function login(){
    window.location.href='login.html';

}

let btn=document.getElementById('btn');
let main=document.getElementById('main');
btn.addEventListener('mouseover',()=>{
btn.style.cursor='pointer';

})
main.addEventListener('mouseover',()=>{
   main.style.cursor='pointer';
})


function form5(){
    window.location.href='form.html';
    
}
function navbar1(){
    window.location.href='index.html';
}
function sadad(){
   window.location.href='sadad.html';
}

//...........form..............................
document.getElementById('bigform').addEventListener('submit',function(event){
event.preventDefault();
let company=document.getElementById('company').value.trim();
let count=document.getElementById('count').value.trim();
let name=document.getElementById('name').value.trim();
let email=document.getElementById('email').value.trim();
let phone=document.getElementById('phone').value.trim();
let error=document.getElementById('error');
 if(!company){
    error.textContent='name is required';
    error.style.color='red';
 }
 else if(!count){
error.textContent='please select number';
error.style.color='red';

 }
 else if(!name){
    error.textContent='الاسم مطلوب';
    error.style.color='red';

 }
 else if(!email || !email.includes('@')){
    error.textContent='valid email is requaired';
    error.style.color='red';

 }
 else if(!phone){
    error.textContent='رقم الهاتف مطلوب';
    error.style.color='red';

 }
 else{
   error.textContent='';
 }
})