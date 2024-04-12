import { Minus, Plus } from 'phosphor-react';
import { CounterProps } from '../../@types/Counter';
import { CounterContainer, Icon, QuantityItem } from './styles';

export function Counter({ itemQuantity }: CounterProps) {
  return (
    <CounterContainer>
      <Icon title="Remover item" className="counterIcon">
        <Minus weight="bold" />
      </Icon>
      <QuantityItem>{itemQuantity}</QuantityItem>
      <Icon title="Adicionar item" className="counterIcon">
        <Plus weight="bold" />
      </Icon>
    </CounterContainer>
  );
}
