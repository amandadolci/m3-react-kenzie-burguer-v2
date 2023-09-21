import { useContext } from 'react';
import { ProductsContext } from '../../../contexts/ProductsContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import { MdSearch } from 'react-icons/md';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';

export function SearchForm() {
  const { searchProducts } = useContext(ProductsContext);

  const { register, handleSubmit, setValue } = useForm<{ inputValue: string }>(
    {}
  );

  const submit: SubmitHandler<{ inputValue: string }> = function ({
    inputValue,
  }) {
    searchProducts(inputValue);
    setValue('inputValue', '');
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        placeholder="Digitar pesquisa"
        {...register('inputValue')}
      />
      <StyledButton $buttonSize="medium" $buttonStyle="green">
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
}
