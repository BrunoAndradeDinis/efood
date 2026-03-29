import styled from 'styled-components'

export const RestaurantsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 80px;
  padding: 80px 395px;
  background-color: #fff8f2;

  @media (max-width: 1600px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 80px 280px;
  }
  @media (max-width: 1500px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 80px 220px;
  }

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 80px 180px;
  }

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 80px 120px;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 80px 60px;
  }
`
