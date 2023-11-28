import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

socket.on('connect', () => {
  console.log(socket.id)
})

socket.on('disconnect', () => {
  console.log('Disconnected', socket.id)
})

function Home() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    navigate('/chat')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>Sign in</p>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button>Sign in</button>
    </form>
  )
}

export default Home
