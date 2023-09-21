import { useContext } from 'react';
import { UserContext } from '../../../contexts/UserContext';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, TLoginFormValues } from './schema';
import { Input } from '../Input';
import { StyledForm } from '../../../styles/form';
import { StyledButton } from '../../../styles/button';

export function LoginForm() {
  const { login } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isSubmitting },
  } = useForm<TLoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const submit: SubmitHandler<TLoginFormValues> = function (loginBody) {
    login(loginBody);
  };

  const filledInputs = dirtyFields.email && dirtyFields.password;

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
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
      <StyledButton
        $buttonSize="default"
        $buttonStyle="green"
        disabled={isSubmitting || !filledInputs}
      >
        Entrar
      </StyledButton>
    </StyledForm>
  );
}
