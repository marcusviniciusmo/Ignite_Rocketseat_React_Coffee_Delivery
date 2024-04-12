import Delivering from '../../assets/delivering.png';
import { MapPin, Timer, CurrencyDollar } from 'phosphor-react';
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
                  Rua João Daniel Martinelli, 102
                </span>
              </TextRow>
              <TextRow>Farrapos - Porto Alegre, RS</TextRow>
            </div>
          </OrderRow>
          <OrderRow>
            <IconContainer className="iconTimer">
              <Timer weight="fill" />
            </IconContainer>
            <div>
              <TextRow>Previsão de entrega</TextRow>
              <TextRow>
                <span className="dataUser">20 min - 30 min</span>
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
                <span className="dataUser">Cartão de Crédito</span>
              </TextRow>
            </div>
          </OrderRow>
        </OrderInfo>
        <img src={Delivering} alt="" />
      </Delivery>
    </SuccessContainer>
  );
}
