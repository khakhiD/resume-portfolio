import { useCallback, useEffect, useRef, useState } from 'react';
import { ProgressBar } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .scroll-progress {
    background-color: var(--blue);
    height: 30px;
    width: 200px;
  }

  .scroll-text {
    color: #fff;
    font-weight: 600;
  }
`;

const ScrollProgress = () => {
  const [percent, setPercent] = useState<number>(0);
  const progressRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback((): void => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop === 0) {
      setPercent(0);
      return;
    }

    const windowHeight: number = scrollHeight - clientHeight;
    const currentPercent: number = scrollTop / windowHeight;
    setPercent(currentPercent * 100);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);

    return () => {
      window.removeEventListener('scroll', handleScroll, true);
    };
  }, [handleScroll]);

  return (
    <Wrapper className="progress-bar">
      <span className="scroll-text">SCROLL PROGRESS</span>
      <ProgressBar
        className="scroll-progress"
        variant="default"
        value={Math.floor(percent)}
        ref={progressRef}
      />
    </Wrapper>
  );
};

export default ScrollProgress;
