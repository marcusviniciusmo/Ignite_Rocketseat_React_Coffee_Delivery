import { ChangeEvent, ReactNode, createContext, useState } from 'react';
import { Address } from '../../@types/Address';

interface UserContextType {
  userAddress: Address;
  paymentType: string;
  onHandleUpdateUserAddress: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSetPaymentType: (type: string) => void;
}

interface UserContextProps {
  children: ReactNode;
}

export const UserContext = createContext({} as UserContextType);

export function UserContextProvider({ children }: UserContextProps) {
  const [paymentType, setPaymentType] = useState<string>('');
  const [userAddress, setUserAddress] = useState<Address>({
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
  });

  function onClickSetPaymentType(type: string) {
    setPaymentType(type);
  }

  function onHandleUpdateUserAddress(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setUserAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  }

  return (
    <UserContext.Provider
      value={{
        userAddress,
        paymentType,
        onHandleUpdateUserAddress,
        onClickSetPaymentType,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
