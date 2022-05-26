import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api'

const Map = ({ loc }) => {
    console.log("rerender")
    return <GoogleMap
        mapContainerStyle={{
            height: "125px",
            width: "275px"
        }}
        center={loc}
        zoom={15}
    >
        <Marker position={loc} />
    </GoogleMap>
}

export default React.memo(Map)