function ValidateData(){
    var validated = true
    
    //Name
    var name = document.getElementById("name").value
    var errname = document.getElementById("err-name")
    if(name==""){
        //alert("Name can not be empty");
        errname.innerHTML = "Name cannot be empty"
        validated = false;
    }else{
        errname.innerHTML = ''
    }

    //Email
    var email = document.getElementById("email").value
    var errEmail = document.getElementById("err-email")
    if(email==""){
        errEmail.innerHTML = "Email cannot be empty";
        validated = false;
    } else if(email.startsWith('@') || email.endsWith('@')){
        errEmail.innerHTML = "Email can't start or end with '@'"
        validated = false
    } else if(email.startsWith('.') || email.endsWith('.')){
        errEmail.innerHTML = "Email can't start or end with '.'"
        validated = false
    } else if(email.indexOf("@.") > -1 || email.indexOf('.@') > -1){
        errEmail.innerHTML = "'@' and '.' cannot be side by side"
        validated = false
    } else if(!email.includes("@")){
        errEmail.innerHTML = "Must contain '@'"
        validated = false
    } else if(!(email.endsWith(".com") || email.endsWith(".co.id"))){
        errEmail.innerHTML = "Must end with '.com' or '.co.id'"
        validated = false
    } else{
        errEmail.innerHTML = ''
    }

    
    //Gender
    var male = document.getElementById('male')
    var female = document.getElementById('female')
    var errGender = document.getElementById("err-gender")
    if(male.checked==false && female.checked==false){
        //alert('Please choose a gender');
        errGender.innerHTML = 'Please choose a gender'
        validated = false
    } else{
        errGender.innerHTML = ''
    } 

    //Message
    var message = document.getElementById("message").value
    var errmessage = document.getElementById("err-message")
    if(message==""){
        //alert("Please write your message");
        errmessage.innerHTML = "Message cannot be empty"
        validated = false;
    }else{
        errmessage.innerHTML = ''
    }

    //Term
    var term = document.getElementById("term")
    var errterm = document.getElementById("err-term")
    if(term.checked == false){
        //alert("Must accept terms & conditions")
        errterm.innerHTML = "You must subsribe to send us messages"
        validated = false
    }else{
        errterm.innerHTML = ''
    }

    if(validated){
        alert('Submited')
    } else{
        alert('Failed')
    }
}

