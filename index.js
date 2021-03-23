const express = require("express")
const morgan = require("morgan")
const cors = require('cors')
require('dotenv').config()
const Person = require('./models/person')
const app = express()

morgan.token('body', (req, res) => JSON.stringify(req.body))

app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())
app.use(express.static('build'))

app.get("/info", (request, response) => {
  const current_time = new Date()
  Person.find().count((err, count) => {
    response.send(
      `<p> Phonebook has info for ${count} people </p>
      <p> ${current_time} </p>`
    )
  })
})

app.get("/api/persons", (request, response) => {
  Person.find({}).then(phonebook => {
    response.json(phonebook)
  })
})

app.get("/api/persons/:id", (request, response) => {
  Person.findById(request.params.id)
    .then(person => response.json(person))
})

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id)
  const entry = phonebook.find(p => p.id === id)

  if (entry) {
    phonebook = phonebook.filter(p => p.id !== id)
    response.status(204).end()
  }
  else {
    response.status(404).end()
  }
})

app.post("/api/persons", (request, response) => {
  const body = request.body

  // Fail if name/number is missing or if name already exists
  if (!body.name || !body.number) {
    return response.status(400).json({
      error: 'name and/or number missing'
    })
  }

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    response.json(savedPerson)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))