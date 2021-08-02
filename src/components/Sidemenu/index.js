import {
  SideMenuWrapper,
  MenuIcon,
  CloseIcon,
  MenuItems,
  MenuLink,
  MenuBtnWrap,
  MenuBtn,
} from "./SideMenuElements";

const SideMenu = ({ isOpen, toggle }) => {
  return (
    <SideMenuWrapper isOpen={isOpen}>
      <MenuIcon>
        <CloseIcon onClick={toggle} />
      </MenuIcon>
      <MenuItems>
        <MenuLink to="./">Pizzas</MenuLink>
        <MenuLink to="./">Deserts</MenuLink>
        <MenuLink to="./">Full Menu</MenuLink>
      </MenuItems>
      <MenuBtnWrap>
        <MenuBtn to="./">Order Now</MenuBtn>
      </MenuBtnWrap>
    </SideMenuWrapper>
  );
};

export default SideMenu;
