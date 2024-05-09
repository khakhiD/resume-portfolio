import {
  MenuList,
  MenuListItem,
  styleReset,
  Window,
  WindowContent,
  WindowHeader,
  Button,
} from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { motion, useScroll } from 'framer-motion';
import Hero from './components/Hero/Hero';

/* Pick a theme of your choice */
import aiee from 'react95/dist/themes/aiee';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <GlobalStyles />
      <ThemeProvider theme={aiee}>
        <MenuList>
          <MenuListItem>About</MenuListItem>
          <MenuListItem>Experience</MenuListItem>
          <MenuListItem>Projects</MenuListItem>
          <MenuListItem>Education</MenuListItem>
        </MenuList>
        <section className="section-2">
          <div className="section-box-1" />
        </section>
        <Window className="window">
          <WindowHeader active={true} className="window-title">
            <span>Hello-World.exe</span>
            <Button>
              <span className="close-icon" />
            </Button>
          </WindowHeader>
          <WindowContent>안녕하세요</WindowContent>
        </Window>
        <Hero />
        <h1>Background Image Transformations</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
