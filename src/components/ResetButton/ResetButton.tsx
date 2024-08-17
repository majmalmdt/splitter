import { Button, Container } from "./ResetButton.styles";

type PropsType = {
  onClick: () => void;
};

const ResetButton: React.FC<PropsType> = ({ onClick }) => {
  return (
    <Container>
      <Button onClick={onClick}>Reset</Button>
    </Container>
  );
};
export default ResetButton;
