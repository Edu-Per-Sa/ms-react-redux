Esta aplicacion se basa en explorar las propiedades que nos da React, Redux, React-Redux y Redux-Tollkit para gestionar los estados de manera global en nuestra aplicacion cuando se tienen que manejar en diferentes componentes y evitar el enviar los valores a traves de propiedades por los componentes.

  CREA UN STORE (UNICO)

      const nameStore = configureStore({reducer: {nameReducer1: importReducer1, nameReducer2: importReducer2}});
          ---> Nos permite configurar el store y utilizar varios reducer.
          
      export default nameStore;
          ---> Nos permite acceder al store para proveerlo a los componentes que necesitemos.

  PROVEER EL STORE
      
      El store se puede proveer por componentes separados, sabiendo que componentes y subcomponentes pueden acceder a este store por medio de useDispacth(), useSelector().
      
      Por tal motivo por lo general se provee en el componente principal de la applicacion utilizando import { Provider } from 'react-redux'; y tambien importando el nameStore creado.
        
        ---> root.render(<Provider store={store}> <App /> </Provider>);
  
  CREA SLICES (Pueden ser varios para despues integrarlos en el STORE)
      
      const nameSlice = creteSlice(name, initialState, reducers)
          
          ---> Nos permite crear un manejador de estado independiente que despues será integrado en el store final y mantiene la aplicacion mas manejable y mejor organizada.
                
                name: Nombre simbolico del slice.
                initialState: Contiene la forma y valores iniciales del estado que queremos manejar.
                reducers: Son las funciones o caracteristicas que van a modificar el estado de la aplicacion. 
                    Ej. login(actualState) { codigo de modificacion del estado}
                        NOTA: Se puede modificar solo un componente por separado ya que redux-toolkit gestiona que no se pierdan los demas valores del estado realizando una copia previa y modificando solo la porcion que ejecutemos.
      
      export const nameActions = nameSlice.actions;
          ---> Nos permite acceder a los reducers desde los componentes donde importemos el slice.
      
      export default nameSlice.reducer;
          ---> Nos permite acceder a los reducers creados por redux-toolkit dentro del store para ser utilizados.
          
  UTILIZACION
    
    const dispatch = useDispatch() 
          ---> Para generar una funcion que nos causa la ejecucion de la funcion reducer, que en este caso es la creada por redux-toolkit y gestiona los cambios necesarios en los estados y modifica los componentes correspondientes y que se vean afectados. Esto se utiliza en conjunto con la importacion de las acciones de un slice.
                USO: dispatch(nameActions.sliceReducer())
    
    const valueState = useSelector(actualState => actualState.nameReducer1.valueState)
          ---> Nos permite acceder al estado actual del elemento requerido en cada componente, seleccionando solo ese elemento especifico, permitiendo que se ejecute y reevalue este componente cada vez que el estado de ese elemento cambie.
   
