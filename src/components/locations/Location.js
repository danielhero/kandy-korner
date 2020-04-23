import React from "react";

export default ({ location }) => (
  <section className="location">
    <h3 className="location__address">{location.address}</h3>
    <div className="location__squareFeet">
      {location.squareFeet} Square Feet
    </div>
    <div className="location__handicapAccess">
      Handicap Access: {String(location.handicapAccess)}
    </div>
  </section>
);
