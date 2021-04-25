import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [newSalary, setNewSalary] = useState(0);
  const [show, setShow] = useState(false);
  const [employeeList, setEmployeeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateSalary = (id) => {
    // console.log("update clicked");
    // console.log(newSalary);

    axios
      .post("https://simpleemployeemanager.herokuapp.com/updateSalary", {
        salary: newSalary,
        id: id,
      })
      .then((response) => {
        //console.log(response);
        alert("updated salary");
        setEmployeeList(
          employeeList.map((val) => {
            return val.id === id ? { ...val, salary: newSalary } : val;
          })
        );
      });
  };

  const deleteEmployee = (id) => {
    axios
      .post("https://simpleemployeemanager.herokuapp.com/delete", { id })
      .then((response) => {
        // console.log(response);
        alert("Employee deleted successfully");
        setEmployeeList(
          employeeList.filter((val) => {
            return val.id !== id;
          })
        );
      });
  };
  const getEmployees = () => {
    setLoading(true);
    axios
      .get("https://simpleemployeemanager.herokuapp.com/employees")
      .then((response) => {
        // console.log(response);
        setLoading(false);
        setEmployeeList(response.data);
        setShow(true);
        // console.log(employeeList);
      });
  };
  return (
    <div className="home">
      <h2>Home</h2>
      <div className="getEmployee">
        <button onClick={getEmployees}>Show All Employees</button>
      </div>
      <NavLink exact to="/addEmployee">
        <button>Add New Employee</button>
      </NavLink>

      <div className="employees">
        {loading && <h3>Loading...</h3>}
        {employeeList.length !== 0 &&
          employeeList.map((val, id) => {
            return (
              <div key={id}>
                <div>
                  <h4>Name: {val.name}</h4>
                  <h4>Age: {val.age}</h4>
                  <h4>Country: {val.country}</h4>
                  <h4>Designation: {val.designation}</h4>
                  <h4>Salary: {val.salary}</h4>
                </div>
                <div className="buttonDiv">
                  <input
                    placeholder="enter new salary"
                    type="number"
                    onChange={(event) => setNewSalary(event.target.value)}
                  ></input>
                  <button type="submit" onClick={() => updateSalary(val.id)}>
                    Update salary
                  </button>
                  <NavLink exact to={`/updateEmployee/${val.id}`}>
                    <button>Update Employee</button>
                  </NavLink>

                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this employee?"
                        )
                      ) {
                        deleteEmployee(val.id);
                      }
                    }}
                  >
                    Delete Employee
                  </button>
                </div>
              </div>
            );
          })}
        {employeeList.length === 0 && show && <p>No employee added</p>}
      </div>
    </div>
  );
};
export default Home;
