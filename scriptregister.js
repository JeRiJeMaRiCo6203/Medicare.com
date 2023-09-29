function formValidation() {
    var error = document.getElementById("error")
    let satu = document.getElementById("name").value
    let dua = document.getElementById("email").value
    let tiga = document.getElementById("gender-male").checked
    let empat = document.getElementById("gender-female").checked
    let lima = document.getElementById("city").value
    let enam = document.getElementById("pass").value
    let tujuh = document.getElementById("conpass").value
    // var upperCaseLetters = /[A-Z]/g;

    if(satu == "")
    {
        error.textContent = "Full Name must be filled!"
        error.style.color = "red"
    }
    
    else if(dua == "")
    {
        error.textContent = "Email must be filled!"
        error.style.color = "red"
    }
    

    else if(tiga == false && empat == false)
    {
        error.textContent = "Gender must be selected!"
        error.style.color = "red"
    }

    else if(lima == "")
    {
        error.textContent = "City must be selected!"
        error.style.color = "red"
    }

    else if(enam == "")
    {
        error.textContent = "Password must be filled!"
        error.style.color = "red"
    }
    else if(tujuh == "")
    {
        error.textContent = "Confirm Password must be filled!"
        error.style.color = "red"
    }
    else if(!dua.endsWith(".com"))
    {
        error.textContent = "Email must ends with .com!"
        error.style.color = "red"
    }
    else if(dua.indexOf("@") == -1)
    {
        error.textContent = "Email must contain @!"
        error.style.color = "red"
    }
    else if(enam.length < 8)
    {
        error.textContent = "Password must at least consist of 8 characters!"
        error.style.color = "red"
    }
    else if(enam.search(/[A-Z]/) == -1)
    {
        error.textContent = "Password must have at least one Uppercase Letter!"
        error.style.color = "red"
    }
    else if(enam != tujuh)
    {
        error.textContent = "Password don't match!"
        error.style.color = "red"
    }
    else
    {
        error.textContent = ""
    }

}
