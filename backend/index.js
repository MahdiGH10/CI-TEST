const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const app = express()
const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV || 'development'

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString()
  console.log(`[${timestamp}] ${req.method} ${req.path}`)
  next()
})

// Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API backend opérationnelle ✅',
    time: new Date().toISOString(),
    environment: NODE_ENV,
    uptime: process.uptime(),
  })
})

app.get('/api/data', (req, res) => {
  res.json({
    items: [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: true },
    ],
  })
})

app.post('/api/data', (req, res) => {
  const { title } = req.body
  if (!title) {
    return res.status(400).json({ error: 'Title is required' })
  }
  res.status(201).json({ id: 3, title, completed: false })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

const server = app.listen(PORT, () => {
  console.log(`\n🚀 Backend running on http://localhost:${PORT}`)
  console.log(`📍 Environment: ${NODE_ENV}\n`)
})

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('\n📍 SIGTERM received, shutting down gracefully')
  server.close(() => {
    console.log('Backend closed')
    process.exit(0)
  })
})
