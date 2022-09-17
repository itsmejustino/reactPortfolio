import React from "react";
import Tabs from "@mui/material/Button";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Tabs >
      <ul>
        <li style={{ listStyleType: "none", textDecoration: "none" }}>
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
         
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        <li style={{ listStyleType: "none", textDecoration: "none" }} >
          <a
            href="#about"
            onClick={() => handlePageChange("About")}
          
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
           About
          </a>
        </li>
        <li style={{ listStyleType: "none", textDecoration: "none" }} >
          <a
            href="#projects"
            onClick={() => handlePageChange("Project")}
           
            className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
          >
           Projects
          </a>
        </li>
        <li style={{ listStyleType: "none", textDecoration: "none" }} >
          <a
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            
            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          >
          Contact
          </a>
        </li>
        <li style={{ listStyleType: "none", textDecoration: "none" }} >
          <a
            href="#reume"
            onClick={() => handlePageChange("Resume")}
       
            className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          >
         Resume
          </a>
        </li>
      </ul>
    </Tabs>
  );
}

export default NavTabs;
