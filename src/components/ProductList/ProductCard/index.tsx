import { useContext } from 'react';
import { IProduct, ProductsContext } from '../../../contexts/ProductsContext';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';

export function ProductCard({ id, name, category, price, img }: IProduct) {
  const { addProductToCart } = useContext(ProductsContext);

  return (
    <StyledProductCard>
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
      <div className="content">
        <StyledTitle tag="h3" $fontSize="three">
          {name}
        </StyledTitle>
        <StyledParagraph className="category">{category}</StyledParagraph>
        <StyledParagraph className="price">
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </StyledParagraph>
        <StyledButton
          $buttonSize="medium"
          $buttonStyle="green"
          onClick={() => addProductToCart(id)}
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
}
