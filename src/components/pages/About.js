import React from "react";
import "../assets/styles/app.css";
import Capture from "../assets/pictures/1623955408464.jpg";
import Paper from "@mui/material/Paper";

export default function About() {
  return (
    <div>
      <h1 style={{ padding:'2em', textDecoration:'underline'}}>About Me</h1>
      <section className="aboutSection">
        <img className="imgCapture" src={Capture} alt="ProfilePhoto" />

        <Paper className="aboutTextContainer" elevation={3}>
          <p>


           Hello! My name is Justin. <br></br><br></br>
           
           My passion for programming comes paired with my professional background in facilities management paired with a deep interest in tech and video games. Since typing my first hello world app at the age of 15 I was hooked. I love building and creating mobile-friendly web apps in combination with team-collaboration, problem solving, resourcefulness, and analytical skills.


          </p>
        </Paper>
      </section>
    </div>
  );
}
