var educ='';
var check='';
var total='';
function radio1()
{
    document.getElementById('cgpa').disabled=false;
    document.getElementById('10th').setAttribute("value","10th");
}
function radio2()
{
    document.getElementById('cgpa').disabled=false;
    document.getElementById('puc').setAttribute("value","puc");
}
function radio3()
{
    document.getElementById('cgpa').disabled=false;
    document.getElementById('be').setAttribute("value","be");
}

function check(){
    var firstName = document.getElementById('firstName').value;
    var secondName = document.getElementById('secondName').value;
    var marks = document.getElementById('cgpa').value;
    var emailId = document.getElementById('email').value;
    var education1 = document.getElementById('10th').getAttribute('value','10th');
    var education2 = document.getElementById('puc').getAttribute('value','puc');
    var education3 = document.getElementById('be').getAttribute('value','be');
    if(education1 !=null)
    {
        edu=education1;
    }
    else if(education2 != null)
    {
        edu=education2;
    }
    else if(education3 != null)
    {
       edu=education3;
    }

   

    var h1 = document.getElementById("reading");
    var h2 = document.getElementById("painting");
    var h3 = document.getElementById("chess");
    var h4 = document.getElementById("bike riding");
    var h5 = document.getElementById("watching movies");
    var h6 = document.getElementById("cricket");
    var h7 = document.getElementById("horse riding");
    var h8 = document.getElementById("video games");
    var h9 = document.getElementById("travelling");
    var h10 = document.getElementById("drawing");
    
    var arr=[h1,h2,h3,h4,h5,h6,h7,h8,h9,h10];
    
    for(var i=0;i<arr.length;i++)
    { if(arr[i].checked==true)
        {
           
        switch(i)
        {
            case 0:
                check=h1.value;
                break;
            case 1:
                check=h2.value;
                break;
            case 2:
                check=h3.value;
                break;
            case 3:
                check=h4.value;
                break;
            case 4:
                check=h5.value;
                break;
            case 5:
                check=h6.value;
                break;
            case 6:
                check=h7.value;
                break;
            case 7:
                check=h8.value;
                break;
            case 8:
                check=h9.value;
                break;
            case 9:
                check=h10.value;
                break;
                
        }
        total=total+", "+check;
    }
        
    }
   
    console.log(total);
    var a=`Hi hr,
    My name is ${firstName}, ${secondName},
    I have completed ${edu} with ${marks} % or cgpa,
    and my email ID is "${emailId}",
    and my hobbies are ${total}.`
    document.getElementById("art").innerHTML=a;
    console.log(a);
   
}
