import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_w4wqwjd",
        "template_9h9z5wy",
        form.current,
        "SQvp1trOFOn-Yjl7c"
      )
      .then(
        (result) => {
          console.log(result.text, result);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box
      direction="row"
      style={{
        marginTop: "50px",
        borderRadius: "3px",
        padding: "2px 2px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <form ref={form} onSubmit={sendEmail}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            gap: "2em",
          }}
        >
          <div>
            <label>Name: </label> <br></br>
            <TextField label="Name" id="fullWidth" type="name" name="name" />
          </div>
          <div>
            <label>Email: </label> <br></br>
            <TextField
              label="Email Address"
              id="fullWidth"
              type="email"
              name="user_email"
            />
          </div>
        </div>

        <div style={{ marginTop: "2%" }}>
          <label>Message:</label> <br></br>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={12}
            placeholder="Get in Contact with Me"
            style={{
              borderRadius: "5px",
              background: "transparent",
              resize: "none",
              minWidth: "99%",
            }}
            name="message"
          />
          <Button
            variant="contained"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              marginTop: 10,
              backgroundColor: "#2c698d",
            }}
            type="submit"
            value="Send"
            endIcon={<SendIcon />}
          >
            Send Message
          </Button>
        </div>
      </form>
    </Box>
  );
}
