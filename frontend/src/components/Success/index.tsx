import Delivering from '../../assets/delivering.png';
import { useContext } from 'react';
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
import { UserContext } from '../../contexts/User';
import { CoffeesContext } from '../../contexts/Coffees';
import {
  SuccessContainer,
  SuccessMessage,
  Text,
  Delivery,
  OrderInfo,
  OrderRow,
  IconContainer,
  TextRow,
} from './styles';

export function Success() {
  const { userAddress, paymentType } = useContext(UserContext);
  const { minDeliveryTime, maxDeliveryTime } = useContext(CoffeesContext);

  return (
    <SuccessContainer>
      <div>
        <SuccessMessage>Uhu! Pedido confirmado</SuccessMessage>
        <Text>Agora é só aguardar que logo o café chegará até você</Text>
      </div>
      <Delivery>
        <OrderInfo>
          <OrderRow>
            <IconContainer className="iconLocation">
              <MapPin weight="fill" />
            </IconContainer>
            <div>
              <TextRow>
                Entrega em{' '}
                <span className="dataUser">
                  {`${userAddress?.logradouro}, ${userAddress?.numero}`}
                </span>
              </TextRow>
              <TextRow>
                {`${userAddress?.bairro} - ${userAddress?.localidade}, ${userAddress?.uf}`}
              </TextRow>
            </div>
          </OrderRow>
          <OrderRow>
            <IconContainer className="iconTimer">
              <Timer weight="fill" />
            </IconContainer>
            <div>
              <TextRow>Previsão de entrega</TextRow>
              <TextRow>
                <span className="dataUser">
                  {`${minDeliveryTime} min - ${maxDeliveryTime} min`}
                </span>
              </TextRow>
            </div>
          </OrderRow>
          <OrderRow>
            <IconContainer className="iconCurrency">
              <CurrencyDollar weight="fill" />
            </IconContainer>
            <div>
              <TextRow>Pagamento na entrega</TextRow>
              <TextRow>
                <span className="dataUser">{paymentType}</span>
              </TextRow>
            </div>
          </OrderRow>
        </OrderInfo>
        <img src={Delivering} alt="" />
      </Delivery>
    </SuccessContainer>
  );
}
