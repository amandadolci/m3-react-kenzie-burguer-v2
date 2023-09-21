import { createContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../services/api';

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

export interface ICartProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  cartTotal: number;
}

interface IProductsContext {
  products: IProduct[];
  searchProducts(inputValue: string): void;
  addProductToCart(productId: number): void;
  cartList: ICartProduct[];
  setCartList: React.Dispatch<React.SetStateAction<ICartProduct[]>>;
  cartModal: boolean;
  setCartModal: React.Dispatch<React.SetStateAction<boolean>>;
  filteredProducts: IProduct[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

export const ProductsContext = createContext({} as IProductsContext);

export function ProductsProvider() {
  const cart = localStorage.getItem('@KenzieBurguer:cart');

  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [cartModal, setCartModal] = useState(false);
  const [cartList, setCartList] = useState<ICartProduct[]>(
    cart ? JSON.parse(cart) : []
  );

  useEffect(() => {
    async function loadProducts() {
      try {
        const token = localStorage.getItem('@KenzieBurguer:token');
        const { data } = await api.get<IProduct[]>('products', {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    }
    loadProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem('@KenzieBurguer:cart', JSON.stringify(cartList));
  }, [cartList]);

  function searchProducts(inputValue: string) {
    const searchedProducts = products.filter(
      ({ name, category }) =>
        name.toLowerCase().includes(inputValue.toLowerCase()) ||
        category?.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredProducts(searchedProducts);
  }

  function addProductToCart(productId: number) {
    const addedProduct = products.find(({ id }) => id === productId);
    const productOnCart = cartList.find(({ id }) => id === addedProduct?.id);

    if (productOnCart) {
      const cart = cartList.filter(
        (product) => product.id !== productOnCart.id
      );
      productOnCart.cartTotal = productOnCart.cartTotal + 1;
      setCartList([...cart, productOnCart]);
      toast.success('Quantidade atualizada no carrinho!');
    } else {
      if (addedProduct) {
        setCartList([...cartList, { ...addedProduct, cartTotal: 1 }]);
      }
      toast.success('Produto adicionado ao carrinho!');
    }
  }

  return (
    <ProductsContext.Provider
      value={{
        products,
        searchProducts,
        addProductToCart,
        cartList,
        setCartList,
        cartModal,
        setCartModal,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      <Outlet />
    </ProductsContext.Provider>
  );
}
