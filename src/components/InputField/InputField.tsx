import { useState } from "react";
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
  onChange?: (value: number) => void;
  error?: string;
  value: number;
};

const InputField: React.FC<PropsType> = ({
  labelText,
  type = "number",
  icon,
  onChange,
  value,
}) => {
  const [error, setError] = useState("");
  const handleChange = (value: number) => {
    if (value === 0) {
      setError("Can't be zero");
      onChange?.(0);
    } else {
      onChange?.(value);
      setError("");
    }
  };
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
          onChange={(e) =>
            handleChange(e.target.value === "" ? 0 : Number(e.target.value))
          }
          value={value ? value : ""}
        />
      </InputWrapper>
    </Container>
  );
};
export default InputField;
