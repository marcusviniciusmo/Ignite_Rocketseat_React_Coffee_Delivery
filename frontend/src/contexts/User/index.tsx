import { ChangeEvent, ReactNode, createContext, useState } from 'react';

interface UserAddress {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
}

interface UserContextType {
  userAddress: UserAddress | null;
  paymentType: string;
  onHandleUpdateUserAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onHandleSetPaymentType: (type: string) => void;
}

interface UserContextProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProps) {
  const [paymentType, setPaymentType] = useState<string>('');
  const [userAddress, setUserAddress] = useState<UserAddress>({
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
  });

  function onHandleSetPaymentType(type: string) {
    setPaymentType(type);
  }

  function onHandleUpdateUserAddress(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setUserAddress((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  return (
    <UserContext.Provider
      value={{
        userAddress,
        paymentType,
        onHandleUpdateUserAddress,
        onHandleSetPaymentType,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
