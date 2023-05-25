import React from 'react'
import img from './Images/logo.png.webp'
import { Link } from "react-router-dom";

import {TfiAngleDown } from 'react-icons/tfi';






const Navbar = () => {
  return (<div>
    <header id="header" class=" header-scrolled">
      <div className="container main-menu">
        <div className=" d-flex" style={{ display: "flex" }}>
          <div id="logo">
            <Link to="/">
              <img src={img} alt="" title="" />
            </Link>
          </div>

          <nav id="nav-menu-container">
            <ul
              className="nav-menu sf-js-enabled sf-arrows"
              style={{ touchAction: "pan-y" }}
            >
              <li className="active">
                <Link className="active" to="home">
                  Home
                </Link>
              </li>

              <li>
                <Link to="about">About</Link>
              </li>

              <li>
                <Link to="projects">Projects</Link>
              </li>

              <li className="menu-has-children">
                <Link
                  className=""
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                  >
                  pages
                </Link>   <TfiAngleDown/>

                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="element">
                      Elements
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="contact">
                      Contact
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="pricing">
                      Pricing
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="project">
                      Project Deatails
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="menu-has-children">
                <Link
                  className=""
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Blog
                </Link>     <TfiAngleDown/>


                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="BlogHomeP">
                      Blog Home
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="BlogSignleP">
                      Blog Single
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    </div>

    // <header id="header">
    //   <div className="container main-menu">
    //     <div className="/*row align-items-center*/ d-flex" style={{display:'flex'}}>
    //       <div id="logo">
    //         <a to="index.html">
    //           <img src={img} alt="" title="" />
    //         </a>
    //       </div>
    //       <nav id="nav-menu-container">
    //         <ul className="nav-menu">
    //           <li className="">
    //             <Link className="" to="/">
    //               Home
    //             </Link>
    //           </li>
    //           <li>
    //             <Link to="About">About</Link>
    //           </li>
    //           <li>
    //             <Link to="Projects">Projects</Link>
    //           </li>
    //           <li className=" nav-item dropdown menu-has-children">
    //             <Link className='nav-link dropdown-toggle' id="navbarDropdown" to="PricingP">Pages</Link>
    //             <ul>
    //               <li>
    //                 <Link to="ElementsP">Elements</Link>
    //               </li>
    //               <li>
    //                 <Link to="ContactP">Contact</Link>
    //               </li>
    //               <li>
    //                 <Link to="PricingP">Pricing</Link>
    //               </li>
    //               <li>
    //                 <Link to="ProjectP">Project Details</Link>
    //               </li>
    //             </ul>
    //           </li>
    //           <li className="menu-has-children">
    //             <Link to="BlogHomeP">Blog</Link>
    //             <ul>
    //               <li>
    //                 <Link to="">Blog Home</Link>
    //               </li>
    //               <li>
    //                 <Link to="">Blog Single</Link>
    //               </li>
    //             </ul>
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>
    //   </div>
    // </header>
  );
};

export default Navbar;

















// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function NavBar() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home"><img src={img}/></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#Home">Home</Nav.Link>
//             <Nav.Link href="#About">About</Nav.Link>
//             <Nav.Link href="#project">Project</Nav.Link>
//             {/* <Nav.Link href="#home">Pages</Nav.Link> */}
//             {/* <Nav.Link href="#link">Link</Nav.Link> */}
//             <NavDropdown title="Pages" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//             <NavDropdown title="Blog" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavBar;




















