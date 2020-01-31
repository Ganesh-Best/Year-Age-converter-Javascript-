function Calculate(){
 
    var Year = prompt("Enter Your Born Year :");
    var days = (2020 - Year) * 365.25;
      
    var h1 =  document.getElementById("header");
    
    // var t1 =   document.createTextNode("You are " +days + "  days Old");
    
    h1.innerHTML = "You are " + days + "  days Old " ;
    
}

function Reset(){

     var h1 =  document.getElementById("header");
     h1.innerHTML ='';
}