import { useContext } from 'react';
import { UserContext } from '../../contexts/User';
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
  const {
    userAddress,
    paymentType,
    onHandleUpdateUserAddress,
    onHandleSetPaymentType,
  } = useContext(UserContext);

  const { coffeesToCheckout, subtotal, deliveryRate, total } =
    useContext(CoffeesContext);

  const TYPE_OF_PAYMENT = {
    type1: 'Cartão de Crédito',
    type2: 'Cartão de Débito',
    type3: 'Dinheiro',
  };

  function togglePaymentType(type: string) {
    if (type === paymentType) {
      onHandleSetPaymentType('');
    } else {
      onHandleSetPaymentType(type);
    }
  }

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
              <Input
                name="cep"
                placeholder="CEP"
                value={userAddress?.cep}
                onChange={(e) => onHandleUpdateUserAddress(e)}
              />
            </InputRow>

            <InputRow>
              <Input
                name="logradouro"
                placeholder="Rua"
                width={56}
                value={userAddress?.logradouro}
                onChange={(e) => onHandleUpdateUserAddress(e)}
              />
            </InputRow>

            <InputRow>
              <Input
                name="numero"
                placeholder="Número"
                value={userAddress?.numero}
                onChange={(e) => onHandleUpdateUserAddress(e)}
              />
              <Input
                name="complemento"
                placeholder="Complemento - Opcional"
                width={34.8}
                value={userAddress?.complemento}
                onChange={(e) => onHandleUpdateUserAddress(e)}
              />
            </InputRow>

            <InputRow>
              <Input
                name="bairro"
                placeholder="Bairro"
                value={userAddress?.bairro}
                onChange={(e) => onHandleUpdateUserAddress(e)}
              />
              <Input
                name="localidade"
                placeholder="Cidade"
                width={27.6}
                value={userAddress?.localidade}
                onChange={(e) => onHandleUpdateUserAddress(e)}
              />
              <Input
                name="uf"
                placeholder="UF"
                width={6}
                value={userAddress?.uf}
                onChange={(e) => onHandleUpdateUserAddress(e)}
              />
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
            <PaymentTypeSelect
              title="Pagamento com cartão de crédito"
              className={paymentType === TYPE_OF_PAYMENT.type1 ? 'active' : ''}
              onClick={() => togglePaymentType(TYPE_OF_PAYMENT.type1)}
            >
              <CreditCard className="paymentTypeIcon" />
              <span>Cartão de crédito</span>
            </PaymentTypeSelect>

            <PaymentTypeSelect
              title="Pagamento com cartão de débito"
              className={paymentType === TYPE_OF_PAYMENT.type2 ? 'active' : ''}
              onClick={() => togglePaymentType(TYPE_OF_PAYMENT.type2)}
            >
              <Bank className="paymentTypeIcon" />
              <span>Cartão de débito</span>
            </PaymentTypeSelect>

            <PaymentTypeSelect
              title="Pagamento em dinheiro"
              className={paymentType === TYPE_OF_PAYMENT.type3 ? 'active' : ''}
              onClick={() => togglePaymentType(TYPE_OF_PAYMENT.type3)}
            >
              <Money className="paymentTypeIcon" />
              <span>Dinheiro</span>
            </PaymentTypeSelect>
          </PaymentTypeForm>
        </FormLayout>
      </Aside>

      {coffeesToCheckout!.length > 0 && (
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
                <span className="itemsTotal">{formatterPrice(subtotal)}</span>
              </TotalRow>

              <TotalRow>
                <span>Entrega</span>
                <span className="deliveryTotal">
                  {formatterPrice(deliveryRate)}
                </span>
              </TotalRow>

              <TotalRow className="totalRow">
                <span>Total</span>
                <span>{formatterPrice(total)}</span>
              </TotalRow>
            </TotalContainer>
            <NavLink to="/success">
              <ButtonConfirm type="submit" title="Confirmar pedido">
                Confirmar Pedido
              </ButtonConfirm>
            </NavLink>
          </SubtotalLayout>
        </Aside>
      )}
    </CheckoutContainer>
  );
}
