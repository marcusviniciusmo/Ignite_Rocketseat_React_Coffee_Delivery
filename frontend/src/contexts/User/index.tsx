import {
  ChangeEvent,
  ReactNode,
  createContext,
  useEffect,
  useState,
} from 'react';

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

  useEffect(() => {
    if (userAddress.cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${userAddress.cep}/json/`)
        .then((response) => response.json())
        .then((data) => {
          const mappedData: UserAddress = {
            cep: data.cep,
            logradouro: data.logradouro,
            numero: '',
            complemento: data.complemento,
            bairro: data.bairro,
            localidade: data.localidade,
            uf: data.uf,
          };
          setUserAddress(mappedData);
        })
        .catch((error) => {
          console.error('Erro ao buscar dados do CEP:', error);
        });
    }
  }, [userAddress.cep]);

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
