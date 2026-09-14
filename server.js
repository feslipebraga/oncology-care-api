import express from 'express'
import 'dotenv/config'
import { PrismaClient } from "./generated/prisma/client.ts";

const app = express()
app.use(express.json())

const prisma = new PrismaClient();

// Rota para obter todos os pacientes
app.get('/patients', async (req, res) => {
  const patients = await prisma.patient.findMany()
  res.status(200).json(patients)
})

// Rota para criar um novo paciente
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

// Rota para atualizar um paciente existente
app.put('/patients/:id', async (req, res) => {
  const patientId = req.params.id;
  const {name, age, email} = req.body;

  const updatedPatient = await prisma.patient.update({
    where: {
      id: patientId
    },
    data: {
      name: name,
      age: age,
      email: email
    }
  })
  res.status(200).json({
    message: 'Patient updated successfully',
    patient: updatedPatient
  })
})

// Rota para deletar um paciente existente
app.delete('/patients/:id', async (req, res) => {
  const patientId = req.params.id;
  try {
    const deletedPatient = await prisma.patient.delete({
      where: {
        id: patientId
      }
    });
    res.status(200).json({
      message: 'Patient deleted sucessfully',
      patient: deletedPatient
    })
  }
  catch (error) {
    res.status(404).json({
      message: 'Patient not found'
    })
  }
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})