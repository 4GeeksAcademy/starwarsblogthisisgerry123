import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "../../styles/card.css";
import TatooineImg from "../../img/Tatooine.jpg";

const Card = ({ item, type, onFavoriteClick }) => {
  const { store } = useContext(Context);
  const itemId = item.url.match(/\/([0-9]+)\/$/)[1];
  const imgUrl =
    item.name === "Tatooine"
      ? TatooineImg
      : `https://starwars-visualguide.com/assets/img/${type}/${itemId}.jpg`;

  const isFavorite = store.favorites.some(
    (favorite) => favorite.index === itemId && favorite.type === type
  );

  return (
    <div className="card m-2" style={{ minWidth: "15rem" }}>
      <img
        src={imgUrl}
        className="card-img-top"
        alt={item.name}
        style={{ objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title fw-bold">{item.name}</h5>
        <p className="card-text">
          {type === "characters"
            ? `Gender: ${item.gender}`
            : type === "planets"
            ? `Population: ${item.population}`
            : `Classification: ${item.classification}`}
        </p>
        <p className="card-text">
          {type === "characters"
            ? `Height: ${item.height}`
            : type === "planets"
            ? `Climate: ${item.climate}`
            : `Average Lifespan: ${item.average_lifespan}`}
        </p>
        <p className="card-text mb-4">
          {type === "characters"
            ? `Birth Year: ${item.birth_year}`
            : type === "planets"
            ? `Gravity: ${item.gravity}`
            : `Language: ${item.language}`}
        </p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <Link
            to={`/details/${type}/${itemId}`}
            className="btn btn-primary mt-0"
          >
            Learn more!
          </Link>
          <FontAwesomeIcon
            icon={faHeart}
            className="cardHeart"
            style={{
              height: "18px",
              color: isFavorite ? "#cf1208" : "#000000",
            }}
            onClick={() => onFavoriteClick(item)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import "../../styles/card.css";

// const Card = ({ item, type, onFavoriteClick }) => {
//     const itemId = item.url.match(/\/([0-9]+)\/$/)[1];

//     return (
//         <div className="card m-2" style={{ minWidth: "15rem" }}>
//             <img
//                 src={`https://starwars-visualguide.com/assets/img/${type}/${itemId}.jpg`}
//                 className="card-img-top"
//                 alt={item.name}
//                 style={{ objectFit: "cover" }}
//             />
//             <div className="card-body">
//                 <h5 className="card-title">{item.name}</h5>
//                 {type === 'people' ? (
//                     <p className="card-text">Gender: {item.gender}</p>
//                 ) : (
//                     <p className="card-text">Population: {item.population}</p>
//                 )}
//                 <div className="d-flex justify-content-between align-items-center">
//                     <Link to={`/details/${type}/${itemId}`} className="btn btn-primary">Learn more!</Link>
//                     <FontAwesomeIcon icon={faHeart} style={{color: "#f50505",}} onClick={() => onFavoriteClick(item)} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import "../../styles/card.css";

// const Card = ({ item, type, onFavoriteClick }) => {
//     const itemId = item.url.match(/\/([0-9]+)\/$/)[1];

//     return (
//         <div className="card m-2" style={{ minWidth: "15rem" }}>
//             <img
//                 src={`https://starwars-visualguide.com/assets/img/${type}/${itemId}.jpg`}
//                 className="card-img-top"
//                 alt={item.name}
//                 style={{ objectFit: "cover" }}
//             />
//             <div className="card-body">
//                 <h5 className="card-title">{item.name}</h5>
//                 {type === 'characters' ? (
//                     <p className="card-text">Gender: {item.gender}</p>
//                 ) : (
//                     <p className="card-text">Population: {item.population}</p>
//                 )}
//                 <div className="d-flex justify-content-between align-items-center">
//                     <Link to={`/details/${type}/${itemId}`} className="btn btn-primary">Learn more!</Link>
//                     <FontAwesomeIcon icon={faHeart} onClick={() => onFavoriteClick(item)} style={{ cursor: "pointer" }} />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Card;
