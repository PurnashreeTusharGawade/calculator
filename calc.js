function display(x){
    document.getElementById("text1").value+=x;
}
function compute(){
    var x=document.getElementById("text1").value;
    document.getElementById("text1").value=eval(x);
}