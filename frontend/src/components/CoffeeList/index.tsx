import { CoffeeCard } from '../CoffeeCard';
import { CoffeeListContainer, Text, List } from './styles';

export function CoffeeList() {
  return (
    <CoffeeListContainer>
      <Text>Nossos cafés</Text>
      <List>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </List>
    </CoffeeListContainer>
  );
}
