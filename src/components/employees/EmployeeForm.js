import React, { useContext, useRef, useState } from "react";
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../locations/LocationProvider";
import "./Employee.css";

export default (props) => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations } = useContext(LocationContext);
  const name = useRef();
  const location = useRef();

  const fullTime = useState("false");
  const rate = useRef();

  const constructNewEmployee = () => {
    const locationId = parseInt(location.current.value);
    const [manager, setManager] = useState("false");

      addEmployee({
        name: name.current.value,
        locationId: locationId,
        manager: isManager,
        fullTime: fullTime.current.value,
        rate: rate.current.value,
      }).then(props.toggler);
    };

    return (
      <form className="employeeForm">
        <h2 className="employeeForm__title">New Employee</h2>
        <fieldset>
          <div className="form-group">
            <label htmlFor="employeeName">Employee name: </label>
            <input
              type="text"
              id="employeeName"
              ref={name}
              required
              autoFocus
              className="form-control"
              placeholder="Employee name"
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="location">Assigned to location: </label>
            <select
              defaultValue=""
              name="location"
              ref={location}
              id="employeeLocation"
              className="form-control"
            >
              <option value="0">Select a location</option>
              {locations.map((e) => (
                <option key={e.id} value={e.id}>
                  {e.address}
                </option>
              ))}
            </select>
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="employeeManager">Employee Manager: </label>
            <input
              type="radio"
              id="employeeManagerYes"
              ref={manager}
              value={false}
              checked={manager === "false"}
              onClick={() => setManager("false")}
              required
              autoFocus
              className="form-control"
              placeholder="Employee Manager"
            />
            <input
              type="radio"
              id="employeeManagerNo"
              ref={manager}
              value={true}
              checked={manager === "true"}
              onClick={() => setManager("true")}
              required
              autoFocus
              className="form-control"
              placeholder="Employee Manager"
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="employeeFullTime">Employee Time Status: </label>
            <input
              type="radio"
              id="employeeFullTimeYes"
              ref={fullTime}
              value="yes"
              checked={false}
              required
              autoFocus
              className="form-control"
              placeholder="Employee Full-Time"
            />
            <input
              type="radio"
              id="employeeFullTimeNo"
              ref={fullTime}
              value="no"
              checked={false}
              required
              autoFocus
              className="form-control"
              placeholder="Employee Full-Time"
            />
          </div>
        </fieldset>
        <fieldset>
          <div className="form-group">
            <label htmlFor="employeeRate">Employee Rate: </label>
            <input
              type="number"
              id="employeeRate"
              ref={rate}
              required
              autoFocus
              className="form-control"
              placeholder="Employee Rate"
            />
          </div>
        </fieldset>
        <button
          type="submit"
          onClick={(evt) => {
            evt.preventDefault(); // Prevent browser from submitting the form
            constructNewEmployee();
          }}
          className="btn btn-primary"
        >
          Save Employee
        </button>
      </form>
    );
  };
};
