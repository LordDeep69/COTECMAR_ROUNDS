// Tipo de dato para la tabla Sistemas
interface Sistema {
  id?: number // El signo de interrogación indica que el campo es opcional, útil para el campo autoincremental
  id_usuario: number
  nombre_sistema: string
  imagen_sistema: string
  id_sistema: string
}
// Tipo de dato para la tabla Modelos
interface Modelo {
  id?: number
  nombre: string
  imagen?: string // El campo imagen puede ser opcional, ya que se define como NOT NULL en la base de datos, pero no se proporciona en la creación de la tabla
}
// Tipo de dato para la tabla Equipos
interface Equipo {
  id?: number
  id_sistema: number
  nombre_equipo: string
  imagen_equipo: string
  id_equipo: string
  id_modelo: number
}
// Tipo de dato para la tabla Rondas
interface Ronda {
  id: string
  id_sistema: number
  fecha: string // Se asume que la fecha se maneja como una cadena de texto en formato ISO
  // Otros campos relevantes para las rondas pueden agregarse aquí
}
// Tipo de dato para la tabla Usuarios
export interface Usuario {
  id?: number
  nombre: string
  correo: string
  tipo_usuario: string // Enumera los posibles valores para tipo_usuario
  contrasena: string
  foto_perfil?: string // El campo foto_perfil puede ser opcional, ya que no se define como NOT NULL en la creación de la tabla
}

// Función para obtener todos los usuarios
export const obtenerUsuarios = async (): Promise<Usuario[]> => {
  try {
    const response = await fetch('http://localhost:3002/api/users')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error al obtener usuarios:', error)
    throw new Error('Error al obtener usuarios')
  }
}

// Función para crear un nuevo usuario
export const crearUsuario = async (nuevoUsuario: Usuario): Promise<void> => {
  try {
    const response = await fetch('http://localhost:3002/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoUsuario)
    })

    if (!response.ok) {
      throw new Error('Error al crear el usuario')
    }
  } catch (error) {
    console.error('Error al crear un nuevo usuario:', error)
    throw new Error('Error al crear un nuevo usuario')
  }
}

// Función para actualizar un usuario existente
export const actualizarUsuario = async (userId: number, datosActualizados: Partial<Usuario>): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:3002/api/users/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosActualizados)
    })

    if (!response.ok) {
      throw new Error('Error al actualizar el usuario')
    }
  } catch (error) {
    console.error('Error al actualizar el usuario:', error)
    throw new Error('Error al actualizar el usuario')
  }
}

// Función para eliminar un usuario existente
export const eliminarUsuario = async (userId: number): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:3002/api/users/${userId}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error('Error al eliminar el usuario')
    }
  } catch (error) {
    console.error('Error al eliminar el usuario:', error)
    throw new Error('Error al eliminar el usuario')
  }
}

// Función para obtener todos los modelos
export const obtenerModelos = async (): Promise<Modelo[]> => {
  try {
    const response = await fetch('http://localhost:3002/api/modelos')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error al obtener modelos:', error)
    throw new Error('Error al obtener modelos')
  }
}

// Función para crear un nuevo modelo
export const crearModelo = async (nuevoModelo: Modelo): Promise<void> => {
  try {
    const response = await fetch('http://localhost:3002/api/modelos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoModelo)
    })

    if (!response.ok) {
      throw new Error('Error al crear el modelo')
    }
  } catch (error) {
    console.error('Error al crear un nuevo modelo:', error)
    throw new Error('Error al crear un nuevo modelo')
  }
}

// Función para actualizar un modelo existente
export const actualizarModelo = async (modeloId: number, datosActualizados: Partial<Modelo>): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:3002/api/modelos/${modeloId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosActualizados)
    })

    if (!response.ok) {
      throw new Error('Error al actualizar el modelo')
    }
  } catch (error) {
    console.error('Error al actualizar el modelo:', error)
    throw new Error('Error al actualizar el modelo')
  }
}

// Función para eliminar un modelo existente
export const eliminarModelo = async (modeloId: number): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:3002/api/modelos/${modeloId}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error('Error al eliminar el modelo')
    }
  } catch (error) {
    console.error('Error al eliminar el modelo:', error)
    throw new Error('Error al eliminar el modelo')
  }
}

// Función para obtener todos los equipos
export const obtenerEquipos = async (): Promise<Equipo[]> => {
  try {
    const response = await fetch('http://localhost:3002/api/equipos')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error al obtener equipos:', error)
    throw new Error('Error al obtener equipos')
  }
}

// Función para crear un nuevo equipo
export const crearEquipo = async (nuevoEquipo: Equipo): Promise<void> => {
  try {
    const response = await fetch('http://localhost:3002/api/equipos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoEquipo)
    })

    if (!response.ok) {
      throw new Error('Error al crear el equipo')
    }
  } catch (error) {
    console.error('Error al crear un nuevo equipo:', error)
    throw new Error('Error al crear un nuevo equipo')
  }
}

// Función para actualizar un equipo existente
export const actualizarEquipo = async (equipoId: number, datosActualizados: Partial<Equipo>): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:3002/api/equipos/${equipoId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosActualizados)
    })

    if (!response.ok) {
      throw new Error('Error al actualizar el equipo')
    }
  } catch (error) {
    console.error('Error al actualizar el equipo:', error)
    throw new Error('Error al actualizar el equipo')
  }
}

// Función para eliminar un equipo existente
export const eliminarEquipo = async (equipoId: number): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:3002/api/equipos/${equipoId}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error('Error al eliminar el equipo')
    }
  } catch (error) {
    console.error('Error al eliminar el equipo:', error)
    throw new Error('Error al eliminar el equipo')
  }
}

// Función para obtener todos los sistemas
export const obtenerSistemas = async (): Promise<Sistema[]> => {
  try {
    const response = await fetch('http://localhost:3002/api/sistemas')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error al obtener sistemas:', error)
    throw new Error('Error al obtener sistemas')
  }
}

// Función para crear un nuevo sistema
export const crearSistema = async (nuevoSistema: Sistema): Promise<void> => {
  try {
    const response = await fetch('http://localhost:3002/api/sistemas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoSistema)
    })

    if (!response.ok) {
      throw new Error('Error al crear el sistema')
    }
  } catch (error) {
    console.error('Error al crear un nuevo sistema:', error)
    throw new Error('Error al crear un nuevo sistema')
  }
}

// Función para actualizar un sistema existente
export const actualizarSistema = async (sistemaId: number, datosActualizados: Partial<Sistema>): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:3002/api/sistemas/${sistemaId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosActualizados)
    })

    if (!response.ok) {
      throw new Error('Error al actualizar el sistema')
    }
  } catch (error) {
    console.error('Error al actualizar el sistema:', error)
    throw new Error('Error al actualizar el sistema')
  }
}

// Función para eliminar un sistema existente
export const eliminarSistema = async (sistemaId: number): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:3002/api/sistemas/${sistemaId}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error('Error al eliminar el sistema')
    }
  } catch (error) {
    console.error('Error al eliminar el sistema:', error)
    throw new Error('Error al eliminar el sistema')
  }
}

// Función para obtener todas las rondas
export const obtenerRondas = async (): Promise<Ronda[]> => {
  try {
    const response = await fetch('http://localhost:3002/api/rondas')
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error al obtener rondas:', error)
    throw new Error('Error al obtener rondas')
  }
}

// Función para crear una nueva ronda
export const crearRonda = async (nuevaRonda: Ronda): Promise<void> => {
  try {
    const response = await fetch('http://localhost:3002/api/rondas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevaRonda)
    })

    if (!response.ok) {
      throw new Error('Error al crear la ronda')
    }
  } catch (error) {
    console.error('Error al crear una nueva ronda:', error)
    throw new Error('Error al crear una nueva ronda')
  }
}

// Función para actualizar una ronda existente
export const actualizarRonda = async (rondaId: string, datosActualizados: Partial<Ronda>): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:3002/api/rondas/${rondaId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datosActualizados)
    })

    if (!response.ok) {
      throw new Error('Error al actualizar la ronda')
    }
  } catch (error) {
    console.error('Error al actualizar la ronda:', error)
    throw new Error('Error al actualizar la ronda')
  }
}

// Función para eliminar una ronda existente
export const eliminarRonda = async (rondaId: string): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:3002/api/rondas/${rondaId}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error('Error al eliminar la ronda')
    }
  } catch (error) {
    console.error('Error al eliminar la ronda:', error)
    throw new Error('Error al eliminar la ronda')
  }
}

// Tipo de dato para la tabla Motor_09
export interface Motor09 {
  id?: number
  id_sistema: number
  id_equipo: number
  id_ronda: string
  fecha: string
  temp_admision: number
  temp_refrigerante: number
  presion_barometrica: number
  altitud: number
  temp_agua_bruta: number
  rpm_nominal: number
  margen_vel_helice: number
  margen_vel_disposicion: number
  vel_media_piston: number
  potencia_iso_3046: number
  presion_media_efectiva: number
  mapa_prestaciones: string
  mapa_desempeno: string
  depresion_admision_filtro_nuevo: number
  depresion_admision_max: number
  contrapresion_escape: number
  contrapresion_escape_max: number
  contrapresion_escape_estatica: number
  temp_combustible_conexion: number
  temp_combustible_conexion_max: number
  temp_combustible_intercambiador: number
  consumo_especifico_combustible_fsp: number
  consumo_especifico_combustible: number
  consumo_especifico_combustible_optimo: number
  consumo_especifico_combustible_cruise: number
  consumo_combustible_ralenti: number
  consumo_aceite_100h: number
  presion_sobrealimentacion_abs: number
  caudal_volumetrico_aire_combustion: number
  caudal_volumetrico_escape: number
  temp_escape_turbocompresor: number
  temp_escape_turbocompresor_max: number
  temp_escape_motor: number
  temp_escape_motor_max: number
  calor_refrigerante_calor_aceite: number
  disipacion_calor_refrigerante_aceite_calefaccion: number
  calor_refrigerante_calor_aceite_sin_calefaccion: number
  calor_refrigerante_sin_calefaccion: number
  calor_aceite: number
  disipacion_calor_aire_aceite: number
  calor_remanente_combustible_retorno: number
  calor_radiacion_conveccion_motor: number
  calor_radiacion_conveccion_motor_temperatura: number
  dif_temp_refrigerante: number
  temp_funcionamiento_refrigerante_desde: number
  temp_funcionamiento_refrigerante_hasta: number
  temp_refrigerante_despues_motor_limite1: number
  temp_refrigerante_despues_motor_limite2: number
  temp_refrigerante_despues_equipo_enfriamiento: number
  temp_refrigerante_despues_equipo_enfriamiento_max: number
  contenido_anticongelante_max: number
  bomba_refrigerante_caudal: number
  bomba_refrigerante_caudal_5p: number
  equipo_refrigeracion_caudal: number
  bomba_refrigerante_dif_presion: number
  bomba_refrigerante_dif_presion_min: number
  bomba_refrigerante_dif_presion_max: number
  bomba_refrigerante_dif_presion_con_equipo: number
  bomba_refrigerante_dif_presion_sin_equipo: number
}

// Función para crear un nuevo registro en la tabla Motor_09
export const crearRegistroMotor09 = async (nuevoRegistro: Motor09): Promise<void> => {
  try {
    const response = await fetch('http://localhost:3002/api/motor_09', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoRegistro)
    })

    if (!response.ok) {
      throw new Error('Error al crear un nuevo registro en Motor_09')
    }
  } catch (error) {
    console.error('Error al crear un nuevo registro en Motor_09:', error)
    throw new Error('Error al crear un nuevo registro en Motor_09')
  }
}

// Obtener todos los registros de la tabla Motor_09
export const obtenerRegistrosMotor09 = async (): Promise<Motor09[]> => {
  try {
    const response = await fetch('http://localhost:3002/api/motor_09')
    if (!response.ok) {
      throw new Error('Error al obtener registros de Motor_09')
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error al obtener registros de Motor_09:', error)
    throw new Error('Error al obtener registros de Motor_09')
  }
}

// Actualizar un registro existente en la tabla Motor_09
// Función para actualizar un registro existente en la tabla Motor_09
export const actualizarRegistroMotor09 = async (id: number, motorData: Partial<Motor09>): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:3002/api/motor_09/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(motorData)
    })

    if (!response.ok) {
      throw new Error('Error al actualizar el registro en Motor_09')
    }
  } catch (error) {
    console.error('Error al actualizar el registro en Motor_09:', error)
    throw new Error('Error al actualizar el registro en Motor_09')
  }
}

// Eliminar un registro de la tabla Motor_09 por su ID
export const eliminarRegistroMotor09 = async (id: number): Promise<void> => {
  try {
    const response = await fetch(`http://localhost:3002/api/motor_09/${id}`, {
      method: 'DELETE'
    })

    if (!response.ok) {
      throw new Error('Error al eliminar el registro en Motor_09')
    }
  } catch (error) {
    console.error('Error al eliminar el registro en Motor_09:', error)
    throw new Error('Error al eliminar el registro en Motor_09')
  }
}
