function login() {
   const username = document.getElementById('username').value;
   const password = document.getElementById('password').value;

   if (username.length === 0 || password.length === 0)  {
      alert('Username and Password is required');
      return;
   
   if(username === 'Admin' && password === 'Addy') {
      alert('Login succesfull');
   } else {
      alert("Wrong password or username");
   }
   
}
}
