import React, { useContext, useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../store/appContext";
import "../../img/Star-Wars.png";

export const Navbar = () => {
    const { store, actions } = useContext(Context);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleRemoveFavorite = (favorite) => {
        actions.removeFavorite(favorite);
    };

    const handleDocumentClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleDocumentClick);
        return () => {
            document.removeEventListener("mousedown", handleDocumentClick);
        };
    }, []);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="navbar navbar-light bg-light px-5">
            <a className="navbar-brand" href="/"><img className="starwars-icon" src="../../img/Star-Wars.png" alt="Star Wars Logo" /></a>
            <div className="dropdown" ref={dropdownRef}>
                <button 
                    className="btn btn-secondary dropdown-toggle" 
                    type="button" 
                    id="favoritesDropdown" 
                    data-bs-toggle="dropdown" 
                    aria-expanded={dropdownOpen} 
                    onClick={toggleDropdown}
                >
                    Favorites {store.favorites.length}
                </button>
                <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`} aria-labelledby="favoritesDropdown">
                    {store.favorites.length > 0 ? (
                        store.favorites.map((favorite, index) => (
                            <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
                                {favorite.name}
                                <FontAwesomeIcon 
                                    icon={faTrash} 
                                    onClick={() => handleRemoveFavorite(favorite)} 
                                    style={{ cursor: "pointer", color: "#000000" }} 
                                />
                            </li>
                        ))
                    ) : (
                        <li className="dropdown-item">Empty</li>
                    )}
                </ul>
            </div>
        </nav>
    );
};

//take two


// import React, { useContext, useState, useRef, useEffect } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { Context } from "../store/appContext";
// import "../../img/Star-Wars.png";

// export const Navbar = () => {
//     const { store, actions } = useContext(Context);
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const dropdownRef = useRef(null);

//     const handleRemoveFavorite = (favorite) => {
//         actions.removeFavorite(favorite);
//     };

//     const handleDocumentClick = (event) => {
//         if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//             setDropdownOpen(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener("mousedown", handleDocumentClick);
//         return () => {
//             document.removeEventListener("mousedown", handleDocumentClick);
//         };
//     }, []);

//     return (
//         <nav className="navbar navbar-light bg-light px-5">
//             <a className="navbar-brand" href="/"><img className="starwars-icon" src= "../../img/Star-Wars.png" alt="Star Wars Logo" /></a>
//             <div className="dropdown" ref={dropdownRef}>
//                 <button 
//                     className="btn btn-secondary dropdown-toggle" 
//                     type="button" 
//                     id="favoritesDropdown" 
//                     data-bs-toggle="dropdown" 
//                     aria-expanded={dropdownOpen} 
//                     onClick={() => setDropdownOpen(!dropdownOpen)}
//                 >
//                     Favorites {store.favorites.length}
//                 </button>
//                 <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`} aria-labelledby="favoritesDropdown">
//                     {store.favorites.map((favorite, index) => (
//                         <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
//                             {favorite.name}
//                             <FontAwesomeIcon 
//                                 icon={faTrash} 
//                                 onClick={() => handleRemoveFavorite(favorite)} 
//                                 style={{ cursor: "pointer", color: "#000000" }} 
//                             />
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </nav>
//     );
// };






// import React, { useContext } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
// import { Context } from "../store/appContext";
// import "../../img/Star-Wars.png";

// export const Navbar = () => {
//     const { store, actions } = useContext(Context);

//     return (
//         <nav className="navbar navbar-light bg-light px-5">
//             <a className="navbar-brand" href="/"><img className="starwars-icon" src= "../../img/Star-Wars.png"/></a>
//             <div className="dropdown">
//                 <button className="btn btn-secondary dropdown-toggle" type="button" id="favoritesDropdown" data-bs-toggle="dropdown" aria-expanded="false">
//                     Favorites {store.favorites.length}
//                 </button>
//                 <ul className="dropdown-menu" aria-labelledby="favoritesDropdown">
//                     {store.favorites.map((favorite, index) => (
//                         <li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
//                             {favorite.name}
//                             <FontAwesomeIcon icon={faTrash} onClick={() => actions.removeFavorite(favorite)} style={{ cursor: "pointer", color: "#000000" }} />
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </nav>
//     );
// };
