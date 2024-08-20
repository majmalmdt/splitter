import {
  Container,
  Input,
  Label,
  InputWrapper,
  IconWrapper,
  ErrorText,
  TextContainer,
} from "./InputField.styles";

type PropsType = {
  labelText: string;
  type?: string;
  icon?: string;
  onChange: (value: number | null) => void;
  error?: string;
  value: number;
};

const InputField: React.FC<PropsType> = ({
  labelText,
  type = "number",
  icon,
  onChange,
  value,
  error,
}) => {
  return (
    <Container>
      <TextContainer>
        <Label>{labelText}</Label>
        <ErrorText>{error}</ErrorText>
      </TextContainer>
      <InputWrapper>
        {icon && (
          <IconWrapper>
            <img src={icon} alt="icon" />
          </IconWrapper>
        )}
        <Input
          type={type}
          hasIcon={!!icon}
          hasError={!!error}
          onChange={(e) => {
            onChange(e.target.value ? Number(e.target.value) : null);
          }}
          value={value ? value : value === 0 ? 0 : ""}
        />
      </InputWrapper>
    </Container>
  );
};
export default InputField;
