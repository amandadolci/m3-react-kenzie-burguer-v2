import { createContext, useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TLoginFormValues } from '../components/Form/LoginForm/schema';
import { TRegisterFormValues } from '../components/Form/RegisterForm/schema';
import { api } from '../services/api';

export interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IUserContext {
  loading: boolean;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  login(loginBody: TLoginFormValues): Promise<void>;
  registerUser(registerBody: TRegisterFormValues): Promise<void>;
  handleLogout(): void;
}

export const UserContext = createContext({} as IUserContext);

export function UserProvider({ children }: IUserProviderProps) {
  const navigate = useNavigate();

  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const token = localStorage.getItem('@KenzieBurguer:token');
        const userId = localStorage.getItem('@KenzieBurguer:userId');
        if (!token) {
          localStorage.removeItem('@KenzieBurguer:token');
          localStorage.removeItem('@KenzieBurguer:userId');
          return <Navigate to="/" />;
        }
        const { data } = await api.get(`users/${userId}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
      } catch (error) {
        console.log(error);
        console.log('teste');
      } finally {
        setLoading(false);
      }
    }
    loadUser();
  }, []);

  async function registerUser(registerBody: TRegisterFormValues) {
    try {
      await api.post('users', registerBody);
      toast.success('Usuário cadastrado com sucesso!');
      setTimeout(() => {
        navigate('/');
        const { email, password } = registerBody;
        login({ email: email, password: password });
      }, 2000);
    } catch (error: any) {
      toast.error(error.response.data, {
        autoClose: 5000,
        hideProgressBar: false,
      });
    }
  }

  async function login(loginBody: TLoginFormValues) {
    try {
      const { data } = await api.post('login', loginBody);
      const { user: userResponse, accessToken } = data;
      localStorage.setItem('@KenzieBurguer:token', accessToken);
      localStorage.setItem('@KenzieBurguer:userId', userResponse.id);
      setTimeout(() => {
        navigate('/shop');
      }, 2000);
      setUser(userResponse);
    } catch (error: any) {
      toast.error(error.response.data);
    }
  }

  function handleLogout() {
    localStorage.removeItem('@KenzieBurguer:token');
    localStorage.removeItem('@KenzieBurguer:userId');
    localStorage.removeItem('@KenzieBurguer:cart');
    setUser(null);
    setTimeout(() => {
      navigate('/');
    }, 500);
  }

  return (
    <UserContext.Provider
      value={{
        loading,
        user,
        setUser,
        login,
        registerUser,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
