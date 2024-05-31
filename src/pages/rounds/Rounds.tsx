import React, { useEffect, useState } from 'react'
import './rounds.scss'
import ElementRound from '../../components/elementRound/ElementRound'
import { useAppSelector } from '../../hooks/reduxHooks'
import GeneradorFormat from '../../components/ElementsFormats/GeneradorFormat/GeneradorFormat'
import MotorFormat from '../../components/ElementsFormats/MotorFormat/MotorFormat'

interface FormData {
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

const Rounds: React.FC = () => {
  const [secondsLeft, setSecondsLeft] = useState(600)
  const count = useAppSelector((state) => state.idElemetSelecte.id)

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prevSecondsLeft) => {
        if (prevSecondsLeft <= 1) {
          clearInterval(interval)
          return 0
        }
        return prevSecondsLeft - 1
      })
    }, 1000)

    return () => { clearInterval(interval) }
  }, [])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
  }

  console.log(`El Id Seleccionado es: ${count}`)

  return (
    <main className='round'>
      <section className='roundsOperations'>
        <figure className='figureSystemRound'>
          <img src="https://images.ecestaticos.com/uR18VRzf557uZn7XFdhtTPDyYSE=/0x178:1898x1245/1600x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F453%2Fc2d%2Fd82%2F453c2dd823162e82b5b779f5fa390e63.jpg" alt="a" />
        </figure>

        <div className='actionsRounds'>

          <span className='titleActionsRound'>Buque B</span>
          <div className='containerActions'>

            <div className='timer'>
              <span>Tiempo Restante:</span>
              <span className='timerValue'>{formatTime(secondsLeft)}</span>
            </div>
            <section className='actionsButtons'>

              <span className='newRound'>
                <figure>
                  <img src="https://i.ibb.co/rvkKtK1/image-5.png" alt="New Round" />
                </figure>
                <p>Nueva Ronda</p>
              </span>
              <span className='history'>
                <figure className='historyFigure'>
                  <img className='historyImg' src="https://i.ibb.co/xL4RpZw/image-6.png" alt="history" />
                </figure>
                <p>Historial</p>
              </span>
            </section>
          </div>
        </div>
      </section>

      <section className='formatRound'>
        <section className='elementsSystem'>
          <ElementRound state='check' imgSystemGlobal='https://galaico.com.co/wp-content/uploads/2020/04/AP-170FB.png' nameSystemGlobal='Motor' />
          <ElementRound state='check' imgSystemGlobal='https://http2.mlstatic.com/D_NQ_NP_780236-MCO52390227857_112022-O.webp' nameSystemGlobal='Aiere' />
          <ElementRound state='pending' imgSystemGlobal='https://static.vecteezy.com/system/resources/previews/028/078/384/original/industrial-electric-generator-engine-isometric-free-png.png' nameSystemGlobal='Generador' />
          <ElementRound state='check' imgSystemGlobal='https://www.roxell.com/sites/default/files/styles/full_width_preserve_ratio_desktop/public/2022-03/heating-direct-fired-cannon-heater-gas-oil-render-siroc-turbo.png?itok=2sO52FnU' nameSystemGlobal='Calentador' />
          <ElementRound state='offline' imgSystemGlobal='https://www.quincycompressor.com/wp-content/uploads/2020/12/qv-10-aug-2016-1.png' nameSystemGlobal='Bomba' />
          <ElementRound state='check' imgSystemGlobal='https://i1.wp.com/www.macrolaser.com.co/wp-content/uploads/2016/02/MR4040.png?fit=910%2C1036' nameSystemGlobal='CNC' />
          <ElementRound state='check' imgSystemGlobal='https://http2.mlstatic.com/D_NQ_NP_780236-MCO52390227857_112022-O.webp' nameSystemGlobal='Aiere' />
          <ElementRound state='pending' imgSystemGlobal='https://static.vecteezy.com/system/resources/previews/028/078/384/original/industrial-electric-generator-engine-isometric-free-png.png' nameSystemGlobal='Generador' />
          <ElementRound state='check' imgSystemGlobal='https://www.roxell.com/sites/default/files/styles/full_width_preserve_ratio_desktop/public/2022-03/heating-direct-fired-cannon-heater-gas-oil-render-siroc-turbo.png?itok=2sO52FnU' nameSystemGlobal='Calentador' />
          <ElementRound state='offline' imgSystemGlobal='https://www.quincycompressor.com/wp-content/uploads/2020/12/qv-10-aug-2016-1.png' nameSystemGlobal='Bomba' />
        </section>
        {count === 'Generador' && <GeneradorFormat />}
        {count === 'Aiere' && <h2>FORMATO DE AIRE</h2>}
        {count === 'Motor' && <MotorFormat />}
        {count === 'Calentador' && <h2>FORMATO DE Calentador</h2>}
        {count === 'Bomba' && <h2>FORMATO DE Bomba</h2>}
        {count === 'CNC' && <h2>FORMATO DE CNC</h2>}
      </section>
    </main>
  )
}

export default Rounds
