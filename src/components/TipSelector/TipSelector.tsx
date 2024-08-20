import { useState } from "react";
import { TipSelection, SelectButton, CustomInput } from "./TipSelector.styles";

type PropsType = {
  onChange: (value: number) => void;
  value: number;
};

const TipSelector: React.FC<PropsType> = ({ onChange, value }) => {
  const percentages = [5, 10, 15, 25, 50];
  const [customValue, setCustomValue] = useState<string>("");

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setCustomValue(inputValue);

    const numericValue = parseFloat(inputValue);
    if (!isNaN(numericValue)) {
      onChange(numericValue);
    }
  };

  const getCustomValue = () => {
    if (percentages.includes(value) || value === 0) return "";
    return value.toString();
  };

  return (
    <TipSelection>
      {percentages.map((item, index) => (
        <SelectButton
          type="button"
          key={index}
          onClick={() => onChange(item)}
          isSelected={item === value}
        >
          {item}%
        </SelectButton>
      ))}
      <CustomInput
        placeholder="Custom"
        value={customValue || getCustomValue()}
        onChange={handleCustomChange}
      />
    </TipSelection>
  );
};

export default TipSelector;
