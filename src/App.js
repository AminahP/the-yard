
import { Routes,Route,Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Posts';
import Create from './pages/Create';
import Edit from './pages/Edit';
import React from "react";
import Signup from "./components/Signup/Singup.js";
import Login from "./compoonents/Login/Login.js";
import HBCUlist from ".//pages/HBCUlist";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';







function App() {
  const user = localStorage.getItem("token");

  return (
    
    <>
      
      <Navbar bg="dark" expand="sm" variant="dark">
       <ul class="container-fluid">
          <Navbar.Brand href="/">The Yard</Navbar.Brand>
          <Navbar.Text aria-controls="basic-navbar-nav" />
          <Nav className="">
           <li><Nav.Link href="/posts/new">New Post</Nav.Link></li>
           <li> <Nav.Link href="/pages/school-list">HBCU List</Nav.Link></li>
           <li> <Nav.Link href="/pages/events">Events</Nav.Link></li>
           <li> <Nav.Link href="/pages/login">Login</Nav.Link></li>

          </Nav>
        </ul>
      </Navbar>
      <Routes>
        {user && <Route path="/components/Signup" element={<Signup/>}/>}
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/pages/hbculist" element={<HBCUlist/>} />
        <Route path="/components/Login" exact element={<Login />} />
        <Route path="/posts/create" element={<Create />} />
        <Route path="/posts/:id/edit" element={<Edit />} />
      </Routes>

     
    </>
    //  : <Auth setUser={setUser}/>

    // {/* </div> */}
  );
}

export default App;
