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
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    localidade: '',
    uf: '',
  });
  const [paymentType, setPaymentType] = useState<string>('');

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
