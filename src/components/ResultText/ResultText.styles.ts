import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    align-items: center;
    padding-top:2.5rem;
    padding-right:20px;
    padding-left:20px;
    justify-content: space-between;
`

export const ResultLabel= styled.h3`
    font-size: 18px;
    color: #7f9c9f;
    text-align:left;

`

export const ResultHeading= styled.h2`
    font-size: 24px;
    color: #FFF;
    text-align:left;

`

export const AmountText= styled.h1`
    color:${(props) => props.theme.colors.secondary};
    text-align:right;
`