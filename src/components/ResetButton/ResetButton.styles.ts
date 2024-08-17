import styled from "styled-components";


export const Container = styled.div`
    align-items: center;
    margin-top:1rem;

`

export const Button=styled.button`
    width:90%;
    padding:10px;
    border: none;
    border-radius: 5px;
    background-color: ${(props) => props.theme.colors.background};
    color:${(props) => props.theme.colors.primary};
    font-size: 18px;
    cursor: pointer;
    margin:5%;
    `
    