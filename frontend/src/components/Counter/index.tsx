import { Minus, Plus } from 'phosphor-react';
import { CounterContainer, Icon, QuantityItem } from './styles';

export function Counter() {
  return (
    <CounterContainer>
      <Icon title="Remover item" className="counterIcon">
        <Minus weight="bold" />
      </Icon>
      <QuantityItem>10</QuantityItem>
      <Icon title="Adicionar item" className="counterIcon">
        <Plus weight="bold" />
      </Icon>
    </CounterContainer>
  );
}
