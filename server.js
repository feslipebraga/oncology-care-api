import express from 'express'
import 'dotenv/config'
import { PrismaClient } from "./generated/prisma/client.ts";

const app = express()
app.use(express.json())

const prisma = new PrismaClient();

app.get('/patients', async (req, res) => {
  const patients = await prisma.patient.findMany()
  res.status(200).json(patients)
})

app.post('/patients', async (req, res) => {
  const patient = await prisma.patient.create({
    data: {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email
    }
  })
  res.status(201).json(patient)
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
