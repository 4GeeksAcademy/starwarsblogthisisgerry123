import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";

export const Home = () => {
    const { store, actions } = useContext(Context);

    const handleFavorite = (item) => {
        const isFavorite = store.favorites.some(fav => fav.url === item.url);

        if (isFavorite) {
            actions.removeFavorite(item);
        } else {
            actions.addFavorite(item);
        }
    };
    // useEffect(() => {
    //     actions.loadCharacters();
    //     actions.loadPlanets();
    //     actions.loadSpecies();
    // }, [actions]);

    return (
        <div className="container">
            <h2 className="text-danger fw-bold">Characters</h2>
            <div className="scrollDiv d-flex overflow-scroll mb-4">
                {store.characters.map((character, index) => (
                    <Card key={index} item={character} type="characters" onFavoriteClick={handleFavorite} />
                ))}
            </div>

            <h2 className="text-danger fw-bold mt-4">Planets</h2>
            <div className="scrollDiv d-flex overflow-scroll mb-4">
                {store.planets.map((planet, index) => (
                    <Card key={index} item={planet} type="planets" onFavoriteClick={handleFavorite} />
                ))}
            </div>

            <h2 className="text-danger fw-bold mt-4">Species</h2>
            <div className="scrollDiv d-flex overflow-scroll mb-4">
                {store.species.map((species, index) => (
                    <Card key={index} item={species} type="species" onFavoriteClick={handleFavorite} />
                ))}
            </div>
        </div>
    );
};
