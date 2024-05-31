import React from 'react'
import { useForm } from 'react-hook-form'

interface FormData {
  // Aquí puedes definir los campos que necesites, con sus respectivos tipos
  name: string
  password: string
  email: string
  age: number
  gender: string
  rating: number
  temperatureOil: number
  pressureOne: number
  statuPressureOilLow: string
  statuPressureOilHight: string
  generatorRpm: number
  generatorOperation: string
  generatorAutomatic: string
  generatorManual: string
  generatorRemoteBlock: string
  generatorCB: string
  generatorFailure: string
  motorAirTemperature: number
  ChargeAirCoolantTemperature: number
  motorBarometricPressure: number
  motoraltitude: number
  motorTemperatureWaterEnter: number
  motorRatedSpeed: number
  motorSpeedRangePropellerDesign: number
  motorSpeedRangePropellerArrangement: number
  motorPistonSpeed: number
  motorFuelStopPower: number
  motorMeanEffectivePressureMEP: number
  motorMapaDePrestaciones: string
  motorMapaDesempeño: string
  motorDepresionAire: number
  motorDepresionireAdmision: number
  motorCompresionEscape: number
  motorMaxCompresionEscape: number
  motorComprensionEstatica: number
  motorTemperaturaConexion: number
  motorTemperaturaCombustibleMax: number
  motorTemperaturaAfterCambioCalor: number
  motorConsumoEspecificoCombustible: number
  motorConsumoTwo: number
  motorConsumoThree: number
  motorConsumoFour: number
  motorConsumoFive: number
  motorConsumoSix: number
  motorEstadoOne: number
  motorEstadoTwo: number
  motorEstadoThree: number
  motorEstadoFour: number
  motorEstadoFive: number
  motorEstadoSix: number
  motorEstadoSeven: number
  motorESix1: number
  motorESix2: number
  motorESix3: number
  motorESix4: number
  motorESix5: number
  motorESix6: number
  motorESix7: number
  motorESix8: number
  motorESix9: number
  motorE71: number
  motorE72: number
  motorE73: number
  motorE74: number
  motorE75: number
  motorE76: number
  motorE77: number
  motorE78: number
  motorE79: number
  motorE710: number
  motorE711: number
  motorE712: number
  motorE713: number
  motorE714: number
  motorE715: number
  motorE716: number
  motorE717: number
  motorE718: number
  motorE719: number
}

const MotorFormat: React.FC = () => {
  const { register } = useForm<FormData>()

  return (
    <section className='format'>
      <span className='titleElement'>MOTOR</span>
      <section className='formatRoundlement'>
        <span className='titleRegister'>REGISTRO</span>
        <form className='formElementSelected'>
          <article className='containerInputs'>
            <span className='titleInput'>Estado 1</span>
            <div className='divider'></div> {/* Línea divisoria */}
            <section className='inputsAll'>
              <div className='oneInput'>
                <label htmlFor='motorAirTemperature'>Temperatura del aire de admisión (°C) </label>
                <input
                  type='number'
                  id='motorAirTemperature'
                  {...register('motorAirTemperature', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='ChargeAirCoolantTemperature'>Temperatura del refrigerante del aire de sobrealimentación (°C) </label>
                <input
                  type='number'
                  id='ChargeAirCoolantTemperature'
                  {...register('ChargeAirCoolantTemperature', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorBarometricPressure'>Presión Barométrica (mBar)</label>
                <input
                  type='number'
                  id='motorBarometricPressure'
                  {...register('motorBarometricPressure', { required: true, min: -50, max: 50 })}
                  placeholder='mBar'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motoraltitude'>Altitud del sitio sobre el nivel del mar (m)</label>
                <input
                  type='number'
                  id='motoraltitude'
                  {...register('motoraltitude', { required: true, min: -50, max: 50 })}
                  placeholder='Altitud'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorTemperatureWaterEnter'>Temperatura de entrada de agua bruta (°C)</label>
                <input
                  type='number'
                  id='motorTemperatureWaterEnter'
                  {...register('motorTemperatureWaterEnter', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
            </section>
          </article>
          <article className='containerInputs'>
            <span className='titleInput'>Estado 2</span>
            <div className='divider'></div> {/* Línea divisoria */}
            <section className='inputsAll'>
              <div className='oneInput'>
                <label htmlFor='motorRatedSpeed'>Velocidad nominal del motor (Rpm) </label>
                <input
                  type='number'
                  id='motorRatedSpeed'
                  {...register('motorRatedSpeed', { required: true, min: -50, max: 50 })}
                  placeholder='Rpm'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorSpeedRangePropellerDesign'>Margen de velocidad para el diseño de la hélice (Rpm) </label>
                <input
                  type='number'
                  id='motorSpeedRangePropellerDesign'
                  {...register('motorSpeedRangePropellerDesign', { required: true, min: -50, max: 50 })}
                  placeholder='Rpm'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorSpeedRangePropellerArrangement'>Margen de velocidad para la disposición de la hélice (Rpm)</label>
                <input
                  type='number'
                  id='motorSpeedRangePropellerArrangement'
                  {...register('motorSpeedRangePropellerArrangement', { required: true, min: -50, max: 50 })}
                  placeholder='Rpm'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorPistonSpeed'>Velocidad media del pistón (m/s)</label>
                <input
                  type='number'
                  id='motorPistonSpeed'
                  {...register('motorPistonSpeed', { required: true, min: -50, max: 50 })}
                  placeholder='m/s'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorFuelStopPower'>Potencia parada combustible ISO 3046 (kW)</label>
                <input
                  type='number'
                  id='motorFuelStopPower'
                  {...register('motorFuelStopPower', { required: true, min: -50, max: 50 })}
                  placeholder='kW'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorMeanEffectivePressureMEP'>Presión media efectiva MEP (bar)</label>
                <input
                  type='number'
                  id='motorMeanEffectivePressureMEP'
                  {...register('motorMeanEffectivePressureMEP', { required: true, min: -50, max: 50 })}
                  placeholder='bar'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorMapaDePrestaciones'>Mapa de prestaciones</label>
                <input
                  type='string'
                  id='motorMapaDePrestaciones'
                  {...register('motorMapaDePrestaciones')}
                  placeholder=''
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorMapaDesempeño'>Mapa de desempeño No. (cont.) </label>
                <input
                  type='string'
                  id='motorMapaDesempeño'
                  {...register('motorMapaDesempeño')}
                  placeholder=''
                />
              </div>
            </section>
          </article>
          <article className='containerInputs'>
            <span className='titleInput'>Estado 3</span>
            <div className='divider'></div> {/* Línea divisoria */}
            <section className='inputsAll'>
              <div className='oneInput'>
                <label htmlFor='motorDepresionAire'>Depresión del aire de admisión filtro nuevo (mbar) </label>
                <input
                  type='number'
                  id='motorDepresionAire'
                  {...register('motorDepresionAire', { required: true, min: -50, max: 50 })}
                  placeholder='mbar'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorDepresionireAdmision'>Depresión del aire de admisión, máx (mbar) </label>
                <input
                  type='number'
                  id='motorDepresionireAdmision'
                  {...register('motorDepresionireAdmision', { required: true, min: -50, max: 50 })}
                  placeholder='mbar'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorCompresionEscape'>Contrapresión de escapec(Mbar)</label>
                <input
                  type='number'
                  id='motorCompresionEscape'
                  {...register('motorCompresionEscape', { required: true, min: -50, max: 50 })}
                  placeholder='Mbar'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorMaxCompresionEscape'>Contrapresión de escape, máx (Mbar)</label>
                <input
                  type='number'
                  id='motorMaxCompresionEscape'
                  {...register('motorMaxCompresionEscape', { required: true, min: -50, max: 50 })}
                  placeholder='Mbar'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorComprensionEstatica'>Contrapresión de escape, estática en el punto de medición de referencia del motor (a presión nominal 2,4)</label>
                <input
                  type='number'
                  id='motorComprensionEstatica'
                  {...register('motorComprensionEstatica', { required: true, min: -50, max: 50 })}
                  placeholder='mbar'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorTemperaturaConexion'>Temperatura del combustible en la conexión de alimentación de combustible</label>
                <input
                  type='number'
                  id='motorTemperaturaConexion'
                  {...register('motorTemperaturaConexion', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorTemperaturaCombustibleMax'>Temperatura del combustible en la conexión de alimentación de combustible, máx.</label>
                <input
                  type='number'
                  id='motorTemperaturaCombustibleMax'
                  {...register('motorTemperaturaCombustibleMax', { required: true, min: -50, max: 50 })}
                  placeholder=''
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorTemperaturaAfterCambioCalor'>Temperatura del combustible después del intercambiador de calor interno del combustible. (°C)</label>
                <input
                  type='number'
                  id='motorTemperaturaAfterCambioCalor'
                  {...register('motorTemperaturaAfterCambioCalor', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
            </section>
          </article>
          <article className='containerInputs'>
            <span className='titleInput'>Estado 4</span>
            <div className='divider'></div> {/* Línea divisoria */}
            <section className='inputsAll'>
              <div className='oneInput'>
                <label htmlFor='motorConsumoEspecificoCombustible'>Consumo específico de combustible (be) - FSP con bomba de agua bruta (+ 5 %; EN 590; 42,8 MJ/kg)</label>
                <input
                  type='number'
                  id='motorConsumoEspecificoCombustible'
                  {...register('motorConsumoEspecificoCombustible', { required: true, min: -50, max: 50 })}
                  placeholder='g/kWh'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorConsumoTwo'>Consumo específico de combustible (be) con bomba de agua bruta (EN 590; 42,8M J/kg) (g/kWh)</label>
                <input
                  type='number'
                  id='motorConsumoTwo'
                  {...register('motorConsumoTwo', { required: true, min: -50, max: 50 })}
                  placeholder='g/kWh'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorConsumoThree'>Consumo específico de combustible (be) con bomba de agua bruta (+ 5 %; EN 590; 42,8 MJ/kg) - valor óptimo en la curva de hélice n^3  (g/kWh)</label>
                <input
                  type='number'
                  id='motorConsumoThree'
                  {...register('motorConsumoThree', { required: true, min: -50, max: 50 })}
                  placeholder='g/kWh'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorConsumoFour'>Consumo específico de combustible (be) con bomba de agua bruta (EN 590; 42,8MJ/kg) - Punto de velocidad de crucero - (g/kWh)</label>
                <input
                  type='number'
                  id='motorConsumoFour'
                  {...register('motorConsumoFour', { required: true, min: -50, max: 50 })}
                  placeholder='g/kWh'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorConsumoFive'>Consumo de combustible en ralentí (kg/h)</label>
                <input
                  type='number'
                  id='motorConsumoFive'
                  {...register('motorConsumoFive', { required: true, min: -50, max: 50 })}
                  placeholder='kg/h'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorConsumoSix'>Consumo de aceite lubricante después de 100 h de funcionamiento (B = consumo de combustible por hora) (%)</label>
                <input
                  type='number'
                  id='motorConsumoSix'
                  {...register('motorConsumoSix', { required: true, min: -50, max: 50 })}
                  placeholder='Porcentaje'
                />
              </div>
            </section>
          </article>
          <article className='containerInputs'>
            <span className='titleInput'>Estado 5</span>
            <div className='divider'></div> {/* Línea divisoria */}
            <section className='inputsAll'>
              <div className='oneInput'>
                <label htmlFor='motorEstadoOne'>Presión de aire de sobrealimentación antes del cilindro (abs.) (bar) </label>
                <input
                  type='number'
                  id='motorEstadoOne'
                  {...register('motorEstadoOne', { required: true, min: -50, max: 50 })}
                  placeholder='bar'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorEstadoTwo'>Caudal volumétrico del aire de combustión (m3/s) </label>
                <input
                  type='number'
                  id='motorEstadoTwo'
                  {...register('motorEstadoTwo', { required: true, min: -50, max: 50 })}
                  placeholder='m3/s'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorEstadoThree'>Caudal volumétrico de escape (a temperatura de escape) (m3/s)</label>
                <input
                  type='number'
                  id='motorEstadoThree'
                  {...register('motorEstadoThree', { required: true, min: -50, max: 50 })}
                  placeholder='m3/s'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorEstadoFour'>Temperatura de escape antes del turbocompresor (°C)</label>
                <input
                  type='number'
                  id='motorEstadoFour'
                  {...register('motorEstadoFour', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorEstadoFive'>Temperatura de escape después del turbocompresor, diagrama No. (°C)</label>
                <input
                  type='number'
                  id='motorEstadoFive'
                  {...register('motorEstadoFive', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorEstadoSix'>Temperatura de escape después del motor</label>
                <input
                  type='number'
                  id='motorEstadoSix'
                  {...register('motorEstadoSix', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorEstadoSeven'>Temperatura de escape después del motor (turbocompresor),máx. (°C) </label>
                <input
                  type='number'
                  id='motorEstadoSeven'
                  {...register('motorEstadoSeven', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
            </section>
          </article>
          <article className='containerInputs'>
            <span className='titleInput'>Estado 6</span>
            <div className='divider'></div> {/* Línea divisoria */}
            <section className='inputsAll'>
              <div className='oneInput'>
                <label htmlFor='motorESix1'>Calor disipado por el refrigerante del motor con calor de aceite</label>
                <input
                  type='number'
                  id='motorESix1'
                  {...register('motorESix1', { required: true, min: -50, max: 50 })}
                  placeholder='kW'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorESix2'>Disipación de calor por el refrigerante del motor con calefacción de aceite, con calefacción de aire de carga</label>
                <input
                  type='number'
                  id='motorESix2'
                  {...register('motorESix2', { required: true, min: -50, max: 50 })}
                  placeholder='kW'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorESix3'>Calor disipado por el refrigerante del motor con calefacción de aceite, sin calefacción de aire de sobrealimentación (kW)</label>
                <input
                  type='number'
                  id='motorESix3'
                  {...register('motorESix3', { required: true, min: -50, max: 50 })}
                  placeholder='kW'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorESix4'>Calor disipado por el refrigerante del motor sin calefacción de aceite, sin calefacción de aire de sobrealimentación (kW) </label>
                <input
                  type='number'
                  id='motorESix4'
                  {...register('motorESix4', { required: true, min: -50, max: 50 })}
                  placeholder='kW'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorESix5'>Calor disipado por el aceite (kW)</label>
                <input
                  type='number'
                  id='motorESix5'
                  {...register('motorESix5', { required: true, min: -50, max: 50 })}
                  placeholder='kW'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorESix6'>Disipación de calor del aire de carga y del aceite (kW)</label>
                <input
                  type='number'
                  id='motorESix6'
                  {...register('motorESix6', { required: true, min: -50, max: 50 })}
                  placeholder='kW'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorESix7'>Calor disipado por el flujo de combustible de retornoe (kW)</label>
                <input
                  type='number'
                  id='motorESix7'
                  {...register('motorESix7', { required: true, min: -50, max: 50 })}
                  placeholder='kW'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorESix8'>Calor por radiación y convección, motor (kW)</label>
                <input
                  type='number'
                  id='motorESix8'
                  {...register('motorESix8', { required: true, min: -50, max: 50 })}
                  placeholder='kW'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorESix9'>Calor por radiación y convección, motor (temperatura de la sala del motor = temperatura del aire de admisión, velocidad del flujo 2 m/s) (kW)</label>
                <input
                  type='number'
                  id='motorESix9'
                  {...register('motorESix9', { required: true, min: -50, max: 50 })}
                  placeholder='kW'
                />
              </div>
            </section>
          </article>
          <article className='containerInputs'>
            <span className='titleInput'>Estado 7</span>
            <div className='divider'></div> {/* Línea divisoria */}
            <section className='inputsAll'>
              <div className='oneInput'>
                <label htmlFor='motorE71'>Diferencial de temperatura del refrigerante después/antes del motor (K)</label>
                <input
                  type='number'
                  id='motorE71'
                  {...register('motorE71', { required: true, min: -50, max: 50 })}
                  placeholder='k'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE72'>Temperatura de funcionamiento del refrigerante, desde (en la salida del motor al equipo de refrigeración) (°C)</label>
                <input
                  type='number'
                  id='motorE72'
                  {...register('motorE72', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE73'>Temperatura de funcionamiento del refrigerante, hasta (en la salida del motor al equipo de refrigeración) (°C)</label>
                <input
                  type='number'
                  id='motorE73'
                  {...register('motorE73', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE74'>Temperatura del refrigerante después del motor, límite 1 (°C)</label>
                <input
                  type='number'
                  id='motorE74'
                  {...register('motorE74', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE75'>Temperatura del refrigerante después del motor, límite 2 (°C)</label>
                <input
                  type='number'
                  id='motorE75'
                  {...register('motorE75', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE76'>Temperatura del refrigerante después del equipo de enfriamiento (sin anticongelante) (°C)</label>
                <input
                  type='number'
                  id='motorE76'
                  {...register('motorE76', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE77'>Temperatura del refrigerante después del equipo de enfriamiento (% máx. de anticongelante) (°C)</label>
                <input
                  type='number'
                  id='motorE77'
                  {...register('motorE77', { required: true, min: -50, max: 50 })}
                  placeholder='°C'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE78'>Contenido de anticongelante refrigerante, máx. (%)</label>
                <input
                  type='number'
                  id='motorE78'
                  {...register('motorE78', { required: true, min: -50, max: 50 })}
                  placeholder='%'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE79'>Bomba de refrigerante: caudal (± 5 %) (m3/h) </label>
                <input
                  type='number'
                  id='motorE79'
                  {...register('motorE79', { required: true, min: -50, max: 50 })}
                  placeholder='m3/h'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE710'>Bomba de refrigerante: caudal (m3/h)</label>
                <input
                  type='number'
                  id='motorE710'
                  {...register('motorE710', { required: true, min: -50, max: 50 })}
                  placeholder='m3/h'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE711'>Equipo de refrigeración: caudal de refrigerante (m3/h)</label>
                <input
                  type='number'
                  id='motorE711'
                  {...register('motorE711', { required: true, min: -50, max: 50 })}
                  placeholder='m3/h'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE712'>Bomba de refrigerante: diferencial de presión (bar)</label>
                <input
                  type='number'
                  id='motorE712'
                  {...register('motorE712', { required: true, min: -50, max: 50 })}
                  placeholder='bar'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE713'>Bomba de refrigerante: diferencial de presión, mín. (bar)</label>
                <input
                  type='number'
                  id='motorE713'
                  {...register('motorE713', { required: true, min: -50, max: 50 })}
                  placeholder='bar'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE714'>Bomba de refrigerante: diferencial de presión, máx. (bar)</label>
                <input
                  type='number'
                  id='motorE714'
                  {...register('motorE714', { required: true, min: -50, max: 50 })}
                  placeholder='bar'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE715'>Bomba de refrigerante: diferencial de presión con equipo de refrigeración (bar)</label>
                <input
                  type='number'
                  id='motorE715'
                  {...register('motorE715', { required: true, min: -50, max: 50 })}
                  placeholder='bar'
                />
              </div>
              <div className='oneInput'>
                <label htmlFor='motorE716'>Bomba de refrigerante: diferencial de presión sin equipo de refrigeración. (bar)</label>
                <input
                  type='number'
                  id='motorE716'
                  {...register('motorE716', { required: true, min: -50, max: 50 })}
                  placeholder='bar'
                />
              </div>
            </section>
          </article>
        </form>
        <span className='buttonRegisterElement'>Registrar</span>
      </section>
    </section>
  )
}

export default MotorFormat
