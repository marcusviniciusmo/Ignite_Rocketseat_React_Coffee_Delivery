import { Minus, Plus } from 'phosphor-react';
import { CounterProps } from '../../@types/Counter';
import { CounterContainer, Icon, QuantityItem } from './styles';

export function Counter({ itemQuantity, className }: CounterProps) {
  return (
    <CounterContainer className={className}>
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
