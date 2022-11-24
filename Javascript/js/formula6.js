function add() {
    var a= document.getElementById('num1').value;
    var b= document.getElementById('num2').value;
    
    var res=(a*a*a*a)+4*(a*a*a)*b+6(a*a)*(b*b)+4*a*(b*b*b)+(b*b*b*b);
    
    console.log(res);
    }


    // (a + b)4 = a4 + 4a3b + 6a2b2 + 4ab3 + b4