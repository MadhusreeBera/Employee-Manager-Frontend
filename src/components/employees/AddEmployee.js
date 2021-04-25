import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    age: "",
    country: "",
    designation: "",
    salary: "",
  });
  const [employeeList, setEmployeeList] = useState([]);
  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setEmployee((employee) => {
      return { ...employee, [key]: value };
    });
  };
  const addEmployee = (event) => {
    event.preventDefault();
    if (employee.name === "") alert("Please enter employee name");
    else if (employee.age < 18 || employee.age > 60)
      alert("Please enter correct age");
    else if (employee.country === "") alert("Please enter employee country");
    else if (employee.designation === "")
      alert("Please enter employee designation");
    else if (employee.salary < 1) alert("Please enter correct salary");
    else {
      setEmployee({
        name: "",
        age: "",
        country: "",
        designation: "",
        salary: "",
      });
      axios
        .post("https://simpleemployeemanager.herokuapp.com/create", employee)
        .then((result) => {
          alert("Employee added");
          setEmployeeList([...employeeList, employee]);
        });

      // console.log(employeeList);
    }
  };
  return (
    <div className="home">
      <form className="info">
        <label htmlFor="name">
          Name{" "}
          <input
            type="text"
            id="name"
            name="name"
            value={employee.name}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Age{" "}
          <input
            type="age"
            id="age"
            name="age"
            value={employee.age}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Country{" "}
          <input
            type="text"
            id="country"
            name="country"
            value={employee.country}
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Designation{" "}
          <input
            type="text"
            id="designation"
            name="designation"
            value={employee.designation}
            onChange={handleChange}
          ></input>
        </label>

        <label>
          Salary{" "}
          <input
            type="number"
            id="salary"
            name="salary"
            value={employee.salary}
            onChange={handleChange}
          ></input>
        </label>

        <button type="submit" onClick={addEmployee}>
          Add Employee
        </button>
      </form>
      <div>
        <NavLink className="pageNames" exact to="/">
          <button>Back</button>
        </NavLink>
      </div>
    </div>
  );
};

export default AddEmployee;
