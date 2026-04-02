fetch('https://efficience-summit2026.onrender.com/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: 'test@test.com', password: 'test' })
})
.then(res => res.text())
.then(text => require('fs').writeFileSync('test-login-error.json', text));
