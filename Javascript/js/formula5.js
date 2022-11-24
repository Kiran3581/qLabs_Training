function add() {
    var a= document.getElementById('num1').value;
    var b= document.getElementById('num2').value;
    
    var res=(a-b)*(a*a)+(a*b)+(b*b);
    
    console.log(res);
    }


    // a3 – b3 = (a – b)(a2 + ab + b2)