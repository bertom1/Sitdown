import { useState } from "react";
import { StandaloneSearchBox } from "@react-google-maps/api";

/**
 * Sample Componenet for how to use search box
 * logic can be removed and implemented where needed or kept as a reusable component
 * for reusability, useState hook may have to be lifted and included in the parent component that renders the search box
 * this will allow the value returned for onPlacesChanged to be used outside of the component
 */
export const SB = (props) => {
    const refs = {}
    const onSearchBoxMounted= ref => {
        refs.searchBox = ref;
    }
    // const [p, setP] = useState([])
    // const onPlacesChanged = () => {
    //     const places = refs.searchBox.getPlaces()
    //     setP(places);
    //     console.log(places);
       
    // }
    return (
      <div>
        <StandaloneSearchBox
          onLoad={onSearchBoxMounted}
          //onChange={props.handleChange}
          //value={props.location}
          //onPlacesChanged={onPlacesChanged}
        >
          <input
            type="text"
            name="address"
            id="address"
            placeholder="search address"
            class="text-sm form-input border border-slate-300 rounded-md py-2 px-2 bg-white placeholder-gray-400 text-gray-500 appearance-none w-full block pl-10 focus:outline-none"
            required
            value={props.address}
            //value={p}
            onChange={props.handleChange}
          />
        </StandaloneSearchBox>
        
      </div>
    );
}