import CoffeeDeliveryLogo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';
import {
  HeaderContainer,
  Image,
  Actions,
  Location,
  City,
  Cart,
} from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <Image src={CoffeeDeliveryLogo} alt="" title="Home Coffee Delivery" />
      </NavLink>

      <Actions>
        <NavLink to="/checkout">
          <Location title="Meu endereço">
            <MapPin weight="fill" size={22} />
            <City>Porto Alegre, RS</City>
          </Location>
        </NavLink>

        <NavLink to="/checkout">
          <Cart title="Checkout">
            <ShoppingCart weight="fill" size={22} />
          </Cart>
        </NavLink>
      </Actions>
    </HeaderContainer>
  );
}
