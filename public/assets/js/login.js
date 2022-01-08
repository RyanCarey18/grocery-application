
const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

  
    if (email && password) {
      const response = await fetch('/api/users/login', {  
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');

      } else {
        alert('Failed to log in.');
      }
    }
  };



  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const first_name = document.querySelector("#firstName").value.trim();
    const last_name = document.querySelector('#lastName').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const Cpassword = document.querySelector('#Cpassword-signup').value.trim();



  
    if (first_name && last_name && email && password && Cpassword && password === Cpassword) {
      const response = await fetch('/api/users', { // create new User
        method: 'POST',
        body: JSON.stringify({ first_name,last_name,email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        console.log('new user has just created')
      } else {
        alert('Failed to sign up.');
      }
    }
  };
  
  document.querySelector(".login-form").addEventListener("submit", loginFormHandler);

  document.querySelector(".signup-form").addEventListener("submit", signupFormHandler);

