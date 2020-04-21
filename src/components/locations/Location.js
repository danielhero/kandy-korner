import React from "react";

export default (props) => (
  <section className="location">
    <h3 className="location__address">{props.location.address}</h3>
    <div className="location__squareFeet">{props.location.squareFeet}</div>
    <div className="location__handicapAccess">
      {props.location.handicapAccess}
    </div>
  </section>
);
