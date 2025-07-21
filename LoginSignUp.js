var SignUser, SignEmail, SignPass, SignConfirmPass;






function SignIn() {

    SignUser = document.getElementById("SignUser").value;
    SignEmail = document.getElementById("SignEmail").value;
    SignPass = document.getElementById("SignPass").value;
    SignConfirmPass = document.getElementById("SignConfirmPass").value;

    if (SignPass === SignConfirmPass) {
        const user = {
            CuserName: SignUser,
            email: SignEmail,
            Cpassword: SignPass,
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

    if (
        userData &&
        (userData.CuserName === username || userData.email === username) &&
        userData.Cpassword === password
    ) {
        alert("Login successful");
        window.location.href = "https://www.youtube.com/";
    } else {
        document.getElementById("wrongPass").style.display = "block";
    }



}