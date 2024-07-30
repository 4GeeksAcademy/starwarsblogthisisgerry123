import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";

export const Details = () => {
    const { type, id } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://swapi.dev/api/${type}/${id}/`)
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [type, id]);

    return (
        <div className="container">
            {details ? (
                <>
                    <h1 className="display-4">{details.name}</h1>
                    <div className="card" style={{ width: "800px", margin: "15px" }}>
                        <img
                            src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
                            className="card-img-top"
                            alt={details.name}
                            style={{ height: "600px", width: "800px", objectFit: "cover" }}
                        />
                        <div className="card-body">
                            {type === 'characters' ? (
                                <>
                                    <p>Gender: {details.gender}</p>
                                    <p>Height: {details.height}</p>
                                    <p>Skin Color: {details.skin_color}</p>
                                    <p>Eye Color: {details.eye_color}</p>
                                </>
                            ) : type === 'planets' ? (
                                <>
                                    <p>Population: {details.population}</p>
                                    <p>Climate: {details.climate}</p>
                                    <p>Terrain: {details.terrain}</p>
                                </>
                            ) : (
                                <>
                                    <p>Classification: {details.classification}</p>
                                    <p>Designation: {details.designation}</p>
                                    <p>Average Height: {details.average_height}</p>
                                </>
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <p>Loading...</p>
            )}
            <Link to="/">
                <span className="btn btn-primary btn-lg" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};
