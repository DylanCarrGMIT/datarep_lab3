import React, {Component} from 'react';
import './App.css';
import Header from './components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Create from './components/create';
import Read from './components/read';
class App extends Component
{
  render(){
    return (
      <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/read">Read</Nav.Link>
      <Nav.Link href="/create">Create</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <Switch>
    <Route path="/create" exact><Create></Create></Route>
    <Route path="/header" exact><Header></Header></Route>
    <Route path="/read"><Read></Read></Route>
  </Switch>
       
      </div>
      </Router>
    );
  }
}

export default App;
