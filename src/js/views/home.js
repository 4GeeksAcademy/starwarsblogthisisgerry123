import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card from "../component/card";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadCharacters();
        actions.loadPlanets();
        actions.loadSpecies();
    }, [actions]);

    return (
        <div className="container">
            <h2 className="text-danger fw-bold">Characters</h2>
            <div className="d-flex overflow-auto mb-4">
                {store.characters.map((character, index) => (
                    <Card key={index} item={character} type="characters" onFavoriteClick={actions.addFavorite} />
                ))}
            </div>

            <h2 className="text-danger fw-bold mt-4">Planets</h2>
            <div className="d-flex overflow-auto mb-4">
                {store.planets.map((planet, index) => (
                    <Card key={index} item={planet} type="planets" onFavoriteClick={actions.addFavorite} />
                ))}
            </div>

            <h2 className="text-danger fw-bold mt-4">Species</h2>
            <div className="d-flex overflow-auto mb-4">
                {store.species.map((species, index) => (
                    <Card key={index} item={species} type="species" onFavoriteClick={actions.addFavorite} />
                ))}
            </div>
        </div>
    );
};
