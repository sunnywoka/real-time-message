import * as Path from 'node:path'
import express from 'express'
import cors from 'cors'
import { createServer } from 'node:http'
import { Server } from 'socket.io'

const server = express()
const httpServer = createServer(server)
const io = new Server(httpServer, { cors: { origin: 'http://localhost:3000' } })

server.use(express.json())
server.use(cors())

io.on('connection', (socket) => {
  console.log(`Client ${socket.id} connected`)
  socket.on('disconnect', () => {
    console.log(`Client ${socket.id} disconnected`)
  })
})

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}
export default httpServer
