
window.onload =  function() {
    setInterval(function() {
    
        var screenOfCalculator = document.getElementById('blinkers').innerHTML;
        
        
        if (screenOfCalculator == "_" )
        {
         
            document.getElementById('blinkers').innerHTML = "0";

        } 
        else if (screenOfCalculator == "0")
        {
           
            document.getElementById('blinkers').innerHTML = "_" ;
        }

      }, 600); 
    
   
    }
 
document.getElementById("one").addEventListener("click",function()
{

    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "1";

});
document.getElementById("two").addEventListener("click",function()
{

    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "2";

});
document.getElementById("three").addEventListener("click",function()
{

    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "3";

});
document.getElementById("four").addEventListener("click",function()
{

    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "4";

});
document.getElementById("five").addEventListener("click",function()
{

    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "5";

});
document.getElementById("six").addEventListener("click",function()
{

    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "6";

});
document.getElementById("seven").addEventListener("click",function()
{

    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "7";

});
document.getElementById("eight").addEventListener("click",function()
{

    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "8";

});
document.getElementById("nine").addEventListener("click",function()

{

    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "9";

});

document.getElementById("zero").addEventListener("click",function()
{

    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "0";

});
    
document.getElementById("dot").addEventListener("click",function()
{

    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += ".";
    

});
document.addEventListener("keydown",function(e){

    switch (e.which) {
        case 49:
          
    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "1";
            break;
            case 97:
          
            document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
            document.getElementById("outputpara").innerHTML += "1";
                    break;
        case 50:
        document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
        document.getElementById("outputpara").innerHTML += "2";
            break;
            case 98:
            document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
            document.getElementById("outputpara").innerHTML += "2";
                break;
            case 51:
            document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
            document.getElementById("outputpara").innerHTML += "3";
                break;
                case 99:
                document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
                document.getElementById("outputpara").innerHTML += "3";
                    break;
                case 52:
            document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
            document.getElementById("outputpara").innerHTML += "4";
                break;
                case 100:
                document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
                document.getElementById("outputpara").innerHTML += "4";
                    break;
                case 53:
                document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
                document.getElementById("outputpara").innerHTML += "5";
                    break;
                    case 101:
                document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
                document.getElementById("outputpara").innerHTML += "5";
                    break;
                    case 54:
                    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
                    document.getElementById("outputpara").innerHTML += "6";
                        break;

                        case 102:
                        document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
                        document.getElementById("outputpara").innerHTML += "6";
                            break;

                        case 55:
                        document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
                        document.getElementById("outputpara").innerHTML += "7";
                            break;
                            case 103:
                        document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
                        document.getElementById("outputpara").innerHTML += "7";
                            break;



                            case 56:
                            document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
                            document.getElementById("outputpara").innerHTML += "8";
                                break;
                                case 104:
                                document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
                                document.getElementById("outputpara").innerHTML += "8";
                                    break;
                                case 57:
                                document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
                                document.getElementById("outputpara").innerHTML += "9";
                                    break;
                                    case 105:
                                    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
                                    document.getElementById("outputpara").innerHTML += "9";
                                        break;
                                  
        default:
            return; // Do nothing for the rest
      }


      
});


document.getElementById("plus").addEventListener("click",function()
{
    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "+";     
});
document.getElementById("minus").addEventListener("click",function()
{
    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "-";     
});
document.getElementById("multiply").addEventListener("click",function()
{
    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "*";     
});
document.getElementById("divide").addEventListener("click",function()
{
    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";
    document.getElementById("outputpara").innerHTML += "/";     
});

document.getElementById("AC").addEventListener("click",function()
{
    
    document.getElementById("outputpara").innerHTML = "";  
    document.getElementById("blinkers").style = "visibility: true; , z-index: 0";   
});
document.getElementById("back").addEventListener("click",function()
{
    
   var  str =  document.getElementById("outputpara").innerHTML;
   backstr = str.slice(0, -1);
   document.getElementById("outputpara").innerHTML= backstr;
    document.getElementById("blinkers").style = "visibility: hidden; , z-index: 0";   
});



document.getElementById("Enter").addEventListener("click",function()
{

  var result = document.getElementById("outputpara").innerHTML
  console.log(result);
  var ResultFinal = (eval(result));
  document.getElementById("outputpara").innerHTML = "";
  document.getElementById("outputpara").innerHTML = "Ans : " + ResultFinal;
});

