var a=(10);
var vA=("value of a is: ");
document.write(vA);
document.write(a);//value of a is: 10

document.write("<br>");
document.write("..............................................................");

document.write("<br>");
var b=++a;//increment in value of a
var bV=("The value of ++a is: ");
var bVv=("Now the value of a is: ");
document.write(bV);
document.write(a); //value of a after increment is: 11
document.write("<br>");
document.write(bVv);
document.write(a); //Now the value of a is 11

document.write("<br>");
document.write("<br>");
var bVb=("The value of a++ is: ")
document.write(bVb);
document.write(a);//The value of a is: 11 (No increment happend)
document.write("<br>");

var c=++a;
document.write(bVv);
document.write(a); //the value of a after increment is 12

document.write("<br>");
document.write("<br>");
var d=--a;

var dVv=("The value of --a is: ")
document.write(dVv);
document.write(a);//the value of a after decrement is 11
document.write("<br>");
document.write(bVv);
document.write(a);//the value of a is: 11


document.write("<br>");
document.write("<br>");
var eV=("The value of a-- is: ");
document.write(eV);
document.write(a);//The value of a is:11 (no decrement happend)

var e=a--;
document.write("<br>");
document.write(bVv)
document.write(a);
