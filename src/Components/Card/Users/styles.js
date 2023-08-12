import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  margin: 0 auto;
  height: auto;
  max-height: width;
  width: 100%;
`;

export const Content = styled.div`
  img {
    height: 250px;
    width: 100%;
    border-radius: 3%;

    @media (max-width: 750px) {
      height: 200px;
  }
    @media (max-width: 550px) {
    height: 120px;
  }
    @media (max-width: 399px) {
    height: 80px;
  }
  }

  h3 {
    margin: 20px;

    @media (max-width: 1200px) {
    margin: 10px;
    font-size: 16px;
  }
    @media (max-width: 600px) {
    font-size: 12px;
  }
    @media (max-width: 450px) {
    margin: 5px;
    font-size: 10px;
  }
  }
`;

export const User = styled.div`
  padding: 0 20px 20px;
  display: flex;
  align-items: center;

  @media (max-width: 1200px) {
    padding: 0;
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 100%;
  }
  
`;

export const UserInfo = styled.div`
  flex-direction: column;
  padding-left: 15px;
  color: #6d6d6d;

  @media (max-width: 1200px) {
    font-size: 14px;
    
  }
  @media (max-width: 600px) {
    font-size: 12px;
    padding-top: 5px;
  }
  @media (max-width: 450px) {
    font-size: 8px;
    padding-left: 5px;
  }
  @media (max-width: 300px) {
    font-size: 7px;
    padding-left: 5px;
  }
`;
