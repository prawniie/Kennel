
function getId(id) {
    return document.getElementById(id)
}


function validatePreName() {
    let preName = getId("InputPrename").value;
    if (preName == "") {
        alert("Du måste fylla i ett förnamn");
        return false;
    }
    else {
        return true;
    }
}

function validateLastName() {
    let lastName = getId("InputLastname").value;
    if (lastName == "") {
        alert("Du måste fylla i ett efternamn");
        return false;
    }
    else {
        return true;
    }
}


//Ändra allt till felmeddelanden!!!


let wrongMessage = getId("validationMessage");

function validateMessage() {
    let message = getId("FormControlTextarea1").value;
    if (message == "") {
        wrongMessage.innerText = "Du måste ju göre något!!";
        //alert("Du måste fylla i textboxen");
        return false;
    }
    else {
        return true;
    }
}

function validateEmail() {
    let email = getId("InputEmail").value;
    if (email == "") {
        alert("Du måste fylla i en email");
        return false;
    }
    else {
        return true;
    }
}

function validateTelephonenumber() {
    let telephoneNumber = getId("InputTelephoneNumber").value;
    let theValueEnteredIsAnumber = telephoneNumber == parseInt(telephoneNumber);

    if (theValueEnteredIsAnumber == true) {
        return true;
    }
    else {
        alert("Du måste ange en siffra");
        return false;
    }
}

function validate() {
    let trueNumber = validateTelephonenumber();
    let truePreName = validatePreName();
    let trueLastName = validateLastName();
    let trueMessage = validateMessage();
    let trueEmail = validateEmail();

    if (trueNumber && truePreName && trueLastName && trueMessage && trueEmail) {
        location.href = 'thankyou.html';
    }
}


document.getElementById("submit").addEventListener("click", validate);




