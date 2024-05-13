import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Frame,
  Toolbar,
  ScrollView,
  Avatar,
} from 'react95';
import Shadow from './Shadow';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  transform: var(--rotate) var(--skew);
  transition: 0.3s ease-in-out;

  &:hover {
    /* transform: rotate(0) skew(0); */
    translate: 0 -10px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    transition: opacity 0.3s ease;
  }

  &::before {
    bottom: -8px;
    left: 0px;
    width: 100%;
    height: 8px;
    background-color: #494949;
    transform: translateX(-4px) skew(-45deg);
  }

  &::after {
    top: 0px;
    left: -8px;
    width: 8px;
    height: 100%;
    background-color: #898d90;
    transform: translateY(4px) skew(0, -45deg);
  }

  .window:nth-child(2) {
    margin: 2rem;
  }
  .window-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--blue);
  }
  .window-title-text {
    margin-left: 0.5em;
    letter-spacing: 1px;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
  .window-content {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 20px;
  }
  #cutout {
    padding: 10px;
  }
  .avatar-text {
    font-size: 1.2em;
  }
`;

const IMAGE_URL =
  'https://khakhid.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fa4790dc2-7f52-4617-8fd1-fef1df1a6dec%2F3a821c30-2a2e-45df-9e08-57cb6b7cc16d%2F%25EC%25B9%25B4%25ED%2582%25A4%25EB%2594%2594-%25EC%25BA%2590%25EB%25A6%25AD%25ED%2584%25B0.png?table=block&id=94389555-059d-4d32-bd72-61ad66db655c&spaceId=a4790dc2-7f52-4617-8fd1-fef1df1a6dec&width=250&userId=&cache=v2';

const Hero = () => {
  return (
    <Wrapper className="wrapper">
      <Window className="window">
        <WindowHeader active className="window-title">
          <span className="window-title-text">Shin Dongho.html</span>
        </WindowHeader>
        <Frame variant="well" className="footer">
          https://localhost:5173/
        </Frame>
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
          <Avatar className="avatar" size={50} src={IMAGE_URL} />
          <span className="avatar-text">신동호</span>
        </WindowContent>
        <ScrollView id="cutout">
          <p>프로덕트에 대한 깊은 몰입과 애정으로 개발하고 있지만 CSS는</p>
          <p>진짜 하려니까 대가리가 터져버릴 것만 같은 나는</p>
        </ScrollView>
        <Shadow />
      </Window>
    </Wrapper>
  );
};

export default Hero;
