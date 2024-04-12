import styled from 'styled-components';

export const SuccessContainer = styled.div`
  background: ${(props) => props.theme.background};
  min-height: 100vh;
  padding: 5rem 16rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const SuccessMessage = styled.div`
  color: ${(props) => props.theme.primaryColorDark};
  font-family: 'Baloo 2';
  font-size: 3.2rem;
  font-weight: 900;
  user-select: none;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.baseSubtitle};
  font-size: 2rem;
  user-select: none;
`;

export const Delivery = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
`;

export const OrderInfo = styled.div`
  width: 52.6rem;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid transparent;
    border-radius: 0.6rem 3.6rem;
    background: linear-gradient(
        to right,
        ${(props) => props.theme.primaryColor},
        ${(props) => props.theme.secondaryColor}
      )
      border-box;
    mask:
      linear-gradient(#ffffff 0 0) padding-box,
      linear-gradient(#ffffff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }
`;

export const OrderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const IconContainer = styled.div`
  color: ${(props) => props.theme.background};
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.8rem;
  border-radius: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &.iconLocation {
    background: ${(props) => props.theme.secondaryColor};
  }

  &.iconTimer {
    background: ${(props) => props.theme.primaryColor};
  }

  &.iconCurrency {
    background: ${(props) => props.theme.primaryColorDark};
  }
`;

export const TextRow = styled.div`
  color: ${(props) => props.theme.baseText};
  font-size: 1.6rem;

  .dataUser {
    font-weight: bold;
  }
`;
