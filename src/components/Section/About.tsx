// import { Window, WindowHeader, Button, Toolbar, WindowContent } from 'react95';
import Board from '../Board';

const About = () => {
  return (
    <section className="screen section-about">
      <Board isHeader border width={'30%'}>
        About Me
      </Board>
      <p>about section</p>
    </section>
  );
};

export default About;
