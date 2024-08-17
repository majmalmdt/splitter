import styled from "styled-components";

export const Container = styled.div`
  height:20rem;
  width: 40rem;
  background-color:#FFF;
  border-radius:1rem;
  display:flex;
  @media (max-width: 680px) {
    height:40rem;
    width:20rem;
    flex-direction: column;
  }

`;

export const LeftPanel=styled.div`
    height:18rem;
    width:19rem;
    margin:1rem;
    @media (max-width: 680px) {
      height:19rem;
      width:18rem;
    }
`;

export const RightPanel=styled.div`
    height:18rem;
    width:19rem;
    background-color:${(props) => props.theme.colors.primary};
    margin:1rem;
    border-radius:1rem;
    @media (max-width: 680px) {
      height:19rem;
      width:18rem;
    }

`;