import styled from "styled-components";
import LogoIcon from "../assets/logos/splitter-logo.svg";
import CalculatorPanel from "../components/CalculatorPanel";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 40rem;
  @media (max-width: 680px) {
    height: 48rem;
  }
`;
const Logo = styled.img`
  width: 50px;
  height: 40px;
  margin-top: 2rem;
`;

const HomePage = () => {
  return (
    <Container>
      <Logo src={LogoIcon} alt="Logo" />
      <CalculatorPanel />
    </Container>
  );
};

export default HomePage;
