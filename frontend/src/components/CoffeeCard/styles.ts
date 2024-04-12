import styled from 'styled-components';

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme.baseCard};
  width: 25.6rem;
  height: 31rem;
  border-radius: 0.6rem 3.6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme.white};
  }
`;

export const Image = styled.img`
  margin-top: -2rem;
  width: 10rem;
  height: 10rem;
`;

export const Tags = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const Tag = styled.div`
  background: ${(props) => props.theme.primaryColorLight};
  color: ${(props) => props.theme.primaryColorDark};
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  height: 2.1rem;
  padding: 0.4rem 0.8rem;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Name = styled.span`
  color: ${(props) => props.theme.baseSubtitle};
  font-family: 'Baloo 2';
  font-size: 2rem;
  font-weight: bold;
`;

export const Description = styled.div`
  color: ${(props) => props.theme.baseLabel};
  font-size: 1.4rem;
  text-align: center;
  width: 21.6rem;
  height: 3.6rem;
`;

export const Buy = styled.div`
  margin-top: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  span {
    color: ${(props) => props.theme.baseText};
    font-size: 1.4rem;
  }

  .coffeePrice {
    font-family: 'Baloo 2';
    font-size: 2.4rem;
    font-weight: 900;
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.secondaryColorDark};
  color: ${(props) => props.theme.baseCard};
  font-size: 2.2rem;
  border: 0;
  border-radius: 0.6rem;
  width: 3.8rem;
  height: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.1s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.secondaryColor};
  }
`;
