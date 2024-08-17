import {
  Container,
  ResultHeading,
  ResultLabel,
  AmountText,
} from "./ResultText.styles";

type PropsType = {
  heading: string;
  amount: number;
};
const ResultText: React.FC<PropsType> = ({ heading, amount }) => {
  return (
    <Container>
      <div>
        <ResultHeading>{heading}</ResultHeading>
        <ResultLabel>/person</ResultLabel>
      </div>
      <div>
        <AmountText>${amount.toFixed(2)}</AmountText>
      </div>
    </Container>
  );
};

export default ResultText;
