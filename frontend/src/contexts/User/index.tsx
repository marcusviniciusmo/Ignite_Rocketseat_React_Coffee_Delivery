import { ReactNode, createContext, useState } from 'react';

interface UserContextType {
  paymentType: string;
  onHandlePaymentType: (type: string) => void;
}

interface UserContextProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProps) {
  const [paymentType, setPaymentType] = useState<string>('');

  function onHandlePaymentType(type: string) {
    setPaymentType(type);
  }

  return (
    <UserContext.Provider value={{ paymentType, onHandlePaymentType }}>
      {children}
    </UserContext.Provider>
  );
}
