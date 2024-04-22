import { useContext } from 'react';
import { Minus, Plus } from 'phosphor-react';
import { CoffeesContext } from '../../contexts/Coffees';
import { CounterProps } from '../../@types/Counter';
import { CounterContainer, Icon, QuantityItem } from './styles';

export function Counter({
  itemId,
  itemQuantity,
  listType,
  className,
}: CounterProps) {
  const { onIncreaseQuantity, onDecreaseQuantity } = useContext(CoffeesContext);

  return (
    <CounterContainer className={className}>
      <Icon
        title="Remover item"
        className="counterIcon"
        onClick={() => onDecreaseQuantity(itemId, listType)}
      >
        <Minus weight="bold" />
      </Icon>
      <QuantityItem>{itemQuantity}</QuantityItem>
      <Icon
        title="Adicionar item"
        className="counterIcon"
        onClick={() => onIncreaseQuantity(itemId, listType)}
      >
        <Plus weight="bold" />
      </Icon>
    </CounterContainer>
  );
}
