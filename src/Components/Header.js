import { StyledHeader, Nav, Logo, Heading } from "./Styles/Header.styled";

export default function Header() {
  return (
    <StyledHeader>
      <Nav>
        <Logo src="./images/P.p.jpeg" alt="profile picture" />
        <Heading>the simple calculator</Heading>
      </Nav>
    </StyledHeader>
  );
}
