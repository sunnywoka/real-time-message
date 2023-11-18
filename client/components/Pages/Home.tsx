import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

export default function Home() {
  return (
    <>
      <div id="message-container"></div>
      <form id="send-container">
        <input type="text" id="message-input" />
        <button type="submit" id="send-button">
          Send
        </button>
      </form>
    </>
  )
}
