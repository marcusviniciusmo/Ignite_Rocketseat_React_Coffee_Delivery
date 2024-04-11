import CoffeeDeliveryLogo from '../../assets/logo.svg';
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
      <Image src={CoffeeDeliveryLogo} alt="" />

      <Actions>
        <Location>
          <MapPin weight="fill" size={22} />
          <City>Porto Alegre, RS</City>
        </Location>

        <Cart>
          <ShoppingCart weight="fill" size={22} />
        </Cart>
      </Actions>
    </HeaderContainer>
  );
}
