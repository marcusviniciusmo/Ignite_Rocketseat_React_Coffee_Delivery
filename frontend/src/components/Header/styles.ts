import styled from 'styled-components';

interface ActionButtonsType {
  height: string;
  borderRadius: string;
}

const ActionButtonsProps: ActionButtonsType = {
  height: '3.8rem',
  borderRadius: '0.6rem',
};

const widthCartButton = '3.8rem';
const widthCounterItems = '2rem';
const heightCounterItems = '2rem';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.background};
  width: 100%;
  padding: 3.2rem 16rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: var(--max-z-index);

  a {
    text-decoration: none;
  }
`;

export const Image = styled.img`
  cursor: pointer;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const City = styled.span`
  color: ${(props) => props.theme.secondaryColorDark};
  font-size: 1.4rem;
  user-select: none;
`;

export const Location = styled.div`
  background: ${(props) => props.theme.secondaryColorLight};
  color: ${(props) => props.theme.secondaryColor};
  height: ${ActionButtonsProps.height};
  border-radius: ${ActionButtonsProps.borderRadius};
  width: max-content;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.secondaryColorLight};

    ${City} {
      color: ${(props) => props.theme.secondaryColorLight};
    }
  }
`;

export const Cart = styled.div`
  background: ${(props) => props.theme.primaryColorLight};
  color: ${(props) => props.theme.primaryColorDark};
  height: ${ActionButtonsProps.height};
  border-radius: ${ActionButtonsProps.borderRadius};
  width: 3.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
  cursor: pointer;
  position: relative;

  &:hover {
    background: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryColorLight};
  }
`;

export const CounterItems = styled.div`
  background: ${(props) => props.theme.primaryColorDark};
  color: ${(props) => props.theme.white};
  font-size: 1.2rem;
  font-weight: bold;
  width: ${widthCounterItems};
  height: ${heightCounterItems};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: calc(${ActionButtonsProps.height} - (${heightCounterItems} / 2));
  left: calc(${widthCartButton} - (${widthCounterItems} / 2));
`;
