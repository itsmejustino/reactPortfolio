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



export default function ProjectFive({ props }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>

      <section className="projectContainer">
  
        <div className="cardsContainer">
          <Card sx={{ maxWidth: 345, marginTop: 5 }}>
            <CardHeader title="Talking-cents: Thoughts that cost a penny" />
            <CardMedia
              component="img"
              height="194"
              image={require("../assets/pictures/talkingcents.gif")}
              alt="Pantry-Pal"
            />
            <CardContent>
              <Typography variant="body" color="text.secondary">
                Talking cents is a full stack application that gives users a chance to give their thoughts on a particular topic and vote on other users thoughts. Thoughts can be voted with upvotes, downvotes(trash can), supervotes, or reported. If a user 'loves' a topic they can subscribe to a top to have that tracked in their profile/settings page.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Typography color="text.secondary">Live Site</Typography>
              <IconButton aria-label="open live website">
                <PreviewIcon
                  onClick={(event) =>
                    window.open("https://www.talking-cents.com/")
                  }
                />
              </IconButton>
              <Typography color="text.secondary">Source Code</Typography>
              <IconButton aria-label="source code">
                <SourceIcon
                  onClick={(event) =>
                    window.open("https://github.com/itsmejustino/daily-chatter")
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
                  This App was created with RedwoodJS, React, Prisma ORM, PostgreSQL, Tailwind CSS, JSX, and RailWay Cloud storage. This app is hosted on Netlify as a live
                  website. <br></br>
                  <br></br>
                  Note: If you would like to try out without creating an account
                  please use this login.<br></br>
                  <br></br>
                  username: 'justin'<br></br>
                  Password: 'test'
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
          
        </div>
      </section>
    </div>
  );
}
