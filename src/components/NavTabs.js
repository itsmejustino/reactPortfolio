import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from "@mui/icons-material/Download";
import "./assets/styles/app.css";

function NavTabs({ handlePageChange }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "flex-end",
        margin: 0,
        borderRadius: "3px",
        padding: "2px 2px",
        width: "100%",
      }}
    >
      <ul style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
        <Button
          variant="outlined"
          color="inherit"
          style={{ color: "#2c698d", listStyleType: "none" }}
          href="#home"
          onClick={() => handlePageChange("Home")}
          className="noActive"
        >
          <li style={{ listStyleType: "none", textDecoration: "none" }}>
            About
          </li>
        </Button>
        <Button
          variant="outlined"
          color="inherit"
          style={{ color: "#2c698d", listStyleType: "none" }}
          href="#projects"
          onClick={() => handlePageChange("Project")}
          className="noActive"
        >
          <li style={{ listStyleType: "none", textDecoration: "none" }}>
            Projects
          </li>
        </Button>
        <Button
          className="noActive"
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          variant="outlined"
          color="inherit"
          style={{ color: "#2c698d", listStyleType: "none" }}
        >
          <li style={{ listStyleType: "none", textDecoration: "none" }}>
            Contact
          </li>
        </Button>
        <Button
          className="ani"
          variant="outlined"
          color="inherit"
          style={{
            color: "#2c698d",
            listStyleType: "none",
            textDecoration: "none",
            marginRight: "10px",
          }}
          endIcon={<DownloadIcon />}
          href={require("../components/assets/docs/Justin_Ortiz_Resume.pdf")}
          download="JustinOResume"
        >
          <li style={{ listStyleType: "none", textDecoration: "none" }}>
            Resume
          </li>
        </Button>
      </ul>
    </nav>
  );
}

export default NavTabs;
