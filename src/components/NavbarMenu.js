import React from "react";
import styled from "styled-components";

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const NavbarMenu = () => {
  return (
    <Menu>
      <MenuItem>Home</MenuItem>
      <MenuItem>About</MenuItem>
      <MenuItem>Roadmap</MenuItem>
      <MenuItem>Showcase</MenuItem>
      <MenuItem>Team</MenuItem>
      <MenuItem>FAQ</MenuItem>
    </Menu>
  );
};

export default NavbarMenu;
