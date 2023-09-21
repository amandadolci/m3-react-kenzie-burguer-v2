import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { ProductsContext } from '../../contexts/ProductsContext';
import { Navigate } from 'react-router-dom';
import { Loader } from '../../components/Loader';
import { CartModal } from '../../components/CartModal';
import { Header } from '../../components/Header';
import { ProductList } from '../../components/ProductList';
import { StyledShopPage } from './style';
import { StyledContainer } from '../../styles/grid';

export function ShopPage() {
  const { user, loading } = useContext(UserContext);
  const { cartModal } = useContext(ProductsContext);

  if (loading) {
    return <Loader />;
  }
  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <StyledShopPage>
      {cartModal ? <CartModal /> : null}
      <Header />
      <main>
        <StyledContainer containerWidth={1300}>
          <ProductList />
        </StyledContainer>
      </main>
    </StyledShopPage>
  );
}
