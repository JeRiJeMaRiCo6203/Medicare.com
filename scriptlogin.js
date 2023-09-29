function formValidation() {
    var error = document.getElementById("error")
    // let satu = document.getElementsByName("email").value
    // let dua = document.getElementsByName("pass").value
    if(document.getElementById("email").value == "")
    {
        error.textContent = "Email must be filled!"
        error.style.color = "red"
    }
    else if(document.getElementById("pass").value == "")
    {
        error.textContent = "Password must be filled!"
        error.style.color = "red"
    }
    else
    {
        error.textContent = ""
    }
}

