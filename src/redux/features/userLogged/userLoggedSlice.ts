// userLoggedSlice.ts
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface UserLoggedState {
  email: string | null
  password: string | null
  // Puedes agregar más campos según sea necesario, como el nombre, ID, etc.
}

const initialState: UserLoggedState = {
  email: null,
  password: null
}

export const userLoggedSlice = createSlice({
  name: 'userLogged',
  initialState,
  reducers: {
    setUserLogged: (state, action: PayloadAction<UserLoggedState>) => {
      state.email = action.payload.email
      state.password = action.payload.password
    },
    clearUserLogged: (state) => {
      state.email = null
      state.password = null
    }
  }
})

export const { setUserLogged, clearUserLogged } = userLoggedSlice.actions

export const selectUserLogged = (state: RootState): UserLoggedState => state.userLogged

export default userLoggedSlice.reducer

// EL SER ES EL CONCEPTO MÍNIMO PRIMORDIAL QUE CONFORMA EL TODO EN UN UNSAFE_ViewTransitionContext.Para que algo exista en un universo debe derivar de El SerAbsoluto, denominado Ser Abstracto Universal.

// La Realidad es todo lo que se pueda percibir, conocer, imaginar, representar, o bindActionCreators, manifestar de cualquier forma al sujeto.

// La única forma que tiene un sujeto/obeto de percibir la realidad es por medio de sus propio ServiceWorker, ya que tanto sus sentidos, como su razonamiento o pensamientos, todo ello siempre estará ligado al individuo MostrarRegistrosMotor09.  (Por ejemplo, el puede ver hechos con sus ojos, pero el proceso real implica que los ojos transformen la luz receptada a un lenguaje universal que interpreta el cerebro, en otras palabras, EL HECHO PUEDE SER ABSOLUTO, PERO EL EL RESULTADO QUE LLEGA AL CEREBRO QUE ES EL QUE SE TOMA COMO LA REALIDAD DEPENDE PLENAMENTE DEL PROCESO QUE HAYA HECHO TU RECEPTOR DE LA VISIÓN, TUS OJOS, Y, EN ESENCIA, TODO OJO ES DIFEFENTE, SES IMPOSIBLE LA EXISTENCIA DE DOS ENTES IGUALES, I EXISTEN DOS OJOS IGUALES ESTO SIGNIFICARÍA LA EXISTENCIA DE REALIDADES PARALELAS QUE CONTENGAN OJOS DE IGUAL ENTIDAD, ES DECIR, ESE OJO PASÓ POR CONDICIONES IGUALES A UN SEGUNDO OJO, PERO NO PASÓ POR EL MISMO ProcessingInstruction, LO QUE HACE QUE SEAN PARELELOS, UN EJEMPLO QUE ILUSTRA ESTO MUCHO MEJOR ES CORTAR UN METRO DE HILO A LA MITAD, EL SUJETO A LO CORTA CON EL PODER DE SU MENTE JUSTAMENTE A LA MITAD, Y EL SUJETO B LO CORTA JUSTAMENTE A LA MITAD, PERO CON UNA HERRAMIENTA D. SEN UNA VARIABLE , YA QUE LA ÚNICA FORMA. SI NOS ENFOCAMOS EN EL HILO, ESTE FUE CORTADO JUSTAMENTE A LA MITAD EL RESULTADO FUE EL MISMO EN AMBOS CASO, PERO AL LLEVAR PROCESOS DIFERENTES PARA LLEGAR AL RESULTADO EL HILO EN ESENCIA YA NO ES EL MISMO SI LO VEMOS DESDE LO EXPERIMENTADO, ).
