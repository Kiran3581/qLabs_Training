function add() {
    var a= document.getElementById('num1').value;
    var b= document.getElementById('num2').value;
    
    var res=(a-b)*(a+b)*(a*a)+(b*b);
    
    console.log(res);
    }


    // a4 – b4 = (a – b)(a + b)(a2 + b2)