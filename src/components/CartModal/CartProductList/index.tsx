import { useContext } from 'react';
import { toast } from 'react-toastify';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { CartProductCard } from './CartProductCard';

import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';

export function CartProductList() {
  const { cartList, setCartList } = useContext(ProductsContext);

  const totalValue = cartList.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.price * currentValue.cartTotal;
  }, 0);

  const totalUnitiesOnCart = cartList.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.cartTotal;
  }, 0);

  return (
    <StyledCartProductList>
      <ul>
        {cartList.map((product) => {
          return <CartProductCard key={product.id} product={product} />;
        })}
      </ul>

      <div className="totalBox">
        <StyledParagraph>
          <strong>Total ({totalUnitiesOnCart} produtos)</strong>
        </StyledParagraph>
        <StyledParagraph className="total">
          {totalValue.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </StyledParagraph>
      </div>
      <StyledButton
        $buttonSize="default"
        $buttonStyle="gray"
        onClick={() => {
          setCartList([]);
          toast.success('Carrinho esvaziado com sucesso!');
        }}
      >
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
}
