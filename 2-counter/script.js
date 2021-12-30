function count(act){

    var num=document.getElementById("counter").innerText
    var n=Number(num)

    if(act=="add"){
        n++;
    }
    else if(act=="sub"){
        n--;
    }
    
    document.getElementById("counter").innerText=n

}