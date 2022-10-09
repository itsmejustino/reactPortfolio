import React from "react";
import "../assets/styles/app.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PreviewIcon from "@mui/icons-material/Preview";
import SourceIcon from "@mui/icons-material/Source";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));



export default function ProjectFour({ props }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <section className="projectContainer">
       
        <div className="cardsContainer">
          <Card sx={{ maxWidth: 345, marginTop: 5 }}>
            <CardHeader title="Pantry-Pal: A Recipe Generator" />
            <CardMedia
              component="img"
              height="194"
              image={require("../assets/pictures/readMeGen.gif")}
              alt="Pantry-Pal"
            />
            <CardContent>
              <Typography variant="body" color="text.secondary">
               Make-a-Readme is a README.md generator for developers to help with creating a readme file for your projects. This app is a desktop application that requires installation of Node.js and a an integrated development environment of choice. Answering a list of prompts and invoking the program will create a detailed readme file. 
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography color="text.secondary">Demo</Typography>
              <IconButton aria-label="open live website">
                <PreviewIcon
                  onClick={(event) =>
                    window.open("https://drive.google.com/file/d/1TMLQKNRXldldiwccZ4G7xDx3sHhjA7cG/view")
                  }
                />
              </IconButton>
              <Typography color="text.secondary">Source Code</Typography>
              <IconButton aria-label="source code">
                <SourceIcon
                  onClick={(event) =>
                    window.open("https://github.com/itsmejustino/Make-a-README")
                  }
                />
              </IconButton>

              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Technologies and Use:</Typography>
                <Typography paragraph>
                 This app was created with Javascript and Node.js. API calls were made with Insomnia.<br></br>
                 This app has created many of my own readmes and includes the option to provide a license included with svg and link.

            
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </section>
    </div>
  );
}
