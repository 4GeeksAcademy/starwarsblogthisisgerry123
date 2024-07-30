const getState = ({ getStore, setStore }) => {
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
			.then((data) => setStore({ characters: data.results }));
		},
		loadPlanets: () => {
		  fetch("https://swapi.dev/api/planets/")
			.then((response) => response.json())
			.then((data) => setStore({ planets: data.results }));
		},
		loadSpecies: () => {
		  fetch("https://swapi.dev/api/species/")
			.then((response) => response.json())
			.then((data) => setStore({ species: data.results }));
		},
		addFavorite: (item) => {
		  const store = getStore();
		  if (!store.favorites.some((fav) => fav.url === item.url)) {
			setStore({ favorites: [...store.favorites, item] });
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
  