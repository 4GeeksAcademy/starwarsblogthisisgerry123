const getState = ({ getStore, setStore, getActions }) => {
  return {
    store: {
      characters: [],
      planets: [],
      species: [],
      favorites: [],
    },
    actions: {
      loadCharacters: () => {
        fetch("https://swapi.dev/api/people/")
          .then((response) => response.json())
          .then((data) => setStore({ characters: data.results }))
          .catch((error) => console.log(error));
      },
      loadPlanets: () => {
        fetch("https://swapi.dev/api/planets/")
          .then((response) => response.json())
          .then((data) => setStore({ planets: data.results }))
          .catch((error) => console.log(error));
      },
      loadSpecies: () => {
        fetch("https://swapi.dev/api/species/")
          .then((response) => response.json())
          .then((data) => setStore({ species: data.results }))
          .catch((error) => console.log(error));
      },
      addFavorite: (item) => {
        const store = getStore();
        if (!store.favorites.some((fav) => fav.url === item.url)) {
          const itemId = item.url.match(/\/([0-9]+)\/$/)[1];
          const type = item.url.includes("people")
            ? "characters"
            : item.url.includes("planets")
            ? "planets"
            : "species";
          setStore({
            favorites: [...store.favorites, { ...item, type, index: itemId }],
          });
        }
      },
      removeFavorite: (item) => {
        const store = getStore();
        setStore({
          favorites: store.favorites.filter((fav) => fav.url !== item.url),
        });
      },
    },
  };
};

export default getState;
