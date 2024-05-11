import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Frame,
  Toolbar,
} from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  .window {
    position: absolute;
    top: 25%;
    right: 25%;
    width: 500px;
    height: fit-content;
    transform: rotate(-25deg) skew(25deg);
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: blue;
  }
  .window-title-text {
    margin-left: 0.5em;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
  .window-content {
    font-size: 20px;
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const Hero = () => {
  return (
    <Wrapper>
      <Window className="window" shadow={false}>
        <WindowHeader active className="window-title">
          <span className="window-title-text">Shin Dongho.exe</span>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm" disabled>
            About
          </Button>
          <Button variant="menu" size="sm">
            Project
          </Button>
          <Button variant="menu" size="sm">
            Activity
          </Button>
          <Button variant="menu" size="sm">
            Education
          </Button>
          <Button variant="menu" size="sm">
            etc
          </Button>
        </Toolbar>
        <WindowContent className="window-content">
          <span className="greeting">
            프로덕트에 대한 애정과 몰입으로 개발합니다.
          </span>
          <p>안녕하세요. 신입 개발자 신동호입니다.</p>
        </WindowContent>
        <Frame variant="well" className="footer">
          I develop products with love and immersion.
        </Frame>
      </Window>
    </Wrapper>
  );
};

export default Hero;
