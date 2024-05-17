import { styleReset } from 'react95';
import Menu from './components/Menu';
import Hero from './components/Hero';
import AboutBox from './components/AboutBox';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import blackAndWhite from 'react95/dist/themes/blackAndWhite';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import ScrollProgress from './components/ScrollProgress';

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
  @font-face {
    font-family: 'PFStardust';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/PFStardust.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body, input, select, textarea {
    font-family: 'ms_sans_serif', 'DungGeunMo';
  }
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={blackAndWhite}>
        <ScrollProgress />
        <section className="section1">
          <div className="about">
            <AboutBox message="<Why Developer />" />
            <AboutBox message="<Deep Immersion />" />
            <AboutBox message="<User Experience />" />
          </div>
          <Hero />
          <Menu />
        </section>
      </ThemeProvider>
    </>
  );
}

export default App;
