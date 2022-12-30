function calculate()

var countdigit=0;
var m;
var res=0;
var a= parseInt(prompt("Enter a number"));
var b = a;

while(a!=0) {
    // rem=m%10;
    countdigit = countdigit+1;
    a=parseInt(a/10);
}

a=b;

while(a!=0) {
    rem=a%10;
    res=res+ Math.pow(rem,countdigit);
    a=parseInt(a/10);

}

if(b == res) {
    alert('armstrong number');
} else{
    alert('not a armstrong number');
}



