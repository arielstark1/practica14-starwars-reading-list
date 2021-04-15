const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      name: "Sarai",
      lastname: "Santiago",
      age: 0,
      fullname: null
    },
    actions: {
      hola: () => {
        console.log("Hola desde Flux");
      },
      saludo: ({ name, lastname }) => {
        alert(name + " " + lastname);
      },
      actualizar: (age) => {
        setStore({
          age,
        });
      },
      suma: (a, b) => {
        return a + b;
      },
      resta: (a, b) => {
        return a - b;
      },
      calculo: (operation, a, b) => {
        // const {suma, resta} = getActions()
        // switch (operation) {
        //     case "suma":
        //         console.log(suma(a, b))
        //         break;
        //         case "resta":
        //         console.log(resta(a, b))
        //         break;
        //     default:
        //         console.log("Operacion no permitida..")
        //         break;
        // }
        switch (operation) {
          case "suma":
            console.log(getActions().suma(a, b));
            break;
          case "resta":
            console.log(getActions().resta(a, b));
            break;
          default:
            console.log("Operacion no permitida..");
            break;
        }
      },
      setFullmane: () =>{
        //   const {name, lastname} = getStore();
        //   setStore({
        //       fullname: `${name} ${lastname}`
        //   })

        //   const store = getStore();
        //   setStore({
        //       fullname: `${store.name} ${store.lastname}`
        //   })

   
        setStore({
            fullname: `${getStore().name} ${getStore().lastname}`
        })
      }
    },
  };
};

export default getState;
