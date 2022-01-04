const contactusForm = document.querySelector('#form_contact');


contactusForm.addEventListener('submit',function(event){
    event.preventDefault();

const userName = document.getElementById("name").value
const userEmail = document.getElementById("email").value
const subject = document.getElementById("subject").value
const userMessage = document.getElementById("message").value



 Email.send({

         // Host: "smtp.gmail.com",
        // Username: "",
        // Password: "", 
    SecureToken:"",
    To : '', // to foodtracker
    From : userEmail,
    Name: userName,
    Subject :subject,
    Body : userMessage
}).then(
  message => alert(message)
);

});