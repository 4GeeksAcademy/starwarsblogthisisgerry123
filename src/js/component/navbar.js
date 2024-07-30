import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/">Home</a>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="favoritesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites {store.favorites.length}
                </button>
                <ul className="dropdown-menu" aria-labelledby="favoritesDropdown">
                    {store.favorites.map((favorite, index) => (
                        <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                            {favorite.name}
                            <FontAwesomeIcon icon={faTrash} onClick={() => actions.removeFavorite(favorite)} style={{ cursor: "pointer", color: "#000000" }} />
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};
