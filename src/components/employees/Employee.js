import React from "react";

export default ({ employee, location }) => (
  <section className="employee">
    <h4 className="employee__name">{employee.name}</h4>
    <h5 className="employee__location">{location.address}</h5>
    <div className="employee__manager">
      Manager: {String(employee.manager)}{" "}
    </div>
    <div className="employee__timeStatus">
      Full-time Employee: {String(employee.fullTime)}{" "}
    </div>
    <div className="employee__rate">${employee.rate}/hour </div>
  </section>
);
