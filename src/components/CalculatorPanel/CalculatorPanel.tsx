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

// Define the default values using the interface
const defaultValues: CalcValues = {
  billAmount: 0,
  noOfPeople: 0,
  tipPercent: 0,
  tipAmount: 0,
  totalAmount: 0,
};

const CalculatorPanel = () => {
  const [calcValues, setCalcValues] = useState<CalcValues>(defaultValues);

  const setBillAmount = (amount: number) => {
    setCalcValues({ ...calcValues, billAmount: amount });
  };

  const setNoOfPeople = (number: number) => {
    setCalcValues({ ...calcValues, noOfPeople: number });
  };

  const setTipPercent = (value: number) => {
    setCalcValues({ ...calcValues, tipPercent: value });
  };

  const resetValues = () => {
    setCalcValues(defaultValues);
  };

  useEffect(() => {
    if (
      calcValues.noOfPeople &&
      calcValues.billAmount &&
      calcValues.tipPercent
    ) {
      const tipAmount =
        ((calcValues.tipPercent / 100) * calcValues.billAmount) /
        calcValues.noOfPeople;
      setCalcValues({
        ...calcValues,
        tipAmount: tipAmount,
        totalAmount: calcValues.billAmount / calcValues.noOfPeople + tipAmount,
      });
    }
  }, [calcValues.noOfPeople, calcValues.tipPercent, calcValues.billAmount]);

  return (
    <Container>
      <LeftPanel>
        <InputField
          labelText={"Bill"}
          icon={dollarIcon}
          onChange={setBillAmount}
          value={calcValues.billAmount}
        />
        <TipSelector onChange={setTipPercent} value={calcValues.tipPercent} />
        <InputField
          labelText={"Number of People"}
          icon={dollarIcon}
          onChange={setNoOfPeople}
          value={calcValues.noOfPeople}
        />
      </LeftPanel>
      <RightPanel>
        <ResultText heading="Tip Amount" amount={calcValues.tipAmount} />
        <ResultText heading="Total" amount={calcValues.totalAmount} />
        <ResetButton onClick={resetValues} />
      </RightPanel>
    </Container>
  );
};
export default CalculatorPanel;
