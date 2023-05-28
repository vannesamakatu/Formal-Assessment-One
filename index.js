
regAccount = () => {
    let nameSurname = document.getElementById("nameSurname").value
    let email = document.getElementById("email").value
    let number = document.getElementById("phoneNumber").value
    let subject = document.getElementById("subject").value
    
}
    let checkbox = document.getElementById("check").checked;


    if (checkbox){
        alert("Welcome!" + nameSurname + "Thank you for your interest in" + subject + "! We will contact you via the email provided:" + enterEmail + ", or alternatively on the phone number:" + phoneNumber);
    }
    else{
        alert("Well, well, well... why don't you want to sign up for our newsletter... you don't seem to be that interested" + nameSurname + "!  If you want to sign up, you better CHECK that newsletter box!");
    }
    