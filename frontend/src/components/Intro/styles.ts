import styled from 'styled-components';

export const IntroContainer = styled.div`
  background: ${(props) => props.theme.background};
  height: 54.4rem;
  padding-inline: 16rem;
  display: flex;
  align-items: center;
  gap: 8rem;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

export const Title = styled.div`
  width: 58.8rem;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  .mainTitle {
    color: ${(props) => props.theme.baseTitle};
    font-family: 'Baloo 2';
    font-size: 4.8rem;
    font-weight: 900;
  }

  .subTitle {
    color: ${(props) => props.theme.baseSubtitle};
    font-size: 2rem;
  }
`;

export const Items = styled.div`
  width: 56.7rem;
  height: 8.4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 4rem;
`;

export const Item = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 1.2rem;

  span {
    color: ${(props) => props.theme.baseText};
    font-size: 1.6rem;
  }
`;

export const Icon = styled.div`
  color: ${(props) => props.theme.background};
  width: 3.2rem;
  height: 3.2rem;
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &.cart {
    background: ${(props) => props.theme.primaryColorDark};
  }
  &.package {
    background: ${(props) => props.theme.baseText};
  }
  &.timer {
    background: ${(props) => props.theme.primaryColor};
  }
  &.coffee {
    background: ${(props) => props.theme.secondaryColor};
  }
`;
