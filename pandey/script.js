function handleLogin(event) {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    const p = /^(?=.[!@#$%^&(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{5,}$/;

    if (!p.test(password)) {
        alert('Password must be at least 5 characters long and include at least one special character.');
        return;
    }
    alert('Login successful with email:', email);
  } 