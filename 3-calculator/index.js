function doCalc(){
    var exp=document.getElementById("val").value;
    console.log(exp)
    document.getElementById("exp").innerText=exp
    var ans=eval(exp);

    console.log(ans);
    document.getElementById("val").value=ans


}

function dis(input){
    document.getElementById("val").value+=input

}

function clr(){
    document.getElementById("val").value=""
}