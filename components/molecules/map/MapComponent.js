import React, {useContext, useEffect, useRef, useState} from 'react';
import {GoogleMap} from "react-google-maps";
import {NasaContext} from '../../../pages';

const MapComponent = () => {
    const [center, setCenter] = useState({lat: 45.4421532, lng: -75.697189})
    const {data} = useContext(NasaContext)

    useEffect(() => {
        data.place && setCenter({
            lat: parseFloat(data?.place?.lat),
            lng: parseFloat(data?.place?.lon),
        })
    }, [data])

    return (
        <GoogleMap
            defaultZoom={10}
            center={center}
        />
    )
};

export default MapComponent;
