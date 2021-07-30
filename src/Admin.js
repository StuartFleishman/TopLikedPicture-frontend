import React, { useState } from 'react'

function Admin() {

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userName, email, password)
  }

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>UserName</label>
        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value) } />
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="submit" />
      </form>
    </div>
  )
}

export default Admin
