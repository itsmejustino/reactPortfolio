import React from "react";
import "../assets/styles/app.css";
import Capture from "../assets/pictures/1623955408464.jpg";
import Paper from "@mui/material/Paper";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <section className="aboutSection">
        <img className="imgCapture" src={Capture} alt="ProfilePhoto" />

        <Paper className="aboutTextContainer" elevation={3}>
          <p>
            I love building projects and apps that help solve problems and make
            a change towards greatness in the world. Impacting the world with
            each new idea made to make a positive change is what the world needs
            more than ever.
          </p>
        </Paper>
      </section>
    </div>
  );
}
