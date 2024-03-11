
function cong(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let x = a+b;
    document.getElementById("result").innerHTML="Tong "+x;
}
function tru(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let x = a-b;
    document.getElementById("result").innerHTML="Hieu "+x;
}
function nhan(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let x = a*b;
    document.getElementById("result").innerHTML="Tich "+x;
}
function chia(){
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let x = a/b;
    document.getElementById("result").innerHTML="Thuong "+x;
}