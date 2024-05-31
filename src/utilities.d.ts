export interface Dimentions {
  width: number
  height: number
}

export const logo = 'https://i.ibb.co/NjFfFCZ/RONDAS-LOGO.png'

// Tipo de dato para la tabla Sistemas
export interface Sistema {
  id?: number // El signo de interrogación indica que el campo es opcional, útil para el campo autoincremental
  id_usuario: number
  nombre_sistema: string
  imagen_sistema: string
  id_sistema: string
}
// Tipo de dato para la tabla Modelos
export interface Modelo {
  id?: number
  nombre: string
  imagen?: string // El campo imagen puede ser opcional, ya que se define como NOT NULL en la base de datos, pero no se proporciona en la creación de la tabla
}
// Tipo de dato para la tabla Equipos
export interface Equipo {
  id?: number
  id_sistema: number
  nombre_equipo: string
  imagen_equipo: string
  id_equipo: string
  id_modelo: number
}
// Tipo de dato para la tabla Rondas
export interface Ronda {
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
