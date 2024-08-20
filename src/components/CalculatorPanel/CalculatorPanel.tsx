import InputField from "../InputField";
import { Container, LeftPanel, RightPanel } from "./CalculatorPanel.styles";
import dollarIcon from "../../assets/icons/dollar-icon.svg";
import TipSelector from "../TipSelector";
import ResultText from "../ResultText";
import ResetButton from "../ResetButton";
import { useEffect, useState } from "react";

interface CalcValues {
  billAmount: number;
  noOfPeople: number;
  tipPercent: number;
  tipAmount: number;
  totalAmount: number;
}

const defaultValues: CalcValues = {
  billAmount: 0,
  noOfPeople: 0,
  tipPercent: 0,
  tipAmount: 0,
  totalAmount: 0,
};

const CalculatorPanel = () => {
  const [calcValues, setCalcValues] = useState<CalcValues>(defaultValues);
  const [errors, setErrors] = useState<{
    billAmount?: string;
    noOfPeople?: string;
  }>({});

  const validateField = (field: keyof CalcValues, value: number | null) => {
    const errorMessage = value === 0 ? "Can't be Zero" : "";
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: errorMessage,
    }));
  };

  const handleInputChange = (field: keyof CalcValues, value: number | null) => {
    validateField(field, value);
    setCalcValues((prevValues) => ({
      ...prevValues,
      [field]: value,
    }));
  };
  const resetValues = () => {
    setCalcValues(defaultValues);
    setErrors({});
  };

  useEffect(() => {
    if (
      calcValues.noOfPeople > 0 &&
      calcValues.billAmount > 0 &&
      calcValues.tipPercent >= 0
    ) {
      const tipAmount =
        ((calcValues.tipPercent / 100) * calcValues.billAmount) /
        calcValues.noOfPeople;
      setCalcValues((prevValues) => ({
        ...prevValues,
        tipAmount: tipAmount,
        totalAmount: calcValues.billAmount / calcValues.noOfPeople + tipAmount,
      }));
    }
  }, [calcValues.noOfPeople, calcValues.tipPercent, calcValues.billAmount]);

  return (
    <form>
      <Container>
        <LeftPanel>
          <InputField
            labelText={"Bill"}
            icon={dollarIcon}
            onChange={(value) => handleInputChange("billAmount", value)}
            value={calcValues.billAmount}
            error={errors.billAmount}
          />
          <TipSelector
            onChange={(value) => handleInputChange("tipPercent", value)}
            value={calcValues.tipPercent}
          />
          <InputField
            labelText={"Number of People"}
            icon={dollarIcon}
            onChange={(value) => handleInputChange("noOfPeople", value)}
            value={calcValues.noOfPeople}
            error={errors.noOfPeople}
          />
        </LeftPanel>
        <RightPanel>
          <ResultText heading="Tip Amount" amount={calcValues.tipAmount} />
          <ResultText heading="Total" amount={calcValues.totalAmount} />
          <ResetButton onClick={resetValues} />
        </RightPanel>
      </Container>
    </form>
  );
};

export default CalculatorPanel;
