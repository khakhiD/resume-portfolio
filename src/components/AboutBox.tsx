import Shadow from './Shadow';
import { Frame } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  max-width: 700px;
  margin: auto;
  margin-bottom: 1.5em;
  /* transform: var(--rotate) var(--skew); */
  transition: 0.3s ease-in-out;

  &:hover {
    /* transform: rotate(0) skew(0); */
    translate: 0 -10px;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    bottom: -8px;
    left: 0px;
    width: 100%;
    height: 10px;
    background-color: #494949;
    transform: translateX(-4px) skew(-45deg);
  }

  &::after {
    top: 0px;
    left: -9px;
    width: 8px;
    height: 100%;
    background-color: #898d90;
    transform: translateY(4px) skew(0, -45deg);
  }

  & .bracket {
    margin-left: 0.1em;
    margin-right: 0.1em;
    font-weight: 700;
  }

  :hover {
    cursor: pointer;
    & .bracket {
      color: var(--blue);
    }
  }
`;

type AboutBoxProps = {
  message?: string;
};

const AboutBox = (props: AboutBoxProps) => {
  return (
    <Wrapper>
      <Frame
        id="frame"
        variant="window"
        shadow
        style={{ padding: '.75em', lineHeight: '1.5', width: '100%' }}>
        <span className="bracket">{'<'}</span>
        <span>{props.message}</span>
        <span className="bracket">{' />'}</span>
      </Frame>
      <Shadow />
    </Wrapper>
  );
};

export default AboutBox;
