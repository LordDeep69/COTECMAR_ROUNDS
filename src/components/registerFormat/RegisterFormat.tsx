import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { TextField, Button, Container, Typography, Box, Grid } from '@mui/material'
import { type Equipo, crearRegistroEquipo } from '../../../api'
import './registerFormat.scss'
import { useDispatch } from 'react-redux'
import { addRegisteredEquipment } from '../../redux/features/registeredEquipmentSlice'

interface RegisterFormProps {
  equipment: Equipo
  handleBack: () => void
  roundId: string
}

const RegisterForm: React.FC<RegisterFormProps> = ({ equipment, handleBack, roundId }) => {
  const [fields, setFields] = useState<any[]>([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchEquipmentDetails = async (): Promise<void> => {
      try {
        const response = await fetch(`http://localhost:3002/api/equipo-detalles/${equipment.id_equipo}`)
        const data = await response.json()
        const filteredData = data.filter((field: any) => field.Field !== 'id' && field.Field !== 'id_ronda' && field.Field !== 'fecha')
        console.log('Estructura de la tabla del equipo:', filteredData)
        setFields(filteredData)
      } catch (error) {
        console.error('Error al obtener los detalles del equipo:', error)
      }
    }

    fetchEquipmentDetails()
  }, [equipment.id_equipo])

  const validationSchema = fields.reduce((schema, field) => {
    const fieldName = field.Field
    switch (field.Type) {
      case 'int':
        schema[fieldName] = Yup.number().typeError('Debe ser un número entero').integer('Debe ser un número entero').required('Campo requerido')
        break
      case 'float':
        schema[fieldName] = Yup.number().typeError('Debe ser un número decimal').required('Campo requerido')
        break
      default:
        schema[fieldName] = Yup.string().required('Campo requerido')
        break
    }
    return schema
  }, {})

  const formSchema = Yup.object().shape(validationSchema)
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(formSchema)
  })

  const onSubmit = async (data: any) => {
    const formData = {
      id_ronda: roundId,
      fecha: new Date().toISOString(),
      ...data
    }

    try {
      await crearRegistroEquipo(equipment.id_equipo, formData)
      dispatch(addRegisteredEquipment(equipment.id))
      handleBack()
      console.log('Registro exitoso:', formData)
    } catch (error) {
      console.error('Error al registrar el equipo:', error)
    }
  }

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Button variant="contained" color="primary" onClick={handleBack}>← Volver</Button>
        <Typography variant="h4" component="h1" gutterBottom>
          Formulario de Registro - {equipment.nombre_equipo}
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={3}>
            {fields.map((field) => (
              <Grid item xs={12} key={field.Field}>
                <Controller
                  name={field.Field}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label={field.name}
                      variant="outlined"
                      type={field.Type === 'int' ? 'number' : 'text'}
                      error={!!errors[field.name]}
                      helperText={errors[field.name]?.message}
                    />
                  )}
                />
              </Grid>
            ))}
          </Grid>
          <Box mt={4}>
            <Button type="submit" variant="contained" color="primary" fullWidth>Enviar Registro</Button>
          </Box>
        </form>
      </Box>
    </Container>
  )
}

export default RegisterForm
