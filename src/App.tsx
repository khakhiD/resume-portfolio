import { styleReset } from 'react95';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import blackAndWhite from 'react95/dist/themes/blackAndWhite';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import ScrollProgress from './components/ScrollProgress';
import {
  Home,
  About,
  Project,
  Activity,
  Education,
  Etcetera,
} from './components/Section';

const GITHUB_URL = 'https://github.com/khakhid';

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

const Container = styled.main`
  max-width: 1280px;
  min-height: 700px;
  margin: auto;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={blackAndWhite}>
        <Container>
          <ScrollProgress />
          <Home />
          <About />
          <Project />
          <Activity />
          <Education />
          <Etcetera />
        </Container>
        <footer>
          <span>
            Copyright ⓒ 2024{' '}
            <a href={GITHUB_URL} target="_blank">
              KhakiD
            </a>{' '}
            all rights Reserved.
          </span>
        </footer>
      </ThemeProvider>
    </>
  );
}

export default App;
