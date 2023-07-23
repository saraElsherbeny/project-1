function divideMail(){
    var mailValue= document.getElementById("mail").value;
    console.log(mailValue);
   var atIndex = mailValue.indexOf("@");
   document.getElementById("name").value = mailValue.slice(0, atIndex);
   document.getElementById("domain").value = mailValue.slice(atIndex+1);
}