import { MenuList, MenuListItem, styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { motion, useScroll } from 'framer-motion';
import Hero from './components/Hero/Hero';

/* Pick a theme of your choice */
import modernDark from 'react95/dist/themes/modernDark';

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
      <ThemeProvider theme={modernDark}>
        <MenuList>
          <MenuListItem>About</MenuListItem>
          <MenuListItem>Experience</MenuListItem>
          <MenuListItem>Projects</MenuListItem>
          <MenuListItem>Education</MenuListItem>
        </MenuList>
        <Hero />
      </ThemeProvider>
    </>
  );
}

export default App;
