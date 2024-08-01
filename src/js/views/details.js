
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "../../styles/details.css";

const Details = () => {
    const { type, id } = useParams();
    const [details, setDetails] = useState(null);

    useEffect(() => {
        fetch(`https://www.swapi.tech/api/${type}/${id}`)
            .then(res => res.json())
            .then(data => setDetails(data.result.properties))
            .catch(err => console.error(err));
    }, [type, id]);

    return (
        <div className="container">
            {details ? (
                <>
                    <div className="row my-4">
                        <div className="col-md-4">
                            <img
                                src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
                                className="img-fluid"
                                alt={details.name}
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className="col-md-8">
                            <h1 className="display-4">{details.name}</h1>
                            <p className="lead">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi.
                            </p>
                        </div>
                    </div>
                    <div className="row details-info">
                        <div className="col-md-2">
                            <h6>Name</h6>
                            <p>{details.name}</p>
                        </div>
                        <div className="col-md-2">
                            <h6>Birth Year</h6>
                            <p>{details.birth_year}</p>
                        </div>
                        <div className="col-md-2">
                            <h6>Gender</h6>
                            <p>{details.gender}</p>
                        </div>
                        <div className="col-md-2">
                            <h6>Height</h6>
                            <p>{details.height}</p>
                        </div>
                        <div className="col-md-2">
                            <h6>Skin Color</h6>
                            <p>{details.skin_color}</p>
                        </div>
                        <div className="col-md-2">
                            <h6>Eye Color</h6>
                            <p>{details.eye_color}</p>
                        </div>
                    </div>
                    
                </>
            ) : (
                <p>Loading...</p>
            )}
            <Link to="/" className="btn btn-primary my-4">Back home</Link>
        </div>
    );
};

export default Details;



//ATTEMPT TWO//

// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";

// const Details = () => {
//     const { type, id } = useParams();
//     const [details, setDetails] = useState(null);

//     useEffect(() => {
//         fetch(`https://www.swapi.tech/api/${type}/${id}`)
//             .then(res => res.json())
//             .then(data => setDetails(data.result.properties))
//             .catch(err => console.error(err));
//     }, [type, id]);

//     return (
//         <div className="container">
//             {details ? (
//                 <>
//                     <h1 className="display-4">{details.name}</h1>
//                     <div className="card" style={{ width: "800px", margin: "15px" }}>
//                         <img
//                             src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
//                             className="card-img-top"
//                             alt={details.name}
//                             style={{ height: "600px", width: "800px", objectFit: "cover" }}
//                         />
//                         <div className="card-body">
//                             {type === 'people' ? (
//                                 <>
//                                     <p>Gender: {details.gender}</p>
//                                     <p>Height: {details.height}</p>
//                                     <p>Skin Color: {details.skin_color}</p>
//                                     <p>Eye Color: {details.eye_color}</p>
//                                     <p>Birth Year: {details.birth_year}</p>
//                                 </>
//                             ) : type === 'planets' ? (
//                                 <>
//                                     <p>Population: {details.population}</p>
//                                     <p>Climate: {details.climate}</p>
//                                     <p>Terrain: {details.terrain}</p>
//                                     <p>Diameter: {details.diameter}</p>
//                                     <p>Rotation Period: {details.rotation_period}</p>
//                                 </>
//                             ) : type === 'species' ? (
//                                 <>
//                                     <p>Classification: {details.classification}</p>
//                                     <p>Designation: {details.designation}</p>
//                                     <p>Average Height: {details.average_height}</p>
//                                     <p>Skin Colors: {details.skin_colors}</p>
//                                     <p>Language: {details.language}</p>
//                                 </>
//                             ) : null}
//                         </div>
//                     </div>
//                 </>
//             ) : (
//                 <p>Loading...</p>
//             )}
//             <Link to="/">
//                 <span className="btn btn-primary btn-lg" role="button">
//                     Back home
//                 </span>
//             </Link>
//         </div>
//     );
// };

// export default Details;





// ATTEMPT ONE//

// import React, { useState, useEffect, useContext } from "react";
// import { useParams, Link } from "react-router-dom";
// import '../../styles/details.css'

// export const Details = () => {
//     const { type, id } = useParams();
//     const [details, setDetails] = useState(null);

//     useEffect(() => {
//         fetch(`https://swapi.dev/api/${type}/${id}/`)
//             .then(res => res.json())
//             .then(data => setDetails(data));
//     }, [type, id]);

//     return (
//         <div className="container">
//             {details ? (
//                 <>
//                     <h1 className="display-4">{details.name}</h1>
//                     <div className="card" style={{ width: "800px", margin: "15px" }}>
//                         <img
//                             src={`https://starwars-visualguide.com/assets/img/${type}/${id}.jpg`}
//                             className="card-img-top"
//                             alt={details.name}
//                             style={{ height: "600px", width: "800px", objectFit: "cover" }}
//                         />
//                         <div className="card-body">
//                             {type === 'characters' ? (
//                                 <>
//                                     <p>Gender: {details.gender}</p>
//                                     <p>Height: {details.height}</p>
//                                     <p>Skin Color: {details.skin_color}</p>
//                                     <p>Eye Color: {details.eye_color}</p>
//                                 </>
//                             ) : type === 'planets' ? (
//                                 <>
//                                     <p>Population: {details.population}</p>
//                                     <p>Climate: {details.climate}</p>
//                                     <p>Terrain: {details.terrain}</p>
//                                 </>
//                             ) : (
//                                 <>
//                                     <p>Classification: {details.classification}</p>
//                                     <p>Designation: {details.designation}</p>
//                                     <p>Average Height: {details.average_height}</p>
//                                 </>
//                             )}
//                         </div>
//                     </div>
//                 </>
//             ) : (
//                 <p>Loading...</p>
//             )}
//             <Link to="/">
//                 <span className="btn btn-primary btn-lg" role="button">
//                     Back home
//                 </span>
//             </Link>
//         </div>
//     );
// };
