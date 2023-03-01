const res = await fetch('http://localhost:8081/register', {
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({name:"Doom",username:"Game", password:"12345678"})
})
const data = await res.text()
console.log(data)