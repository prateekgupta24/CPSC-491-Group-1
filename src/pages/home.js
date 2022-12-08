import React, { useRef, useState } from "react";
import {
  HomeStyle,
  TitleStyle,
  AboutStyle,
  FaqStyle,
  ContactStyle,
  ListItems,
  HomeBackground,
} from "../styles/home.style";
import textData from "../resources/text.json";
import NavBar from "../navbar";
import background from "../resources/Gym-Background.jpeg";
import SendIcon from "@mui/icons-material/Send";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import emailjs from "@emailjs/browser";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const Home = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

  const sendEmail = (event) => {
    event.preventDefault();
    setLoading(true);
    console.log("in sendEmail");

    console.log(form.current);
    emailjs
      .sendForm(
        "FitBud_Gmail",
        "template_ouwwfff",
        form.current,
        "3x870QioZ6wndTtEJ"
      )
      .then(
        (result) => {
          setLoading(false);
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    //event.target.reset();
  };
  return (
    <>
      <NavBar className="NavBar" />
      <HomeStyle id="home">
        <TitleStyle className="title">
          <h1>Welcome to FitBud</h1>
          <div>
            <HomeBackground
              className="background-image"
              src={background}
              alt="gym-background"
            />
          </div>
        </TitleStyle>

        {textData.map((data) => {
          return (
            <>
              <AboutStyle id="about">
                <h1>{data.about.title}</h1>

                <h2>{data.about.description}</h2>
                <text>{data.about.intro.austin}</text>
                <ul>
                  {data.about.bullet.austin.map((bullets) => {
                    return <ListItems>{bullets}</ListItems>;
                  })}
                </ul>
                <text>{data.about.intro.prateek}</text>
                <ul>
                  {data.about.bullet.prateek.map((bullets) => {
                    return <ListItems>{bullets}</ListItems>;
                  })}
                </ul>
                <text>{data.about.intro.jose}</text>
                <ul>
                  {data.about.bullet.jose.map((bullets) => {
                    return <ListItems>{bullets}</ListItems>;
                  })}
                </ul>
              </AboutStyle>

              <FaqStyle id="faq">
                <h1>{data.faq.title}</h1>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{data.faq.id.q1.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{data.faq.id.q1.a}</Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>{data.faq.id.q2.q}</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>{data.faq.id.q2.a}</Typography>
                  </AccordionDetails>
                </Accordion>
              </FaqStyle>

              <ContactStyle ref={form} id="contact" onSubmit={sendEmail}>
              <ThemeProvider theme={darkTheme}>
                <h1>{data.contact.title}</h1>
                <div id="email">
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <TextField
                      required
                      id="outlined-email"
                      type="email"
                      name="email"
                      label="email"
                    />
                  </FormControl>
                </div>
                <div id="subject">
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <TextField
                      required
                      id="outlined-subject"
                      type="text"
                      name="subject"
                      label="subject"
                    />
                  </FormControl>
                </div>
                <div id="message">
                  <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                    <TextField
                      id="outlined-multiline-static"
                      name="message"
                      label="message"
                      multiline
                      rows={4}
                    />
                  </FormControl>
                </div>
                <LoadingButton
                  type="submit"
                  size="small"
                  endIcon={<SendIcon />}
                  loading={loading}
                  loadingPosition="end"
                  variant="contained"
                  sx={{ width: "11ch" }}
                >
                  Send
                </LoadingButton>
                </ThemeProvider>
              </ContactStyle>
            </>
          );
        })}
      </HomeStyle>
    </>
  );
};

export default Home;
