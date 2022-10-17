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

export default function ProjectThree({ props }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <section className="projectContainer">
        <div className="cardsContainer">
          <Card sx={{ maxWidth: 345, marginTop: 5 }}>
            <CardHeader title="myPlanner: A Planning Application" />
            <CardMedia
              component="img"
              height="350"
              image={require("../assets/pictures/myplanner.PNG")}
              alt="Pantry-Pal"
            />
            <CardContent>
              <Typography variant="body" color="text.secondary">
                Staying organized is even easier with myPlanner. This app is a
                daily planner app that provides the ability to plan your day.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography color="text.secondary">Live Site</Typography>
              <IconButton
                aria-label="open live website"
                onClick={(event) =>
                  window.open("https://itsmejustino.github.io/myPlanner/")
                }
              >
                <PreviewIcon />
              </IconButton>
              <Typography color="text.secondary">Source Code</Typography>
              <IconButton
                aria-label="source code"
                onClick={(event) =>
                  window.open("https://github.com/itsmejustino/myPlanner")
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
                  This App was created with JavaScript, HTML, Bootstrap, and
                  CSS. This app is hosted on on GitHub Pages as a live website.{" "}
                  <br></br>
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </div>
      </section>
    </div>
  );
}
