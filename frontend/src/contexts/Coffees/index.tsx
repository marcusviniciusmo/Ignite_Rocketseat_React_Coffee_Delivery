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
  onAddItem: (id: number) => void;
  onRemoveItem: (id: number) => void;
}

interface CoffeesProviderProps {
  children: ReactNode;
}

export const CoffeesContext = createContext({} as CoffeeContextType);

export function CoffeesContextProvider({ children }: CoffeesProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  const maxItemQuantity = 99;
  const minItemQuantity = 0;

  useEffect(() => {
    setCoffees(Catalog.coffees);
  }, []);

  function onAddItem(coffeeId: number) {
    setCoffees((prevCoffees) =>
      prevCoffees.map((item) =>
        item.id === coffeeId
          ? {
              ...item,
              quantity:
                item.quantity < maxItemQuantity
                  ? item.quantity + 1
                  : item.quantity,
            }
          : item,
      ),
    );
  }

  function onRemoveItem(coffeeId: number) {
    setCoffees((prevCoffees) =>
      prevCoffees.map((item) =>
        item.id === coffeeId
          ? {
              ...item,
              quantity:
                item.quantity > minItemQuantity
                  ? item.quantity - 1
                  : item.quantity,
            }
          : item,
      ),
    );
  }

  return (
    <CoffeesContext.Provider value={{ coffees, onAddItem, onRemoveItem }}>
      {children}
    </CoffeesContext.Provider>
  );
}
