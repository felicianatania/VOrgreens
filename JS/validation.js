function ValidateData(){
    var validated = true
    
    //Name
    var name = document.getElementById("name").value
    var errname = document.getElementById("err-name")
    if(name==""){
        //alert("Name can not be empty");
        errname.innerHTML = "name cannot be empty"
        validated = false;
    }

    //Email
    var email = document.getElementById("email").value
    var errEmail = document.getElementById("err-email")
    if(email==""){
        errEmail.innerHTML = "Email cannot be empty";
        validated = false;
    } else if(email.startsWith('@') || email.endsWith('@')){
        errEmail.innerHTML = "Email can't start or end with @"
        validated = false
    } else if(email.startsWith('.') || email.endsWith('.')){
        errEmail.innerHTML = "Email can't start or end with ."
        validated = false
    } else if(email.indexOf("@.") > -1 || email.indexOf('.@') > -1){
        errEmail.innerHTML = "@ dan . cannot be side by side"
        validated = false
    }

    
    //Gender
    var male = document.getElementById('male')
    var female = document.getElementById('female')
    var errGender = document.getElementById("err-gender")
    if(male.checked==false && female.checked==false){
        //alert('Please choose a gender');
        errGender.innerHTML= 'Please choose a gender'
        validated = false
    }  

    //Message
    var message = document.getElementById("message").value
    var errmessage = document.getElementById("err-message")
    if(message==""){
        //alert("Please write your message");
        errmessage.innerHTML = "message cannot be empty"
        validated = false;
    }

    //Term
    var Term = document.getElementById("term");
    if(term.checked == false){
        //alert("Must accept terms & conditions")
        validated = false
    }

    if(validated){
        alert('Submited')
    } else{
        alert('Failed')
    }
}
