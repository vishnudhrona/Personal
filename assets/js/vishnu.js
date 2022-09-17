var nameerror = document.getElementById("name-error");
var emailerror = document.getElementById("email-error");
var messageerror = document.getElementById("message-error");
var submiterror = document.getElementById("submit-error");
function validatename(){
    var name=document.getElementById('contact-name').value;

    if(name.length==0){
        nameerror.innerHTML='Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameerror.innerHTML='write full name';
        return false;
    }
    nameerror.innerHTML='valid';
    return true;
}
function validateemail(){
    var email=document.getElementById('contact-email').value;

    if(email.length==0){
        emailerror.innerHTML='Email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailerror.innerHTML='Email invalid'
        return false;
    }

    emailerror.innerHTML='valid';
    return true;
}
function validatemessage(){
    var message=document.getElementById('contact-message').value;
    var required=30;
    var left=required - message.length;
    if(left>0){
        messageerror.innerHTML = left + 'more characters required';
        return false;
    }
    messageerror.innerHTML='valid';
    return true;

}
function validateform(){
    if(!validatename() || !validateemail() || !validatemessage()){
        submiterror.style.display = 'block';
        submiterror.innerHTML = 'Please fix the error to submit';
        setTimeout(function(){submiterror.style.display = 'none';},3000)
        return false;
    }
}
