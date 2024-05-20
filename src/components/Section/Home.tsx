import Board from '../Board';
import AboutBox from '../AboutBox';
import Hero from '../Hero';
import Menu from '../Menu';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5%;
  transform: var(--skew) var(--rotate);
`;

const Home = () => {
  return (
    <Section className="screen">
      <Board isHeader border width={'30%'}>
        Sweet Home
      </Board>
      <Content className="about">
        <div className="about-box">
          <AboutBox message="Strong Intuition" />
          <AboutBox message="Deep Immersion" />
          <AboutBox message="Beyond Intuition" />
        </div>
        <Hero />
        <Menu />
      </Content>
    </Section>
  );
};

export default Home;
