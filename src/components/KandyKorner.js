import React from "react";
import { LocationProvider } from "./locations/LocationProvider";
import LocationList from "./locations/LocationList";
import { ProductProvider } from "./products/ProductProvider";
import ProductList from "./products/ProductList";
import { EmployeeProvider } from "./employees/EmployeeProvider";
import EmployeeList from "./employees/EmployeeList";

export default () => (
  <>
    <h2>Kandy Korner</h2>

    <h2>Locations</h2>
    <EmployeeProvider>
      <LocationProvider>
        <LocationList />
        <EmployeeList />
      </LocationProvider>
    </EmployeeProvider>

    <ProductProvider>
      <ProductList />
    </ProductProvider>
  </>
);
