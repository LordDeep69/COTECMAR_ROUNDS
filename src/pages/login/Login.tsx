import React from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setUserLogged, type UserRole } from '../../redux/features/userLogged/userLoggedSlice'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { obtenerUsuarios } from '../../../api'
import './login.scss'

interface Usuario {
  id: number
  nombre: string
  correo: string
  tipo_usuario: UserRole
  contrasena: string
  foto_perfil?: string
}

interface FormData {
  email: string
  password: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<FormData>()
  const dispatch = useAppDispatch()

  const handleLogin = async (data: FormData): Promise<void> => {
    try {
      const usuarios: Usuario[] = await obtenerUsuarios()
      const usuarioValido = usuarios.find(
        (usuario) => usuario.correo === data.email && usuario.contrasena === data.password
      )

      if (usuarioValido) {
        await Swal.fire('¡Bienvenido!', `Hola, ${usuarioValido.nombre}!`, 'success')
        dispatch(
          setUserLogged({
            id: usuarioValido.id,
            email: usuarioValido.correo,
            password: data.password,
            role: usuarioValido.tipo_usuario,
            nombre: usuarioValido.nombre,
            foto_perfil: usuarioValido.foto_perfil ?? null
          })
        )
        sessionStorage.setItem('initialRound', 'false') // Inicializar el estado de la ronda
        navigate('/home')
      } else {
        await Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error')
      }
    } catch (error) {
      await Swal.fire('Error', 'No se pudo conectar con el servidor', 'error')
    }
  }

  return (
    <main className="login-container">
      <div className="background-image"></div>

      <section className='form'>
        <section className='form__left'>
          <figure className='logoLogin'>
            <img className='imgLogin' src='https://i.ibb.co/NjFfFCZ/RONDAS-LOGO.png' alt="Logo" />
            <h2>Rondas</h2>
          </figure>
        </section>

        <section className='form__right'>
          <form onSubmit={handleSubmit(handleLogin)}>
            <h2>Bienvenido</h2>

            <label htmlFor="email">Correo Electrónico</label>
            <input type="text" id="email" {...register('email')} />

            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" {...register('password')} />

            <button type="submit">Ingresar</button>
          </form>
        </section>
      </section>
    </main>
  )
}

export default Login
