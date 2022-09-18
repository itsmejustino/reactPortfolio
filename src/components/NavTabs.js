import React from "react";
import Tabs from "@mui/material/Button";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Box style={{margin: 0, backgroundColor: "#737b7d", borderRadius:'3px', padding:"2px 2px", width: "100%", }} > 
   
      <ul style={{ display: "flex", justifyContent: "flex-end", gap:".5rem" }}>
      <Button variant ="contained" style={{ fill:"white" }} >
        <li style={{ listStyleType: "none" ,}}>
          <a
           style={{ textDecoration: "none" , }}
            href="#home"
            onClick={() => handlePageChange("Home")}
         
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
          >
            Home
          </a>
        </li>
        </Button>
        <Button variant ="text" >
        <li style={{ listStyleType: "none" }} >
          <a
           style={{ textDecoration: "none" }}
            href="#about"
            onClick={() => handlePageChange("About")}
          
            className={currentPage === "About" ? "nav-link active" : "nav-link"}
          >
           About
          </a>
        </li>
        </Button>
        <Tabs>
        <li style={{ listStyleType: "none", textDecoration: "none" }} >
          <a
           style={{listStyleType: "none", textDecoration: "none" }}
            href="#projects"
            onClick={() => handlePageChange("Project")}
           
            className={currentPage === "Projects" ? "nav-link active" : "nav-link"}
          >
           Projects
          </a>
        </li>
        </Tabs>
        <Tabs>
        <li style={{ listStyleType: "none", textDecoration: "none" }} >
          <a
           style={{listStyleType: "none", textDecoration: "none" }}
            href="#contact"
            onClick={() => handlePageChange("Contact")}
            
            className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
          >
          Contact
          </a>
        </li>
        </Tabs>
        <Tabs>
        <li style={{ listStyleType: "none", textDecoration: "none" }} >
          <a
           style={{listStyleType: "none", textDecoration: "none" }}
            href={require("../components/assets/docs/Justin Ortiz Resume.pdf")} 
            download="JustinOResume"
            // onClick={() => handlePageChange("Resume")}
       
            // className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
          >
         Resume
          </a>
        </li>
        </Tabs>
      </ul>
    
    </Box>
  );
}

export default NavTabs;
