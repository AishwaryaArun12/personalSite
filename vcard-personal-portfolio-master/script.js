function validate(event){
    event.preventDefault()
var regName=/\d+$/g;
var name=document.forms.form.fullname.value;
if(regName.test(name)){
    window.alert("Please enter your name properly..");
    name.focus();
    return false;
}
return true;
}