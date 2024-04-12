import { useEffect, useState } from 'react';
import { CoffeeCard } from '../CoffeeCard';
import { Catalog } from '../../data/CoffeeList';
import { CoffeeDataList } from '../../@types/CoffeeCard';
import { CoffeeListContainer, Text, List } from './styles';

export function CoffeeList() {
  const [catalog, setCatalog] = useState<CoffeeDataList>({
    coffees: [],
  });

  useEffect(() => {
    setCatalog(Catalog);
  }, []);

  return (
    <CoffeeListContainer>
      <Text>Nossos cafés</Text>
      <List>
        {catalog.coffees.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />;
        })}
      </List>
    </CoffeeListContainer>
  );
}
