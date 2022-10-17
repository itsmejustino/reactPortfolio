import React from "react";
import "../assets/styles/app.css";
import Capture from "../assets/pictures/1623955408464.jpg";
import Paper from "@mui/material/Paper";

export default function About() {
  return (
    <div className="aboutContainer">
      {/* <h1 style={{ padding:'2em', textDecoration:'underline'}}>About Me</h1> */}
      <section className="aboutSection">
        <img className="imgCapture" src={Capture} alt="ProfilePhoto" />

        <Paper className="aboutTextContainer" elevation={3}>
          <p>


           Hello! <br></br><br></br>
           
           My name is Justin Ortiz, I'm a web developer that is dedicated to creating user-centric web-solutions in the form of applications and websites. Since typing my first hello world app at the age of 15 I felt a connection to the code.


          </p>
        </Paper>
      </section>
    </div>
  );
}
