function add() {
    var a= document.getElementById('num1').value;
    var b= document.getElementById('num2').value;
    
    var res= (a*a)+2*a*b+(b*b)-2*a*b;
    
    console.log(res);
    }


    // a2 + b2 = (a + b)2 – 2ab