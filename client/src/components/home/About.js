import Portrait from '../../components/images/Portrait.png'
import { LogoImg } from "../styles/MainNavStyles";

const About = () => (
  <>
    <div>
      <h4>About Me</h4>
      <p>
        Howdy! My name is Brandon and I love developing projects that make life simpler for
        their users. My passion for software engineering started back in 2014 when I created
        a simple chess application in Java that included a simple computer AI to challenge. 
        Creating this program with my friend taught me several skills I apply to this day: 
        object-oriented programming, basics of machine-learning, and the value of teamwork 
        while coding. 
      </p>

      <p>
        Today, I still love providing creative user experiences that simplify life for my
        friends, family, and clients. I've had the priviledge of working for a {''}
        <a href="https://blueravensolar.com/" target="_blank">solar company</a>, a {''}
        <a href="https://www.taxhawk.com/" target="_blank">tax software firm</a>, and a {''}
        <a href="https://facadegames.com/" target="_blank">board game start-up</a> (as a board 
        game junkie, I highly recommend checking out their {''}
        <a href="https://facadegames.com/collections/our-games" target="_blank">games</a>). 
        I am currently focused on building 
        quality freelance projects, while actively searching for a company to join and further 
        our joint missions of providing creative, human-centered solutions for clients. 
      </p>

      <p>
        My recently used skills include:
      </p>
    </div>
    <ul>
      Javascript (ES6+), React.js, Ruby, Ruby on Rails, C++, MySQL
    </ul>
    <LogoImg
      src={Portrait} 
      alt="Portrait of Brandon" 
    />
  </>
)

export default About;