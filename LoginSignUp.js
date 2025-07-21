var SignUser, SignEmail, SignPass, SignConfirmPass;



var userData = JSON.parse(localStorage.getItem("user"));
var Susername = userData.CuserName;
console.log(Susername);





function SignIn() {


    if (SignPass == SignConfirmPass) {
        SignUser = document.getElementById("SignUser").value;
        SignEmail = document.getElementById("SignEmail").value;
        SignPass = document.getElementById("SignPass").value;
        SignConfirmPass = document.getElementById("SignConfirmPass").value;

        const user = {
            CuserName: SignUser,
            email: SignEmail,
            Cpassword: SignPass,
            Cpassword: SignConfirmPass,
        };

        localStorage.setItem("user", JSON.stringify(user));

        document.getElementById("wrongPass").style.display = "none";
        alert("Sign Up successful");
        window.location.href = "index.html";


    } else {
        document.getElementById("wrongPass").style.display = "block";
    }


}

function LogIn() {
    var username = document.getElementById("LoginDet").value;
    var password = document.getElementById("PassDet").value;

    const userData = JSON.parse(localStorage.getItem("user"));

    if (userData.CuserName || userData.Cpassword == password) {
        if (userData.Cpassword == password) {
            alert("login successful");
            window.location.href = "https://www.youtube.com/";
        } else {
            document.getElementById("wrongPass").style.display = "block";
        }
    } else {
        document.getElementById("wrongPass").style.display = "block";
    }



}