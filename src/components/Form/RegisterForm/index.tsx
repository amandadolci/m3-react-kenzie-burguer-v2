import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, TRegisterFormValues } from './schema';
import { Input } from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';

export function RegisterForm() {
  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<TRegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const emptyInputs = Object.values(dirtyFields).length < 4 ? true : false;

  const submit: SubmitHandler<TRegisterFormValues> = function (registerBody) {
    registerUser(registerBody);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        id="name"
        label="Nome"
        type="text"
        error={errors.name?.message}
        {...register('name')}
      />
      <Input
        id="email"
        label="Email"
        type="text"
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        id="password"
        label="Senha"
        type="password"
        error={errors.password?.message}
        {...register('password')}
      />
      <Input
        id="confirm"
        label="Confirmar senha"
        type="password"
        error={errors.confirm?.message}
        {...register('confirm')}
      />
      <StyledButton
        $buttonSize="default"
        $buttonStyle="gray"
        disabled={emptyInputs || isSubmitting ? true : false}
      >
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
}
