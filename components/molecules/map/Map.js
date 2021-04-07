import React from 'react';
import styled from 'styled-components';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from "react-google-maps"
import MapComponent from './MapComponent';

const StyledWrapper = styled.div.attrs({
    className: 'p-2'
})`
  width: 100%;
  height: 75vh;
`

const MapElement = styled.div`
  height: 100%;
`
const MyMapComponent = withScriptjs(withGoogleMap(MapComponent))

const Map = () => {
    return (
        <StyledWrapper>
            <MyMapComponent
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBecoCw8DnIt8S5vA3JZemPYDgvtOxm-5I`}
                loadingElement={<MapElement/>}
                containerElement={<MapElement/>}
                mapElement={<MapElement/>}
            />
        </StyledWrapper>
    )
}

export default Map;
