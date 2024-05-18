import Board from '../Board';
import AboutBox from '../AboutBox';
import Hero from '../Hero';
import Menu from '../Menu';

const Home = () => {
  return (
    <section className="screen section-home">
      <Board isHeader>Hello, World 🤟</Board>
      <div className="about">
        <div className="about-box">
          <AboutBox message="Strong Intuition" />
          <AboutBox message="Deep Immersion" />
          <AboutBox message="Beyond Intuition" />
        </div>
        <Hero />
        <Menu />
      </div>
    </section>
  );
};

export default Home;
