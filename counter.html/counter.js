let count =0;
document.getElementById("decreaseButton").onclick= function(){

    count -=1;
    document.getElementById("countLabel").innerHTML = count;

}
document.getElementById("restbtn").onclick = function(){
    count =0;
    document.getElementById("countLabel").innerHTML = count;


}
document.getElementById("increasebtn").onclick = function(){

    count +=1;
    document.getElementById("countLabel").innerHTML = count;
}