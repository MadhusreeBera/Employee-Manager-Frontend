import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/layout/Navbar";
import NotFound from "./components/pages/NotFound";
import AddEmployee from "./components/employees/AddEmployee";
import UpdateEmployee from "./components/employees/UpdateEmployee";

import { Switch, BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/addEmployee" component={AddEmployee}></Route>
          <Route
            exact
            path="/updateEmployee/:id"
            component={UpdateEmployee}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
