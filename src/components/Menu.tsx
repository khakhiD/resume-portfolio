import { MenuList, MenuListItem, Separator } from 'react95';
import styled from 'styled-components';

const ICONS = {
  GITHUB: '/icons/github.svg',
  LINKEDIN: '/icons/linkedin.svg',
  EMAIL: '/icons/mail.svg',
  BLOG: '/icons/blog.svg',
};

const Shadow = styled.div`
  transition: 0.3s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  box-shadow: -45px 45px 10px rgba(0, 0, 0, 0.2);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  position: relative;
  top: -150px;
  left: -100px;
  transform: var(--rotate) var(--skew);

  .menu-item-header {
    font-size: 1.5em;
  }

  .menu-item {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0.5em;
  }

  .icons {
    width: 28px;
    fill: red;
    z-index: 1;
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
    height: 8px;
    background-color: #494949;
    transform: translateX(-4px) skew(-45deg);
  }

  &::after {
    top: 0px;
    left: -8px;
    width: 8px;
    height: 100%;
    background-color: #898d90;
    transform: translateY(4px) skew(0, -45deg);
  }
`;

const Menu = () => {
  return (
    <>
      <Wrapper>
        <MenuList className="menu-list" fullWidth>
          <MenuListItem square disabled className="menu-item-header">
            <span role="img" aria-label="🔗">
              🔗
            </span>
          </MenuListItem>
          <Separator />
          <MenuListItem className="menu-item">
            <span role="img" aria-label="github">
              <a href="https://github.com/khakhid">
                <object data={ICONS.GITHUB} className="icons" />
              </a>
            </span>
          </MenuListItem>
          <MenuListItem className="menu-item">
            <span role="img" aria-label="linkedin">
              <a href="https://github.com/khakhid">
                <object data={ICONS.LINKEDIN} className="icons" />
              </a>
            </span>
          </MenuListItem>
          <MenuListItem className="menu-item">
            <span role="img" aria-label="email">
              <a href="https://github.com/khakhid">
                <object data={ICONS.EMAIL} className="icons" />
              </a>
            </span>
          </MenuListItem>
          <MenuListItem className="menu-item">
            <span role="img" aria-label="blog">
              <a href="https://github.com/khakhid">
                <object data={ICONS.BLOG} className="icons" />
              </a>
            </span>
          </MenuListItem>
          <Shadow />
        </MenuList>
      </Wrapper>
    </>
  );
};

export default Menu;
