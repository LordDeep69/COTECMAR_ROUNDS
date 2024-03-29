import React from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  // Aquí puedes definir los campos que necesites, con sus respectivos tipos
  // Por ejemplo:
  name: string
  password: string
  email: string
  age: number
  gender: string
  rating: number
  temperatureOil: number
  pressure: number
  statuPressureOilLow: string
  statuPressureOilHight: string
  generatorRpm: number
  generatorOperation: string
  generatorAutomatic: string
  generatorManual: string
  generatorRemoteBlock: string
  generatorCB: string
  generatorFailure: string
}

const GeneradorFormat: React.FC = () => {
  const { register } = useForm<FormData>()

  return (
    <section className='format'>

    <span className='titleElement'>Generador</span>
    <section className='formatRoundlement'>
        <span className='titleRegister'>REGISTRO</span>
        <form className='formElementSelected'>

            <article className='containerInputs'>
                <span className='titleInput'>Aceite</span>
                <div className='divider'></div> {/* Línea divisoria */}
                <section className='inputsAll'>

                    <div className='oneInput'>

                        <label htmlFor='pressure'>Presión de Aceite (bar) </label>
                        <input
                            type='number'
                            id='pressure'
                            {...register('pressure', { required: true, min: -50, max: 50 })}
                            placeholder='Presión'
                        />

                    </div>

                    <div className='oneInput'>

                        <label htmlFor='temperature'>Temperatura (°C) </label>
                        <input
                            type='number'
                            id='temperature'
                            {...register('temperatureOil', { required: true, min: -50, max: 50 })}
                            placeholder='Ingrese en unidad de °C'
                        />

                    </div>

                    <div className='oneInput'>

                        <label htmlFor='oilPressure'>Baja Presión de Aceite</label>
                        <select id='oilPressure' {...register('statuPressureOilLow', { required: true })}>
                            <option value='Normal'>Normal</option>
                            <option value='Alerta'>Critical</option>
                            <option value='Revisión'>Revisión</option>
                        </select>

                    </div>

                    <div className='oneInput'>

                        <label htmlFor='oilPressure'>Alta Presión de Aceite</label>
                        <select id='oilPressure' {...register('statuPressureOilHight', { required: true })}>
                            <option value='Normal'>Normal</option>
                            <option value='Alerta'>Critical</option>
                            <option value='Revisión'>Revisión</option>
                        </select>

                    </div>

                </section>

            </article>

            <article className='containerInputs'>
                <span className='titleInput'>Estado</span>
                <div className='divider'></div> {/* Línea divisoria */}
                <section className='inputsAll'>

                    <div className='oneInput'>

                        <label htmlFor='pressure'>Rpm Generador (bar) </label>
                        <input
                            type='number'
                            id='generatorRpm'
                            {...register('generatorRpm', { required: true, min: -50, max: 50 })}
                            placeholder='Rpm'
                        />

                    </div>

                    <div className='oneInput'>

                        <label htmlFor='temperature'>Generador Operado </label>
                        <select id='generatorOperation' {...register('generatorOperation', { required: true })}>
                            <option value='Not Running'>Not Running</option>
                            <option value='Runing'>Runing</option>
                        </select>

                    </div>
                    <div className='oneInput'>

                        <label htmlFor='temperature'>Generador en Automático </label>
                        <select id='generatorAutomatic' {...register('generatorAutomatic', { required: true })}>
                            <option value='On'>On</option>
                            <option value='Off'>Off</option>
                        </select>

                    </div>
                    <div className='oneInput'>

                        <label htmlFor='temperature'>Generador Arranque Manual</label>
                        <select id='generatorManual' {...register('generatorManual', { required: true })}>
                            <option value='On'>On</option>
                            <option value='Off'>Off</option>
                        </select>

                    </div>
                    <div className='oneInput'>

                        <label htmlFor='temperature'>Remoto Bloqueado </label>
                        <select id='generatorRemoteBlock' {...register('generatorRemoteBlock', { required: true })}>
                            <option value='On'>On</option>
                            <option value='Off'>Off</option>
                        </select>

                    </div>
                    <div className='oneInput'>

                        <label htmlFor='temperature'>CB Estado </label>
                        <select id='generatorCB' {...register('generatorCB', { required: true })}>
                            <option value='On'>On</option>
                            <option value='Off'>Off</option>
                        </select>

                    </div>

                    <div className='oneInput'>

                        <label htmlFor='oilPressure'>Falla del Generador</label>
                        <select id='generatorFailure' {...register('generatorFailure', { required: true })}>
                            <option value='Normal'>Not Failure</option>
                            <option value='Alerta'>Alarm</option>
                            <option value='Revisión'>Revisión</option>
                        </select>

                    </div>

                </section>

            </article>

        </form>
        <span className='buttonRegisterElement'>Registrar</span>

    </section>
    <section className='registerRound'>

    </section>

</section>
  )
}

export default GeneradorFormat
