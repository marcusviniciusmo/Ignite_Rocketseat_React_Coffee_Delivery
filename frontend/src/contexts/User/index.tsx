import { ChangeEvent, ReactNode, createContext, useState } from 'react';

interface UserAddress {
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface UserContextType {
  userAddress: UserAddress | null;
  paymentType: string;
  handleUpdateUserAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onHandlePaymentType: (type: string) => void;
}

interface UserContextProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProps) {
  const [userAddress, setUserAddress] = useState<UserAddress>({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
  });
  const [paymentType, setPaymentType] = useState<string>('');

  function onHandlePaymentType(type: string) {
    setPaymentType(type);
  }

  function handleUpdateUserAddress(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setUserAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <UserContext.Provider
      value={{
        userAddress,
        paymentType,
        handleUpdateUserAddress,
        onHandlePaymentType,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
