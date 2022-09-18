import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';

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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box direction="row" style={{marginTop: '50px', borderRadius:'3px', padding:"2px 2px", width: "100%", display: 'flex', justifyContent:'center', flexDirection: 'row'}} >
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <Button type="submit" value ="Send" variant="contained" >
        Send
      </Button>
  
    </form>
    </Box>
  );
}
