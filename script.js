const correctPassword = "swati";  // 👈 change this

function checkPassword() {
    const entered = document.getElementById("passwordInput").value;
    
    if (entered === correctPassword) {
        document.getElementById("password-screen").style.display = "none";
        document.getElementById("website-content").style.display = "block";
    } else {
        document.getElementById("error").innerText = "Wrong password 💔";
    }
}
