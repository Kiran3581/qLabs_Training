function add() {
    var a= document.getElementById('num1').value;
    var b= document.getElementById('num2').value;
    var c= document.getElementById('num3').value;
    
    var res=(a*a)+(b*b)+(c*c)+2*(a*b)+2*(b*c)+2*(c*a);
    
    console.log(res);
    }


    // (a + b + c)2 = a2 + b2 + c2 + 2ab + 2bc + 2ca