import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";
import NavbarMenu from "../components/NavbarMenu";
import Button from "../components/Button";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
`;

const Navigation = () => {
  return (
    <Section>
      <Navbar>
        <Logo />
        <NavbarMenu />
        <Button text="Connect Wallet" link="/wallet" />
      </Navbar>
    </Section>
  );
};

export default Navigation;
