import styled from 'styled-components';

export const CoffeeListContainer = styled.div`
  background: ${(props) => props.theme.background};
  padding-inline: 16rem;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.baseSubtitle};
  font-family: 'Baloo 2';
  font-size: 3.2rem;
  font-weight: 900;
`;

export const List = styled.div`
  margin-block: 4rem;
  display: flex;
  flex-wrap: wrap;
  gap: 4rem 3.2rem;
`;
