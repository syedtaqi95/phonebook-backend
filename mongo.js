mongoose = require('mongoose')

if (![3, 5].some(x => x === process.argv.length)) {
  console.log('Usage: node mongo.js <password> [<Name> <Number>]')
  process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://fullstack:${password}@cluster0.nthtw.mongodb.net/phonebook?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

// Add new person to the DB
if (process.argv.length === 5) {
  const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
  })

  person.save().then(res => {
    console.log(`added ${person.name} ${person.number} to phonebook`)
    mongoose.connection.close()
  })
}
// Fetch all persons in DB
else if (process.argv.length === 3) {
  Person
    .find({})
    .then(res => {
      console.log('phonebook:')
      res.map( person => console.log(person.name, person.number) )
      mongoose.connection.close()
    })

}

