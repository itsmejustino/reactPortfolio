import React from "react";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import DownloadIcon from '@mui/icons-material/Download';
import './assets/styles/app.css';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        margin: 0,
        borderRadius: "3px",
        padding: "2px 2px",
        width: "100%",
      }}
    >
      <ul style={{ display: "flex",  flexWrap: 'wrap', gap: ".5rem" }}>
        <Button variant="contained" style={{ color:'white', listStyleType: "none", backgroundColor:'#2c698d' }}>
          <li style={{ listStyleType: "none", textDecoration: "none" }}>
            <a
              style={{ textDecoration: "none" }}
              href="#home"
              onClick={() => handlePageChange("Home")}
              className='noActive'
            >
              Home
            </a>
          </li>
        </Button>
        <Button variant="contained" style={{ listStyleType: "none", backgroundColor:'#2c698d' }}>
          <li style={{ listStyleType: "none" }}>
            <a
              style={{ textDecoration: "none", fontColor:'white' }}
              href="#about"
              onClick={() => handlePageChange("About")}
              className='noActive'
            >
              About
            </a>
          </li>
        </Button>
        <Button variant="contained" style={{  backgroundColor:'#2c698d' }}>
          <li style={{ listStyleType: "none", textDecoration: "none", backgroundColor:'#2c698d' }}>
            <a
              style={{ listStyleType: "none", textDecoration: "none" }}
              href="#projects"
              onClick={() => handlePageChange("Project")}
              className='noActive'
            >
              Projects
            </a>
          </li>
        </Button>
        <Button variant="contained" style={{  backgroundColor:'#2c698d' }}>
          <li style={{ listStyleType: "none", textDecoration: "none" }}>
            <a
              style={{ listStyleType: "none", textDecoration: "none" }}
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className='noActive'
            >
              Contact
            </a>
          </li>
        </Button >
        <Button variant= 'contained' style={{ listStyleType: "none", textDecoration: "none" , marginRight:'10px', backgroundColor:'#2c698d'}} endIcon={<DownloadIcon />}  href={require("../components/assets/docs/Justin Ortiz Resume.pdf")}
              download="JustinOResume">
          <li style={{ listStyleType: "none", textDecoration: "none" }}>
          
              Resume
            
          </li>
        </Button>
      </ul>
    </Box>
  );
}

export default NavTabs;
