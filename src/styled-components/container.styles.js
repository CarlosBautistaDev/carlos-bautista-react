import styled from "styled-components";

export const Container = styled.div`
  min-width: 1000px;
  max-width: 1440px;
  margin: auto;
  height: auto;
  background-color: #f0f6ff;
`;
export const Header = styled.nav`
  background-color: #006fff;
  min-width: 1000px;
  max-width: 1440px;
  margin: auto;
  margin-top: 20px;
`;
export const Img = styled.img`
  &.logo {
    background-color: #006fff;
    padding-left: 25px;
  }
`;
export const P = styled(Container)`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 160%;
  color: #011b33;
  padding-left: 25px;
  padding-top: 20px;
  
`;
export const Row = styled.div`
display: flex;
`;
export const FlexLine = styled.div`
   display: flex;
   flex-direction: column;
     width: 58%;
`;
export const FlexPie = styled.div`
   display: flex;
   flex-direction: column;
     width: 40%;
`;
