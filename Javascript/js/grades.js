function calculate() {

    var kannada = parseInt(document.getElementById("sub1").value);
    var english = parseInt(document.getElementById("sub2").value);
    var hindi = parseInt(document.getElementById("sub3").value);
    var mathematics = parseInt(document.getElementById("sub4").value);
    var science = parseInt(document.getElementById("sub5").value);
    var sscience = parseInt(document.getElementById("sub6").value);
  
  
}

function grades(){
    if(marks >= 90 && marks<= 100)
      document.getElementById("grades").value= 'S';
    else if(marks>= 75 && marks< 80)
      document.getElementById("grades").value = 'A';
      if(marks >= 70 && marks<= 65)
      document.getElementById("grades").value= 'B';
    else if(marks>= 64 && marks< 60)
      document.getElementById("grades").value= 'C';
      if(marks >= 63 && marks<= 55)
      document.getElementById("grades").value = 'D';
    else if(marks>= 54 && marks< 60)
      document.getElementById("grades").value='E';
      if(marks<35)
      document.getElementById("grades").value='F';
      
  }

  var validation = alert('Congrats your grade is ');

  console.log(validation);