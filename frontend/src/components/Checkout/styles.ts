import styled from 'styled-components';

interface IconProps {
  color: string;
}

interface InputProps {
  width?: number;
}

export const CheckoutContainer = styled.div`
  background: ${(props) => props.theme.background};
  min-height: 100vh;
  padding-inline: 16rem;
  display: flex;
  align-items: flex-start;
  gap: 4rem;
`;

export const Aside = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CheckoutLayoutBase = styled.div`
  background: ${(props) => props.theme.baseCard};
  padding: 4rem;
  display: flex;
  flex-direction: column;
`;

export const FormLayout = styled(CheckoutLayoutBase)`
  width: 64rem;
  border-radius: 0.6rem;
  gap: 3.2rem;
`;

export const Text = styled.span`
  color: ${(props) => props.theme.baseSubtitle};
  font-family: 'Baloo 2';
  font-size: 1.8rem;
  font-weight: bold;
`;

export const FormHeader = styled.div`
  flex: 1;
  height: 4.4rem;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;

  .formHeaderTexts {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    .mainText {
      color: ${(props) => props.theme.baseSubtitle};
      font-size: 1.6rem;
    }

    .subText {
      color: ${(props) => props.theme.baseText};
      font-size: 1.4rem;
    }
  }
`;

export const Icon = styled.div<IconProps>`
  color: ${(props) => props.color};
  font-size: 2.2rem;
`;

export const AddressForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const InputRow = styled.div`
  flex: 1;
  display: flex;
  gap: 1.2rem;
`;

export const Input = styled.input<InputProps>`
  background: ${(props) => props.theme.baseInput};
  color: ${(props) => props.theme.baseText};
  width: ${(props) => (props.width ? props.width : '20')}rem;
  font-size: 1.4rem;
  height: 4.2rem;
  padding: 1.2rem;
  border: 0;
  border-radius: 0.4rem;

  &::placeholder {
    color: ${(props) => props.theme.baseLabel};
    font-size: 1.4rem;
  }

  &:hover {
    background: ${(props) => props.theme.baseHover};

    &::placeholder {
      color: ${(props) => props.theme.baseText};
    }
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme.primaryColorDark};
  }
`;

export const PaymentTypeForm = styled.div`
  display: flex;
  gap: 1.2rem;
`;

export const PaymentTypeSelect = styled.button`
  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.baseText};
  font-size: 1.2rem;
  text-transform: uppercase;
  width: 17.86rem;
  height: 5.1rem;
  padding: 1.6rem;
  border: 0;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  cursor: pointer;

  .paymentTypeIcon {
    color: ${(props) => props.theme.secondaryColor};
    font-size: 1.6rem;
  }

  &:hover {
    background: ${(props) => props.theme.baseHover};
    color: ${(props) => props.theme.baseSubtitle};
  }
`;

export const SubtotalLayout = styled(CheckoutLayoutBase)`
  width: 44.8rem;
  border-radius: 0.6rem 3.6rem;
  gap: 2.4rem;
`;

export const ItemCardCheckout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  position: relative;

  .divider::after {
    content: '';
    background: ${(props) => props.theme.baseButton};
    width: 100%;
    height: 0.1rem;
    position: absolute;
  }
`;

export const ItemContent = styled.div`
  width: 36.8rem;
  height: 8rem;
  padding: 0.8rem 0.4rem;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  .itemPrice {
    color: ${(props) => props.theme.baseText};
    font-size: 1.6rem;
    font-weight: bold;
  }
`;

export const ItemInfo = styled.div`
  width: 25.5rem;
  height: 6.4rem;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const ItemImage = styled.img`
  width: 6.4rem;
  height: 6.4rem;
`;

export const ItemDetails = styled.div`
  width: 17.1rem;
  height: 6.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  .itemName {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 1.6rem;
  }
`;

export const ItemActions = styled.div`
  width: 17.1rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ItemActionRemove = styled.div`
  background: ${(props) => props.theme.baseButton};
  color: ${(props) => props.theme.secondaryColor};
  font-size: 1.6rem;
  width: 9.1rem;
  height: 3.2rem;
  padding: 0 0.8rem;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  cursor: pointer;

  .itemRemoveText {
    color: ${(props) => props.theme.baseText};
    font-size: 1.2rem;
    text-transform: uppercase;

    &:hover {
      color: ${(props) => props.theme.baseSubtitle};
    }
  }

  &:hover {
    background: ${(props) => props.theme.baseHover};
    color: ${(props) => props.theme.secondaryColorDark};
  }
`;

export const TotalContainer = styled.div`
  height: 9.2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export const TotalRow = styled.div`
  color: ${(props) => props.theme.baseText};
  font-size: 1.4rem;
  height: 2.1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .itemsTotal,
  .deliveryTotal {
    font-size: 1.6rem;
  }

  &.totalRow {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 2rem;
    font-weight: bold;
    height: 2.6rem;
  }
`;

export const ButtonConfirm = styled.button`
  background: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.white};
  text-transform: uppercase;
  width: 36.8rem;
  height: 4.6rem;
  padding: 1.2rem 0.8rem;
  border: 0;
  border-radius: 0.6rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.primaryColorDark};
  }
`;
