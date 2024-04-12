import ExpressoTradicional from '../../assets/expressoTradicional.png';
import Latte from '../../assets/latte.png';
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
} from 'phosphor-react';
import { Counter } from '../Counter';
import { defaultTheme } from '../../styles/themes/default';
import {
  CheckoutContainer,
  Aside,
  FormLayout,
  Text,
  FormHeader,
  Icon,
  AddressForm,
  InputRow,
  Input,
  PaymentTypeForm,
  PaymentTypeSelect,
  SubtotalLayout,
  ItemCardCheckout,
  ItemContent,
  ItemInfo,
  ItemImage,
  ItemDetails,
  ItemActions,
  ItemActionRemove,
  TotalContainer,
  TotalRow,
  ButtonConfirm,
} from './styles';

export function Checkout() {
  return (
    <CheckoutContainer>
      <Aside>
        <Text>Complete seu pedido</Text>
        <FormLayout>
          <FormHeader>
            <Icon color={defaultTheme.primaryColorDark}>
              <MapPinLine />
            </Icon>
            <div className="formHeaderTexts">
              <span className="mainText">Endereço de entrega</span>
              <span className="subText">
                Informe o endereço onde deseja receber seu pedido
              </span>
            </div>
          </FormHeader>

          <AddressForm>
            <InputRow>
              <Input placeholder="CEP" />
            </InputRow>

            <InputRow>
              <Input placeholder="Rua" width={56} />
            </InputRow>

            <InputRow>
              <Input placeholder="Número" />
              <Input placeholder="Complemento - Opcional" width={34.8} />
            </InputRow>

            <InputRow>
              <Input placeholder="Bairro" />
              <Input placeholder="Cidade" width={27.6} />
              <Input placeholder="UF" width={6} />
            </InputRow>
          </AddressForm>
        </FormLayout>

        <FormLayout>
          <FormHeader>
            <Icon color={defaultTheme.secondaryColor}>
              <CurrencyDollar />
            </Icon>
            <div className="formHeaderTexts">
              <span className="mainText">Pagamento</span>
              <span className="subText">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </FormHeader>

          <PaymentTypeForm>
            <PaymentTypeSelect title="Pagamento com cartão de crédito">
              <CreditCard className="paymentTypeIcon" />
              <span>Cartão de crédito</span>
            </PaymentTypeSelect>

            <PaymentTypeSelect title="Pagamento com cartão de débito">
              <Bank className="paymentTypeIcon" />
              <span>Cartão de débito</span>
            </PaymentTypeSelect>

            <PaymentTypeSelect title="Pagamento em dinheiro">
              <Money className="paymentTypeIcon" />
              <span>Dinheiro</span>
            </PaymentTypeSelect>
          </PaymentTypeForm>
        </FormLayout>
      </Aside>

      <Aside>
        <Text>Café selecionado</Text>
        <SubtotalLayout>
          <ItemCardCheckout>
            <ItemContent>
              <ItemInfo>
                <ItemImage src={ExpressoTradicional} />
                <ItemDetails>
                  <span className="itemName">Expresso Tradicional</span>
                  <ItemActions>
                    <Counter itemQuantity={1} className="counterCheckout" />
                    <ItemActionRemove title="Remover item">
                      <Trash />
                      <span className="itemRemoveText">Remover</span>
                    </ItemActionRemove>
                  </ItemActions>
                </ItemDetails>
              </ItemInfo>
              <span className="itemPrice">R$ 9,90</span>
            </ItemContent>
            <div className="divider" />
          </ItemCardCheckout>

          <ItemCardCheckout>
            <ItemContent>
              <ItemInfo>
                <ItemImage src={Latte} />
                <ItemDetails>
                  <span className="itemName">Latte</span>
                  <ItemActions>
                    <Counter itemQuantity={1} className="counterCheckout" />
                    <ItemActionRemove title="Remover item">
                      <Trash />
                      <span className="itemRemoveText">Remover</span>
                    </ItemActionRemove>
                  </ItemActions>
                </ItemDetails>
              </ItemInfo>
              <span className="itemPrice">R$ 19,90</span>
            </ItemContent>
            <div className="divider" />
          </ItemCardCheckout>
          <TotalContainer>
            <TotalRow>
              <span>Total de itens</span>
              <span className="itemsTotal">R$ 29,70</span>
            </TotalRow>

            <TotalRow>
              <span>Entrega</span>
              <span className="deliveryTotal">R$ 3,50</span>
            </TotalRow>

            <TotalRow className="totalRow">
              <span>Total</span>
              <span>33,20</span>
            </TotalRow>
          </TotalContainer>
          <ButtonConfirm type="submit" title="Confirmar pedido">
            Confirmar Pedido
          </ButtonConfirm>
        </SubtotalLayout>
      </Aside>
    </CheckoutContainer>
  );
}
