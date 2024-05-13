import Shadow from './Shadow';
import { Frame } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  margin: auto;
  margin-bottom: 1.5em;
  transform: var(--rotate) var(--skew);
  transition: 0.3s ease-in-out;

  &:hover {
    /* transform: rotate(0) skew(0); */
    translate: 0 -10px;
  }

  .arrow {
    padding-left: 10px;
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

  :hover {
    background-color: var(--blue);
    cursor: pointer;
    color: var(--white);
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
        style={{ padding: '.75em', lineHeight: '1.5', maxWidth: '200px' }}>
        <span>{props.message}</span>
        <span className="arrow">▼</span>
      </Frame>
      <Shadow />
    </Wrapper>
  );
};

export default AboutBox;
