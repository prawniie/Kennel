
function getId(id) {
    return document.getElementById(id)
}


let formSelect = getId("FormControlSelect1");
let message = getId("FormControlTextarea1");


let lastName = getId("InputLastname");

let telephoneNumber = getId("InputTelephoneNumber");
let email = getId("InputEmail");
let submit = getId("submit");

function validatePreName() {
    let preName = getId("InputPrename");
    if (preName == "") {
        alert("Du måste fylla i ett namn");
        return false;
    }
}


document.getElementById("submit").addEventListener("click", validatePreName);




//function respondToUser() {

//    let enteredNumber = document.getElementById("yourAge").value;
//    let theValueEnteredIsAnumber = enteredNumber == parseInt(enteredNumber);
//    let response = "";
//    if (theValueEnteredIsAnumber == true) {
//        if (enteredNumber >= 30) {
//            response = "You are really old"
//        } else {
//            response = "You are still young"
//        }
//    } else {
//        response = "The value entered is not a number"
//    }
//    writeText(response)
//}
//document.getElementById("okButton").addEventListener("click", respondToUser);



















