import { styleReset } from 'react95';
import Menu from './components/Menu';
import Hero from './components/Hero';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { motion, useScroll } from 'framer-motion';
import blackAndWhite from 'react95/dist/themes/blackAndWhite';
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
  @font-face {
     font-family: 'DungGeunMo';
     src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff') format('woff');
     font-weight: normal;
     font-style: normal;
     unicode-range: U+AC00-D7A3;
}
  body, input, select, textarea {
    font-family: 'ms_sans_serif', 'DungGeunMo';
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
      <ThemeProvider theme={blackAndWhite}>
        <section className="section1">
          <Hero />
          <Menu />
        </section>
      </ThemeProvider>
    </>
  );
}

export default App;
