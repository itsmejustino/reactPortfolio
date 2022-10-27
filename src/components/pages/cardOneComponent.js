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

export default function Projects({ props }) {
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
              image={require("../assets/pictures/PantryPal.png")}
              alt="Pantry-Pal"
            />
            <CardContent>
              <Typography variant="body" color="text.secondary">
                Have you ever looked in the pantry and thought "I have nothing
                good to make for dinner". Pantry-Pal seeks to help its user make
                that tough decision of what to make for dinner with the random
                food in the pantry. Users can search a database of recipes with
                a list of ingredients, keywords, and/or phrases.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography color="text.secondary">Live Site</Typography>
              <IconButton
                aria-label="open live website"
                onClick={(event) =>
                  window.open("https://pantry-pal1.herokuapp.com/")
                }
              >
                <PreviewIcon />
              </IconButton>
              <Typography color="text.secondary">Source Code</Typography>
              <IconButton
                aria-label="source code"
                onClick={(event) =>
                  window.open("https://github.com/itsmejustino/Pantry-Pal")
                }
              >
                <SourceIcon />
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
                  This App was created with JavaScript, HandleBars.js, Node.js,
                  Bootstrap and CSS. This app is hosted on Heroku as a live
                  website. <br></br>
                  <br></br>
                  Note: If you would like to try out without creating an account
                  please use this login.<br></br>
                  <br></br>
                  Email: 'bill@bill.bill'<br></br>
                  Password: 'test1234'
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </section>
    </div>
  );
}
