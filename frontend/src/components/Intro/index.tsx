import IntroCoffeeDelivery from '../../assets/introCoffeeDelivery.png';
import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react';
import { IntroContainer, Texts, Title, Items, Item, Icon } from './styles';

export function Intro() {
  return (
    <IntroContainer>
      <Texts>
        <Title>
          <span className="mainTitle">
            Encontre o café perfeito para qualquer hora do dia
          </span>

          <span className="subTitle">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>
        </Title>

        <Items>
          <Item>
            <Icon className="cart">
              <ShoppingCart weight="fill" />
            </Icon>
            <span>Compra e simples segura</span>
          </Item>

          <Item>
            <Icon className="package">
              <Package weight="fill" />
            </Icon>
            <span>Embalagem mantém o café intacto</span>
          </Item>

          <Item>
            <Icon className="timer">
              <Timer weight="fill" />
            </Icon>
            <span>Entrega rápida e rastreada</span>
          </Item>

          <Item>
            <Icon className="coffee">
              <Coffee weight="fill" />
            </Icon>
            <span>O café chega fresquinho até você</span>
          </Item>
        </Items>
      </Texts>
      <img src={IntroCoffeeDelivery} alt="Coffee Delivery" />
    </IntroContainer>
  );
}
