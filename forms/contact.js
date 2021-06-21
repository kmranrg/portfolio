function sendEmail() {
    var userEmail = document.getElementById("email").value;
    var userMessage = document.getElementById("message").value;
    var userSubject = document.getElementById("subject").value;
    Email.send({
        Host: "smtp.gmail.com",
        Username: "appledevworld@gmail.com",
        Password: "WorldApple@01",
        To: 'kmranrg@gmail.com',
        From: "appledevworld@gmail.com, "+userEmail,
        Subject: userSubject,
        Body: userMessage,
    })
        .then(function (message) {
            alert("mail sent successfully")
        });
}