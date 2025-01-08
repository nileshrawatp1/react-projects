import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { RiUserLocationFill } from 'react-icons/ri';

const API_KEY = '<YOUR_API_KEY>';

const Map = ({ lati, longi }) => {

	const [viewport, setViewport] = useState({
		latitude: lati,
		longitude: longi,
		zoom: 14,
		bearing: 0,
		pitch: 0,
		width: '100%',
		height: '100%',
	});

	useEffect(() => {
		const a = { ...viewport };
		a.latitude = lati;
		a.longitude = longi;
		setViewport(a);
	}, [lati, longi]);

	return (
		<div className="map">
			<ReactMapGL
				mapboxApiAccessToken={API_KEY}
				{...viewport}
				onViewportChange={(viewport) => setViewport(viewport)}
				mapStyle="mapbox://styles/mapbox/streets-v11">
				<Marker latitude={lati} longitude={longi}>
					<div className="mark">
						<RiUserLocationFill size="25px" color="blue" />
					</div>
				</Marker>
			</ReactMapGL>
		</div>
	);
};

export default Map;
