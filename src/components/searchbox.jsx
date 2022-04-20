import { useState } from "react";
import { StandaloneSearchBox } from "@react-google-maps/api";

/**
 * Sample Componenet for how to use search box
 * logic can be removed and implemented where needed or kept as a reusable component
 * for reusability, useState hook may have to be lifted and included in the parent component that renders the search box
 * this will allow the value returned for onPlacesChanged to be used outside of the component
 */
export const SB = () => {
    const refs = {}
    const onSearchBoxMounted= ref => {
        refs.searchBox = ref;
    }
    const [p, setP] = useState([])
    const onPlacesChanged = () => {
        const places = refs.searchBox.getPlaces()
        setP(places);
    }
    return <div>
            <StandaloneSearchBox 
            onLoad={onSearchBoxMounted}
            onPlacesChanged={onPlacesChanged}
            >
                <input type='text' />
            </StandaloneSearchBox>
    {/* list selected result from search options */}
    <ol>
    {p.map(({ place_id, formatted_address, geometry: { location } }) =>
      <li key={place_id}>
        {formatted_address}
        {" at "}
        ({location.lat()}, {location.lng()})
      </li>
    )}
  </ol>
  </div>
}