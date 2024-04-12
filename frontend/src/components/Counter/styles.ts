import styled from 'styled-components';

export const CounterContainer = styled.div`
  background: ${(props) => props.theme.baseButton};
  width: 7.2rem;
  height: 3.8rem;
  padding: 0.8rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  user-select: none;

  &:hover {
    background: ${(props) => props.theme.baseHover};
  }
`;

export const Icon = styled.div`
  color: ${(props) => props.theme.secondaryColor};
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.baseTitle};
  }
`;

export const QuantityItem = styled.div`
  color: ${(props) => props.theme.baseTitle};
  font-size: 1.6rem;
`;
