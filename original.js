var btn=document.querySelector(".button");
var nav=document.querySelector('nav');
btn.isOpen=true;
btn.addEventListener("click",function(event){
    if(btn.isOpen===true){
        nav.style.display="none";
        btn.isOpen=false;

    }
    else{
        nav.style.display="block";
        btn.isOpen=true;
    }
    


});
