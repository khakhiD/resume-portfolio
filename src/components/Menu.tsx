import Shadow from './Shadow';
import { MenuList, MenuListItem, Separator } from 'react95';
import styled from 'styled-components';

const links = [
  {
    name: 'GITHUB',
    icon: '/icons/github.svg',
    link: 'https://github.com/khakhid',
  },
  {
    name: 'LINKEDIN',
    icon: '/icons/linkedin.svg',
    link: 'https://linkedin.com',
  },
  { name: 'EMAIL', icon: '/icons/mail.svg', link: 'mailto:bfwanso@naver.com' },
  {
    name: 'BLOG',
    icon: '/icons/blog.svg',
    link: 'https://khakidiggin-log.vercel.app',
  },
];

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
    cursor: pointer;
    .icons {
      width: 28px;
    }
    &:hover {
      background-color: var(--blue);
    }
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
          {links.map((item, index) => (
            <MenuListItem
              key={index}
              className="menu-item"
              as="a"
              // @ts-expect-error: react95
              href={item.link}
              target="_blank">
              <span role="img" aria-label={item.name}>
                <object data={item.icon} className="icons" />
              </span>
            </MenuListItem>
          ))}
          <Shadow />
        </MenuList>
      </Wrapper>
    </>
  );
};

export default Menu;
