import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  justify-content: space-around;
  margin: 40px auto;
  max-width: 1450px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 40px;
  justify-content: center;

  @media (max-width: 1249px) {
    grid-template-columns: repeat(auto-fit, minmax(28%, 1fr));
    
  }
  @media (max-width: 950px) {
    grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
    grid-gap: 20px;
  }
`;
