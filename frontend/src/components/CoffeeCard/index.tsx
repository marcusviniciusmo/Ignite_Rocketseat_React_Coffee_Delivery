import { useContext } from 'react';
import { ShoppingCart } from 'phosphor-react';
import { CoffeesContext } from '../../contexts/Coffees';
import { Counter } from '../Counter';
import { CoffeeCardProps } from '../../@types/CoffeeCard';
import {
  CoffeeCardContainer,
  Image,
  Tags,
  Tag,
  Name,
  Description,
  Buy,
  Actions,
  Button,
} from './styles';

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const { id, name, imageUrl, description, tags, price, quantity } = coffee;

  const { addItemToCart } = useContext(CoffeesContext);

  return (
    <CoffeeCardContainer>
      <Image src={imageUrl} alt={`Café ${name}`} />
      <Tags>
        {tags.map((tag, index) => {
          return <Tag key={index}>{tag}</Tag>;
        })}
      </Tags>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Buy>
        <span>
          R${' '}
          <span className="coffeePrice">
            {quantity > 0 ? (quantity * price).toFixed(2) : price.toFixed(2)}
          </span>
        </span>
        <Actions>
          <Counter itemId={id} itemQuantity={quantity} listType="coffees" />
          <Button disabled={quantity < 1} onClick={() => addItemToCart(coffee)}>
            <ShoppingCart weight="fill" />
          </Button>
        </Actions>
      </Buy>
    </CoffeeCardContainer>
  );
}
