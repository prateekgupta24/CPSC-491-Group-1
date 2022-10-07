import React from 'react';
import {HomeStyle, TitleStyle, AboutStyle, FaqStyle, ContactStyle,ListItems} from '../styles/home.style';
import textData from '../resources/text.json';


const Home = () => {
  return (
    <div>
    <HomeStyle>
      <div id='Home'>
        <TitleStyle>
          <h1>Welcome to FitBud</h1>
        </TitleStyle>
      </div> 
          
      {textData.map(data => {
        return (
        <div>
          <AboutStyle>  
          <div id='about'>
            <h1>{data.about.title}</h1>
            <h2>{data.about.description}</h2>
            <body>{data.about.intro.austin}</body>
            <ul>
              {data.about.bullet.austin.map(bullets => {
                return(<ListItems>{bullets}</ListItems>)
              })}
            </ul>
            <body>{data.about.intro.prateek}</body>
            <ul>
              {data.about.bullet.prateek.map(bullets => {
                return(<ListItems>{bullets}</ListItems>)
              })}
            </ul>
            <body>{data.about.intro.jose}</body>
            <ul>
              {data.about.bullet.jose.map(bullets => {
                return(<ListItems>{bullets}</ListItems>)
              })}
            </ul>
          </div>
          </AboutStyle>
          <FaqStyle>
          <div id='faq'>
            <h1>{data.faq.title}</h1>
            <ul>
              <ListItems>{data.faq.id.q1.q}</ListItems>
              <ul class="square"><li>{data.faq.id.q1.a}</li></ul>
              <ListItems>{data.faq.id.q2.q}</ListItems>
              <ul class="square"><li>{data.faq.id.q2.a}</li></ul>
            </ul>
          </div>
          </FaqStyle> 
          <ContactStyle>
          <div id='contact'>
            <header className="contact-header">
              <h1>{data.contact.title}</h1>
              <h2>{data.contact.style}</h2>
              <ul>
                {data.contact.emails.map(email => {
                  return(<ListItems>{email}</ListItems>)
                })}
              </ul>
            </header>
          </div>
          </ContactStyle>
        </div>
        )
      })}
    </HomeStyle>
  </div>
  );
}

export default Home;

