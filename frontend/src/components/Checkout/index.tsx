import { useContext } from 'react';
import { CoffeesContext } from '../../contexts/Coffees';
import { NavLink } from 'react-router-dom';
import {
  MapPinLine,
  CurrencyDollar,
  CreditCard,
  Bank,
  Money,
  Trash,
} from 'phosphor-react';
import { Counter } from '../Counter';
import { formatterPrice } from '../../utils/Functions';
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
  const { coffeesToCheckout, subtotalItems, deliveryRate, totalItems } =
    useContext(CoffeesContext);

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
          {coffeesToCheckout!.map((coffee) => {
            return (
              <ItemCardCheckout key={coffee.id}>
                <ItemContent>
                  <ItemInfo>
                    <ItemImage src={coffee.imageUrl} />
                    <ItemDetails>
                      <span className="itemName">{coffee.name}</span>
                      <ItemActions>
                        <Counter
                          itemId={coffee.id}
                          itemQuantity={coffee.quantity}
                          listType="coffeesToCheckout"
                          className="counterCheckout"
                        />
                        <ItemActionRemove title="Remover item">
                          <Trash />
                          <span className="itemRemoveText">Remover</span>
                        </ItemActionRemove>
                      </ItemActions>
                    </ItemDetails>
                  </ItemInfo>
                  <span className="itemPrice">
                    {`R$ ${(coffee.quantity * coffee.price).toFixed(2)}`}
                  </span>
                </ItemContent>
                <div className="divider" />
              </ItemCardCheckout>
            );
          })}

          <TotalContainer>
            <TotalRow>
              <span>Total de itens</span>
              <span className="itemsTotal">
                {formatterPrice(subtotalItems)}
              </span>
            </TotalRow>

            <TotalRow>
              <span>Entrega</span>
              <span className="deliveryTotal">
                {formatterPrice(deliveryRate)}
              </span>
            </TotalRow>

            <TotalRow className="totalRow">
              <span>Total</span>
              <span>{formatterPrice(totalItems)}</span>
            </TotalRow>
          </TotalContainer>
          <NavLink to="/success">
            <ButtonConfirm type="submit" title="Confirmar pedido">
              Confirmar Pedido
            </ButtonConfirm>
          </NavLink>
        </SubtotalLayout>
      </Aside>
    </CheckoutContainer>
  );
}
