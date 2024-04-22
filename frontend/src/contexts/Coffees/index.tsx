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
  coffeesToCheckout: Coffee[] | null;
  totalItemsToCart: number;
  onAddItem: (id: number) => void;
  onRemoveItem: (id: number) => void;
  addItemToCart: (coffee: Coffee) => void;
}

interface CoffeesProviderProps {
  children: ReactNode;
}

export const CoffeesContext = createContext({} as CoffeeContextType);

export function CoffeesContextProvider({ children }: CoffeesProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const [coffeesToCheckout, setCoffeesToCheckout] = useState<Coffee[]>([]);
  const [totalItemsToCart, setTotalItemsToCart] = useState<number>(0);

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

  function addItemToCart(coffee: Coffee) {
    setCoffeesToCheckout((state) => [...state, { ...coffee }]);

    setTotalItemsToCart(totalItemsToCart + 1);

    setCoffees((prevCoffees) =>
      prevCoffees.map((item) =>
        item.id === coffee.id
          ? {
              ...item,
              quantity: 0,
            }
          : item,
      ),
    );
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        coffeesToCheckout,
        totalItemsToCart,
        onAddItem,
        onRemoveItem,
        addItemToCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
