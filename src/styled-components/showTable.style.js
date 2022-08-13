import styled from "styled-components";


export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 160%;
  color: #011b33;
  padding-left: 25px;
  padding-top: 25px;
`;
export const RowHead = styled.div`
  margin-left: 25px;
  margin-right: 25px;
  background: #a6a6a7;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  div {
    padding: 23px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: #01172c;
  }
  .name {
    padding-left: 130px;
    padding-right: 110px;
  }
`;
export const RowWhite = styled.div`
  background: #ffffff;
  border: 1px solid #e9e9e9;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 4px 4px 0px 0px;
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .nameProduct {
    flex-basis: 20%;
  }
  .img {
    display: flex;
    justify-content: center;
    flex-basis: 7%;
  }
  div {
    padding-top: 8px;
    padding-bottom: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: #01172c;
    flex-basis: 17%;  
  }
  .negative {
    color: #D6215B;
  }
  .positive {
    color: #23B794;
  }

  img {
    width: 120px;
  }
`;
export const RowGray = styled.div`
  background: #e9e9e9;
  border: 1px solid #e9e9e9;
  margin-left: 25px;
  margin-right: 25px;
  border-radius: 4px 4px 0px 0px;
  padding-top: 7px;
  padding-bottom: 7px;
  border-radius: 4px 4px 0px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .nameProduct {
    flex-basis: 20%;
  }
  .img {
    display: flex;
    justify-content: center;
    flex-basis: 7%;
  }
  div {
    padding-top: 8px;
    padding-bottom: 8px;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 160%;
    text-align: center;
    color: #01172c;
    flex-basis: 17%;
  }
  .negative {
    color: #D6215B;
  }
  .positive {
    color: #23B794;
  }

  img {
    width: 120px;
  }
 
`;
