import styled from "styled-components";

interface SelectButtonProps {
  isSelected: boolean;
}

export const TipSelection = styled.div`
    padding-top:1rem;
    padding-left:10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const SelectButton= styled.button<SelectButtonProps>`
    width: 5rem;
    height:2.5rem;
    margin-bottom: 10px;
    padding: 10px 0;
    border: none;
    border-radius: 5px;
    background-color: ${({ isSelected, theme }) =>
      isSelected ? theme.colors.background : theme.colors.primary};
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
    @media (max-width: 680px) {
    width:8rem;
}
`

export const CustomInput= styled.input`
    width: 5rem;
    padding: 10px;
        height:2.5rem;

    border: 2px solid #f3f9fa;
    border-radius: 5px;
    font-size: 14px;
     text-align: right;
  &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
      @media (max-width: 680px) {
    width:8rem;
}
`