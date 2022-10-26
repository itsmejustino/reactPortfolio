import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Snackbar from "@mui/material/Snackbar";
import PropTypes from "prop-types";

export default function Contact(props) {
  const form = useRef();

  const [value, setValue] = useState(props.name);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  // const handleClick = (newState) => () => {
  //   setState({ open: true, ...newState });
  // };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      e.target.message.value.length > 0 &&
      e.target.name.value.length > 0 &&
      e.target.user_email.value.length > 0
    ) {
      emailjs
        .sendForm(
          "service_w4wqwjd",
          "template_9h9z5wy",
          form.current,
          "SQvp1trOFOn-Yjl7c"
        )
        .then(
          (result) => {
            console.log(result);

            if (result.status === 200 && result.text) {
              console.log(result.text, result.status);
              setState({ open: true, vertical: "top", horizontal: "center" });
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("No message to send");
    }
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
            <TextField
              label="Name"
              id="fullWidth"
              type="name"
              name="name"
              required
            />
          </div>
          <div>
            <label>Email: </label> <br></br>
            <TextField
              label="Email Address"
              id="fullWidth"
              type="email"
              name="user_email"
              required
            />
          </div>
        </div>

        <div style={{ marginTop: "2%" }}>
          <label>Message:</label> <br></br>
          <TextareaAutosize
            value={value}
            onChange={handleChange}
            aria-label="minimum height"
            minRows={12}
            // placeholder="Get in Contact with Me"
            style={{
              borderRadius: "5px",
              background: "transparent",
              resize: "none",
              minWidth: "99%",
              fontSize: "16px",
            }}
            name="message"
            required
          />
          <Button
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "row",
              marginTop: 10,
              backgroundColor: "#2c698d",
            }}
            type="submit"
            variant="contained"
            value="Send"
            endIcon={<SendIcon />}
          >
            Send Message
          </Button>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            autoHideDuration={6000}
            open={open}
            onClose={handleClose}
            message='Your message was sent successfully!'
            key={vertical + horizontal}
          />
        </div>
      </form>
    </Box>
  );
}

Contact.propType = {
  name: PropTypes.string.isRequired,
};
