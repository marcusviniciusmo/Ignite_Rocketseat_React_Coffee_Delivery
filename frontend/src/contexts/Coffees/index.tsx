import { ReactNode, createContext, useEffect, useState } from 'react';
import { Catalog } from '../../data/CoffeeList';
import { Coffee } from '../../@types/CoffeeCard';

interface CoffeeContextType {
  coffees: Coffee[] | null;
  coffeesToCheckout: Coffee[] | null;
  totalItemsToCart: number;
  subtotalItems: number;
  deliveryRate: number;
  totalItems: number;
  minDeliveryTime: number;
  maxDeliveryTime: number;
  onIncreaseQuantity: (coffeId: number, coffeesList: string) => void;
  onDecreaseQuantity: (coffeId: number, coffeesList: string) => void;
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
  const [subtotalItems, setSubtotalItems] = useState<number>(0);
  const [totalItems, setTotalItems] = useState<number>(0);

  const deliveryRate = subtotalItems ? 3.5 : 0;
  const minDeliveryTime = 20;
  const maxDeliveryTime = 30;

  const maxItemQuantity = 99;
  const minItemQuantity = 0;

  useEffect(() => {
    setCoffees(Catalog.coffees);
  }, []);

  useEffect(() => {
    getSubtotalItems(coffeesToCheckout);
    setTotalItems(subtotalItems + deliveryRate);
  }, [coffeesToCheckout, subtotalItems, deliveryRate]);

  function onIncreaseQuantity(coffeeId: number, coffeesList: string) {
    const updateList = (prevList: Coffee[]) =>
      prevList.map((item) =>
        item.id === coffeeId
          ? {
              ...item,
              quantity:
                item.quantity < maxItemQuantity
                  ? item.quantity + 1
                  : item.quantity,
            }
          : item,
      );

    if (coffeesList === 'coffees') {
      setCoffees(updateList!);
    } else if (coffeesList === 'coffeesToCheckout') {
      setCoffeesToCheckout(updateList);
    }
  }

  function onDecreaseQuantity(coffeeId: number, coffeesList: string) {
    const updateList = (prevList: Coffee[]) =>
      prevList.map((item) =>
        item.id === coffeeId
          ? {
              ...item,
              quantity:
                item.quantity > minItemQuantity
                  ? item.quantity - 1
                  : item.quantity,
            }
          : item,
      );

    if (coffeesList === 'coffees') {
      setCoffees(updateList);
    } else if (coffeesList === 'coffeesToCheckout') {
      setCoffeesToCheckout(updateList);
    }
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

  function getSubtotalItems(coffeesList: Coffee[]) {
    let subtotal = 0;

    coffeesList.forEach((item) => {
      const count = item.quantity * item.price;

      subtotal += count;
    });

    setSubtotalItems(subtotal);
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffees,
        coffeesToCheckout,
        totalItemsToCart,
        subtotalItems,
        deliveryRate,
        totalItems,
        minDeliveryTime,
        maxDeliveryTime,
        onIncreaseQuantity,
        onDecreaseQuantity,
        addItemToCart,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
