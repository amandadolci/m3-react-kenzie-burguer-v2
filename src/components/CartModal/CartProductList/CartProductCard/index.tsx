import { useContext } from 'react';
import {
  ICartProduct,
  ProductsContext,
} from '../../../../contexts/ProductsContext';
import { toast } from 'react-toastify';
import { MdDelete } from 'react-icons/md';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';

type TCartCardProps = {
  product: ICartProduct;
};

export function CartProductCard({ product }: TCartCardProps) {
  const { cartList, setCartList } = useContext(ProductsContext);
  const { id, name, img, cartTotal } = product;

  function updateTotal(id: number, cartTotal: number, operation: string) {
    let cart = cartList.filter((product) => product.id !== id);
    let indexOfProductToUpdate = 0;
    const productToUpdate = cartList.find((product, i) => {
      if (product.id === id) {
        indexOfProductToUpdate = i;
        return product;
      }
    });
    if (cartTotal === 1 && operation === '-') {
      removeProduct(id);
    } else {
      if (operation === '+') {
        cartTotal = cartTotal + 1;
      } else {
        cartTotal = cartTotal - 1;
      }
      if (productToUpdate) {
        const updatedProduct = { ...productToUpdate, cartTotal: cartTotal };
        cart.splice(indexOfProductToUpdate, 0, updatedProduct);
      }
      setCartList([...cart]);
    }
  }

  function removeProduct(productId: number) {
    const updatedCart = cartList.filter(({ id }) => id !== productId);
    setCartList(updatedCart);
    toast.success('Produto removido do carrinho!');
  }

  return (
    <StyledCartProductCard>
      <div className="imageBox">
        <img
          src={img}
          alt={name}
          className={
            id === 4 || id === 5
              ? 'imageBig'
              : id === 6
              ? 'imageMedium'
              : undefined
          }
        />
      </div>
      <div className="contentBox">
        <div>
          <StyledTitle tag="h3" $fontSize="three">
            {name}
          </StyledTitle>
          <button
            type="button"
            aria-label="Remover"
            onClick={() => removeProduct(id)}
          >
            <MdDelete size={24} />
          </button>
        </div>
        <div>
          <span>
            <button onClick={() => updateTotal(id, cartTotal, '-')}>-</button>
            <p>{cartTotal}</p>
            <button onClick={() => updateTotal(id, cartTotal, '+')}>+</button>
          </span>
        </div>
      </div>
    </StyledCartProductCard>
  );
}
