import express from 'express'
const app = express()
app.use(express.json())

const patients = []

app.get('/patients', (req, res) => {
  res.status(200).json(patients)
})

app.post('/patients', (req, res) => {
    patients.push(req.body)
    res.status(201).send('Patient added successfully')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})