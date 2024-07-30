import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [details, setDetails] = useState(null);

	useEffect(() => {
		fetch(`https://swapi.dev/api/${params.type}/${params.id}/`)
			.then(res => res.json())
			.then(data => setDetails(data));
	}, [params.type, params.id]);

	return (
		<div className="jumbotron">
			{details ? (
				<>
					<h1 className="display-4">{details.name}</h1>
					<p>{params.type === "character" ? `Gender: ${details.gender}` : `Climate: ${details.climate}`}</p>
					<hr className="my-4" />
				</>
			) : (
				<p>Loading...</p>
			)}
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
