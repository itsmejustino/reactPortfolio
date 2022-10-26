import React from "react";
import "../assets/styles/app.css";
import About from "./About";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="homeTextContainer">
    <div className="typeWriterContainer">
      <Typewriter
        options={{
          strings: [
            "Hello, my name is Justin and I am a web developer.",
            "I love creating web applications and solutions with modern technologies.",
            "Take a look at my projects!",
          ],
          autoStart: true,
          loop: true,
        }}
      />
      </div>

      <div>
        <About />
      </div>
    </div>
  );
}
