function setFormMessage(formElement, type, message){
    const MsgElement = formElement.querySelector(".form__message");
    MsgElement.textContent = message;
    MsgElement.classList.remove("form__message--success", "form__message--error");
    MsgElement.classList.add(`form__message--${type}`);
}
function setInputError(InputElement, message){
    InputElement.classList.add("form__input--error");
    InputElement.parentElement.querySelector(".form__input--error--message").textContent = message;
}
function clearInputError(InputElement){
    InputElement.classList.remove("form__input--error");
    InputElement.parentElement.querySelector(".form__input--error--message").textContent = "";
}
function PopUp() {
    var x = document.getElementById("nobar");
    x.className = "show";

    setTimeout(function(){
        x.className = x.className.replace("show", ""); 
    }, 2500);
}
document.addEventListener("DOMContentLoaded", () =>{
    const LoginForm = document.querySelector("#login");
    const CreateAccForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e =>{
        e.preventDefault();
        LoginForm.classList.add("form--hidden");
        CreateAccForm.classList.remove("form--hidden");
    });
    document.querySelector("#linkLogin").addEventListener("click", e =>{
        e.preventDefault();
        LoginForm.classList.remove("form--hidden");
        CreateAccForm.classList.add("form--hidden");
    });
    LoginForm.addEventListener("submit", e => {
        e.preventDefault();
        setFormMessage(LoginForm, "error", "Invalid username/password");
    });
    document.querySelectorAll(".form__input").forEach(InputElement =>{
        InputElement.addEventListener("blur", e => {
            if (e.target.id === "SignUpUsername" && e.target.value.length > 0 && e.target.value.length < 8){
                setInputError(InputElement, "Username must be at least 8 characters in length");
            }
        });
        InputElement.addEventListener("input", e => {
            clearInputError(InputElement);
        });
    });
    document.querySelectorAll(".form__input2").forEach(InputElement =>{
        InputElement.addEventListener("blur", e => {
            if (e.target.id === "InputPass" && e.target.value.length > 0 && e.target.value.length < 8){
                setInputError(InputElement, "Password must be at least 8 characters in length");
            }
        });
        InputElement.addEventListener("input", e =>{
            clearInputError(InputElement);
        });
    });
});        
