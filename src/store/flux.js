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
      
      getFavourites: () => {
        const oldFavs = localStorage.getItem("favourites");
        if (!!oldFavs) {
          setStore({ favourites: JSON.parse(oldFavs) });
        } else {
          setStore({ favourites: [] });
        }
      },

      addFavourites: (favId, favName, favSection) => {
        const fav = {
          id: favId,
          name: favName,
          section: favSection,
          added: true,
        };
        const oldFavs = getStore().favourites;

        var index = oldFavs.findIndex((x) => x.name === fav.name);
        index === -1
          ? oldFavs.push(fav)
          : console.log("this element already exists");

        setStore({ favourites: oldFavs });
        localStorage.setItem(
          "favourites",
          JSON.stringify(getStore().favourites)
        );
      },

      isAdded: (favName) => {
        let added;
        const oldFavs = getStore().favourites;
        var index = oldFavs.findIndex((x) => x.name === favName);
        index === -1 ? (added = false) : (added = true);
        return added;
      },

      deleteFavourite: (favId) => {
        const favs = getStore().favourites;
        favs.splice(favId, 1);
        setStore({ favourites: favs });
        localStorage.setItem(
          "favourites",
          JSON.stringify(getStore().favourites)
        );
      },

      deleteLocalStorage: () => {
        localStorage.setItem("favourites", JSON.stringify([]));
        getActions().getFavourites();
      },
    },
  };
};

export default getState;
