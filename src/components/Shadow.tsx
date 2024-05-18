import styled from 'styled-components';

const Wrapper = styled.div`
  transition: 0.3s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: -20px 40px 0 rgba(0, 0, 0, 0.2);
`;

const Shadow = () => {
  return <Wrapper />;
};

export default Shadow;
