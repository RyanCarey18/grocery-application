const contactusForm = document.querySelector(".form_contact");
contactusForm.addEventListener("submit", async function(event){
  event.preventDefault();

  const userName = document.getElementById("name").value;
  const userEmail = document.getElementById("email").value;
  const userSubject = document.getElementById("subject").value;
  const userMessage = document.getElementById("message").value;

  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify({ userName, userEmail, userSubject ,userMessage}),
    headers: { "Content-Type": "application/json" },
  });

  console.log ("response = " +response);

  if (response.ok) {
    alert("Your Message was sent successfully !!!");
    document.location.replace("/");

  } else {
    alert("Failed to send email");
    document.location.replace("/");
  }


});

