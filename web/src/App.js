import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';



import Login from "./components/login/login"
import Signup from "./components/signUp/signUp"
// import Dashboard from "./components/dashboard/index"


function App() {

  let history = useHistory();

  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home" style={{color:"white",fontWeight:"bolder"}}>Registeration Form</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              {/* <Nav.Link onClick={() => { history.push("/") }}>Dashboard</Nav.Link> */}
              <Nav.Link onClick={() => { history.push("/") }} style={{color:"white",fontWeight:"bolder"}}>Signup</Nav.Link>

              <Nav.Link onClick={() => { history.push("/login") }} style={{color:"white",fontWeight:"bolder"}}>Login</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/">
          <Signup />
        </Route>
{/* 
        <Route exact path="/">
          <Dashboard />
        </Route> */}

      </Switch>

    </>
  );
}

export default App;