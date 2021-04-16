const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      people: null,
      planets: null,
      vehicles: null,
      favourites: [],
    },
    actions: {
      getFetch: (field, url) => {
        fetch(url, {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => setStore({ [field]: data }))
          .catch((error) => {
            console.error(error.message);
          });
      },

     setFavourites: (favId, favName, favSection) => {
       const favs = getStore().favourites;
       
       favs.push({"id": favId, "name": favName, "section": favSection});
       setStore({favourites: favs})  
     },
     
     deleteFavourite: (fav) =>{
      const favs = getStore().favourites;       
      const index = favs.indexOf(fav);
      if(index > -1) {
        favs.splice(index, 1);
      }
      setStore({favourites: favs})
     }


    },
  };
};

export default getState;
