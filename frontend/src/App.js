//Brian Dilone, 4/13/2026, IT302-452, Phase 4 Read Node.js Data Using React Assignment, bd294@njit.edu
import React, { useState, useCallback } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import CatsList from "./components/catsList";
import Cat from "./components/cat";


import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const [user, setUser] = useState(null);
  const loginSetter = useCallback(user => {
    setUser(user);
  }, [setUser]);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
   <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">HTTP Cats</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

<Nav className="mr-auto">
           <Nav.Link as={NavLink} to={"/bd294_cats"}>
      Cats
    </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Routes>
    <Route path="/" element={<CatsList />}></Route>
    <Route path="/bd294_cats" element={<CatsList />}></Route>

    <Route path="/bd294_cats/:id/" element={<Cat user={user} />}></Route>
    
      </Routes>


    </div>
  );
}

export default App;
