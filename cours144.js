document.getElementById("register").onsubmit=function(){
    let inpu=document.getElementById("phone").value;
    let  exp=/\(\d{4}\)\s\d{3}-\d{4}/ig;
   let res=exp.test(inpu);

    if(res=== false){
   
    return false
}else{
    return true
}}