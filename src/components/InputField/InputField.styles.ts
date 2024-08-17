import styled from "styled-components";

export const Container = styled.div`
  margin-top:1rem;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const Label= styled.label`
    font-size: 12px;
    color: #7f9c9f;`;


export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;

  img {
    width: 8px;
    height: 16px;
  }
`;

export const Input = styled.input<{ hasIcon: boolean }>`
  width: 100%;
  padding: ${({ hasIcon }) => (hasIcon ? "10px 10px 10px 36px" : "10px")};
  font-size: 16px;
  border: 2px solid #f3f9fa;
  color:  ${(props) => props.theme.colors.primary};
  font-weight: bolder;
  border-radius: 4px;
  outline: none;
  text-align: right;
  &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

  &:focus {
    border-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const ErrorText= styled.div`
    color: #e17052;
    font-size: 12px;
`

export const TextContainer = styled.div`
    display:flex;
    justify-content: space-between;
`