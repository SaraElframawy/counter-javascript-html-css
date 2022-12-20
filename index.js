console.log("i like programming");
console.log("Itis rewally good");
window.alert("I really like it");
let age ;
age =21;
age = age
console.log("You are ",age);
let firstName = "Sara";
let student =true;
console.log(student);
console.log("Hello",firstName);
document.getElementById("p1").innerHTML= "Hello"+firstName;


document.getElementById("p2").innerHTML= "you are " + age + "years old";

document.getElementById("p3").innerHTML="Enrolled:" + student ;

let students =20;
students = students+1;
console.log(students);
let extraStudents = students %3;
console.log(extraStudents);
let userName = window.prompt("what's your name");
console.log(userName);
document.getElementById("myButton").onclick=function(){
    userName=document.getElementById("myText").value;
    console.log(userName);
    document.getElementById("myLabel").innerHTML ="Hello \n"+userName;

}