import { ReactNode, createContext, useEffect, useState } from 'react';
import { Catalog } from '../../data/CoffeeList';

interface Coffee {
  id: number;
  name: string;
  imageUrl: string;
  tags: string[];
  description: string;
  price: number;
  quantity: number;
}

interface CoffeeContextType {
  coffees: Coffee[] | null;
}

interface CoffeesProviderProps {
  children: ReactNode;
}

export const CoffeesContext = createContext({} as CoffeeContextType);

export function CoffeesContextProvider({ children }: CoffeesProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    setCoffees(Catalog.coffees);
  }, [coffees]);

  return (
    <CoffeesContext.Provider value={{ coffees }}>
      {children}
    </CoffeesContext.Provider>
  );
}
