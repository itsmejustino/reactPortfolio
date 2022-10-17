import React from "react";
import "../assets/styles/app.css";
import About from "./About";

export default function Home() {
  return (
    <div className="homeTextContainer">
      <p className="homeText">
        Hello! I'm Justin Ortiz and I'm a Web Developer.
      </p>
      <div>
        <About />
      </div>
    </div>
  );
}
