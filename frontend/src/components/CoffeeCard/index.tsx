import { ShoppingCart } from 'phosphor-react';
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
  const { name, imageUrl, description, tags, price } = coffee;

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
          R$ <span className="coffeePrice">{price.toFixed(2)}</span>
        </span>
        <Actions>
          <Counter />
          <Button>
            <ShoppingCart weight="fill" />
          </Button>
        </Actions>
      </Buy>
    </CoffeeCardContainer>
  );
}
