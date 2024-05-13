import { Button } from 'react95';
import styled from 'styled-components';

const Header = styled.div`
  width: 100vw;
  height: 5px;
  background-color: var(--blue);
  position: fixed;
  top: 0;
  font-family: 'DungGuenMo';
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopBar = () => {
  return (
    <Header>
      <div className="toolbar">
        <Button variant="raised" size="md" className="pdf-button">
          resume.pdf
        </Button>
      </div>
    </Header>
  );
};

export default TopBar;
