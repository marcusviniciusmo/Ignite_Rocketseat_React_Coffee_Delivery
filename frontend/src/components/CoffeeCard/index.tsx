import ExpressoTradicional from '../../assets/expressoTradicional.png';
import { ShoppingCart } from 'phosphor-react';
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

export function CoffeeCard() {
  return (
    <CoffeeCardContainer>
      <Image src={ExpressoTradicional} alt="Café Expresso tradicional" />
      <Tags>
        <Tag>Tradicional</Tag>
        <Tag>Com Leite</Tag>
      </Tags>
      <Name>Expresso Tradicional</Name>
      <Description>
        O tradicional café feito com água quente e grãos moídos
      </Description>
      <Buy>
        <span>
          R$ <span className="coffeePrice">9,90</span>
        </span>
        <Actions>
          <span>- 1 +</span>
          <Button>
            <ShoppingCart weight="fill" />
          </Button>
        </Actions>
      </Buy>
    </CoffeeCardContainer>
  );
}
