import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { ProductCard } from './ProductCard';
import { StyledProductList } from './style';

export function ProductList() {
  const { products, filteredProducts } = useContext(ProductsContext);
  const productList = filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <StyledProductList>
      {productList.map((product) => {
        const { id, name, category, price, img } = product;
        return (
          <ProductCard
            key={id}
            id={id}
            name={name}
            category={category}
            price={price}
            img={img}
          />
        );
      })}
    </StyledProductList>
  );
}
