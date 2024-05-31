import React from 'react'
import { useForm } from 'react-hook-form'
import { useAppDispatch } from '../../hooks/reduxHooks'
import { setUserLogged } from '../../redux/features/userLogged/userLoggedSlice'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { obtenerUsuarios } from '../../../api' // Asegúrate de que la ruta sea correcta
import './login.scss'

interface Usuario {
  id?: number
  nombre: string
  correo: string
  tipo_usuario: string // Enumera los posibles valores para tipo_usuario
  contrasena: string
  foto_perfil?: string // El campo foto_perfil puede ser opcional, ya que no se define como NOT NULL en la creación de la tabla
}

interface FormData {
  email: string
  password: string
}

const Login: React.FC = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<FormData>()
  const dispatch = useAppDispatch()

  // Función para manejar el inicio de sesión
  const handleLogin = async (data: FormData): Promise<void> => {
    try {
      // Obtener todos los usuarios de la base de datos
      const usuarios = await obtenerUsuarios()
      // Buscar si existe un usuario con el correo y contraseña proporcionados
      const usuarioValido = usuarios.find((usuario: Usuario) => usuario.correo === data.email && usuario.contrasena === data.password)

      if (usuarioValido !== undefined) {
        // Usuario válido, muestra un mensaje de bienvenida
        await Swal.fire('¡Bienvenido!', `Hola, ${usuarioValido.nombre}!`, 'success')
        // Despacha la acción setUserLogged con los datos del usuario
        dispatch(setUserLogged({ email: usuarioValido.correo, password: data.password }))
        navigate('/home')
      } else {
        // Credenciales inválidas, muestra un mensaje de error
        await Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error')
      }
    } catch (error) {
      // Manejo de errores, por ejemplo, si la API no está disponible
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

            {/* Campo de correo electrónico */}
            <label htmlFor="email">Correo Electrónico</label>
            <input type="text" id="email" {...register('email')} />

            {/* Campo de contraseña */}
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" {...register('password')} />

            {/* Botón de ingresar */}
            <button type="submit">Ingresar</button>
          </form>
        </section>
      </section>
    </main>
  )
}

export default Login
