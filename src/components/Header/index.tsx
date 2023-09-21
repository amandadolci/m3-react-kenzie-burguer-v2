import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { ProductsContext } from '../../contexts/ProductsContext';
import { MdShoppingCart, MdLogout } from 'react-icons/md';

import { SearchForm } from './SearchForm';
import { StyledHeader } from './style';
import LogoKenzieBurguer from '../../assets/LogoKenzieBurguer.svg';

import { StyledContainer } from '../../styles/grid';

export function Header() {
  const { handleLogout } = useContext(UserContext);
  const { setCartModal, setFilteredProducts } = useContext(ProductsContext);

  return (
    <StyledHeader>
      <StyledContainer containerWidth={1300}>
        <div className="flexGrid">
          <img
            src={LogoKenzieBurguer}
            alt="Kenzie Burguer Logo"
            className="logo"
            onClick={() => setFilteredProducts([])}
          />
          <nav className="nav" role="navigation">
            <SearchForm />
            <div className="buttons">
              <button
                type="button"
                onClick={() => {
                  setCartModal(true);
                }}
              >
                <MdShoppingCart size={28} />
              </button>
              <button
                type="button"
                onClick={() => {
                  handleLogout();
                }}
              >
                <MdLogout size={28} />
              </button>
            </div>
          </nav>
        </div>
      </StyledContainer>
    </StyledHeader>
  );
}
