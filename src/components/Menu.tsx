import { MenuList, MenuListItem, Separator, Handle } from 'react95';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 25%;
  left: 30%;
  align-items: center;

  & > * {
    margin-right: 1rem;
  }

  transform: rotate(-25deg) skew(25deg);

  .menu-item-header {
    font-size: 1.2em;
  }

  .menu-item {
    margin-left: 0.2em;
    margin-right: 0.2em;
  }
`;

const Menu = () => {
  return (
    <Wrapper>
      {/* <MenuList>
        <MenuListItem primary>Photos</MenuListItem>
        <MenuListItem
        // TODO: Come up with a more elegant way to allow props when `as` is used
        >
          Link
        </MenuListItem>
        <MenuListItem disabled>Other</MenuListItem>
      </MenuList> */}
      <MenuList inline className="menu-list" fullWidth>
        <MenuListItem square disabled className="menu-item-header">
          <span role="img" aria-label="🔗">
            🔗
          </span>
        </MenuListItem>
        <Handle size={38} />
        <MenuListItem className="menu-item">
          <a href="https://github.com/khakhid">Github</a>
        </MenuListItem>
        <MenuListItem className="menu-item">Linkedin</MenuListItem>
        <MenuListItem className="menu-item">Email</MenuListItem>
        <MenuListItem className="menu-item">Blog</MenuListItem>
      </MenuList>
      {/* <MenuList>
        <MenuListItem primary size="sm">
          View
        </MenuListItem>
        <Separator />
        <MenuListItem size="sm">Paste</MenuListItem>
        <MenuListItem size="sm">Paste Shortcut</MenuListItem>
        <MenuListItem size="sm">Undo Copy</MenuListItem>
        <Separator />
        <MenuListItem size="sm">Properties</MenuListItem>
      </MenuList> */}
    </Wrapper>
  );
};

export default Menu;
