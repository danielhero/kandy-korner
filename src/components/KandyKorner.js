import React from "react";
import { LocationProvider } from "./locations/LocationProvider";
import LocationList from "./locations/LocationList";

export default () => (
  <>
    <h2>Kandy Korner</h2>

    <h2>Locations</h2>
    <LocationProvider>
      <LocationList />
    </LocationProvider>
  </>
);
