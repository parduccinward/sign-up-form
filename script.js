
addEventToSubmitButton();


function addEventToSubmitButton() {
    const submitBtn = document.querySelector(".submit-btn");
    submitBtn.addEventListener("click",validatePasswords);
}

function validatePasswords(){
    if(checkInputsAreEmpty()!==true){
        checkPasswordsMatch();
    }
}

function checkInputsAreEmpty(){
    const password1 = document.querySelector("#password").value;
    const password2 = document.querySelector("#password_2").value;
    if(password1==="" || password2=== ""){
        return true;
    }else{
        return false;
    }
}

function checkPasswordsMatch(){
    const password1 = document.querySelector("#password").value;
    const password2 = document.querySelector("#password_2").value;
    if(password1 !== password2){
        alert("Passwords do not match");
    }
}

