import CoffeeDeliveryLogo from '../../assets/logo.svg';
import { useContext } from 'react';
import { CoffeesContext } from '../../contexts/Coffees';
import { NavLink } from 'react-router-dom';
import { MapPin, ShoppingCart } from 'phosphor-react';
import {
  HeaderContainer,
  Image,
  Actions,
  Location,
  City,
  Cart,
  CounterItems,
} from './styles';

export function Header() {
  const { totalItemsToCart } = useContext(CoffeesContext);

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
            {totalItemsToCart > 0 && (
              <CounterItems>{totalItemsToCart}</CounterItems>
            )}
            <ShoppingCart weight="fill" size={22} />
          </Cart>
        </NavLink>
      </Actions>
    </HeaderContainer>
  );
}
