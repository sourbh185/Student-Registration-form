 
 function validatefirst(){
     var fname= document.getElementById("firstname").value;
     //var rel= /^[A-Za-z/s/-]{2,10}$/;
       var rel=/^[a-zA-Z\s\'\-']{2,15}$/;
/**The test() method tests for a match in a string. 
This method returns true if it finds a match, otherwise it returns false.**/
     if(rel.test(fname))
     {
     document.getElementById("alert1").style.color="Green";
     document.getElementById("alert1").innerHTML="<strong> valid </strong>";
     return true;
     }
     else
     {
        document.getElementById("alert1").style.color="Red";
        document.getElementById("alert1").innerHTML="<strong> Enter(2-10) characters </strong>";
        return false;
     }

 }

 function validatesecond(){
   var lname= document.getElementById("lastname").value;
   //var relb= /^[A-Za-z/s/-]{2-15}$/;
     var relb=/^[a-zA-Z\s\'\-']{2,15}$/;
   if(relb.test(lname))
   {
   document.getElementById("alert2").style.color="Green";
   document.getElementById("alert2").innerHTML="<strong> valid </strong>";
   return true;
   }
   else
   {
      document.getElementById("alert2").style.color="Red";
      document.getElementById("alert2").innerHTML="<strong> Enter(2-15) characters </strong>";
      return false;
   }

}

 function validatephone(){
    var pname= document.getElementById("no").value;
   // var re = /^\{d3}-\{d3}-\{d4}$/ ;
   var re=/^\d{3}-\d{3}-\d{4}$/;

    if(re.test(pname))
    {
    document.getElementById("alert5").style.color="green";
    document.getElementById("alert5").innerHTML="<strong> valid </strong>";
    return true;
    }
    else
    {
       document.getElementById("alert5").style.color="red";
       document.getElementById("alert5").innerHTML="<strong>Use xxx-xxx-xxxx</strong>";
       return false;
    }

}

function validateform(){
    var pass1=document.getElementById("pass1").Value;
    var pass2=document.getElementById("pass2").Value;
    if(pass1==pass2)
    {
       alert("Password matched");
       return true;
    }
   else 
    {
        alert("Password not matched");
        return false;
    }
    
}