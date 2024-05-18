import { ReactNode } from 'react';
import styled from 'styled-components';

interface BoardProps {
  color?: string;
  bgColor?: string;
  border?: boolean;
  width?: number | string;
  height?: number | string;
  isHeader?: boolean;
  children?: ReactNode;
}

const Wrapper = styled.div<BoardProps>`
  position: absolute;
  top: 15%;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || 'auto'};
  border: ${(props) => (props.border ? '1px solid #fff' : 'none')};
  background-color: ${(props) => props.bgColor || 'var(--bg)'};
  color: ${(props) => props.color || 'var(--white)'};
  transform: var(--skew) var(--rotate);
  padding: 1em;
  padding-left: 2em;
  padding-right: 2em;
`;

const Header = styled.span`
  font-size: 1.25em;
  font-weight: 900;
  color: var(--white);
  letter-spacing: 0.2em;
`;

const Board = ({
  width,
  height,
  color,
  bgColor,
  border = false,
  isHeader = false,
  children,
}: BoardProps) => {
  return (
    <Wrapper
      width={width}
      height={height}
      color={color}
      bgColor={bgColor}
      border={border}>
      {isHeader ? <Header>{children}</Header> : children}
    </Wrapper>
  );
};

export default Board;
