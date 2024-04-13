import { useContext } from 'react';
import { CoffeesContext } from '../../contexts/Coffees';
import { CoffeeCard } from '../CoffeeCard';
import { CoffeeListContainer, Text, List } from './styles';

export function CoffeeList() {
  const { coffees } = useContext(CoffeesContext);

  return (
    <CoffeeListContainer>
      <Text>Nossos cafés</Text>
      <List>
        {coffees &&
          coffees.map((coffee) => {
            return <CoffeeCard key={coffee.id} coffee={coffee} />;
          })}
      </List>
    </CoffeeListContainer>
  );
}
