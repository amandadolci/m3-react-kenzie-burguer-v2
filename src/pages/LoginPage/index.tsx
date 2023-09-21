import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { Navigate } from 'react-router-dom';
import { StyledLoginPage } from './style';
import { LoginForm } from '../../components/Form/LoginForm';
import { IllustrationBox } from '../../components/IllustrationBox';

import { StyledButtonLink } from '../../styles/button';
import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { Loader } from '../../components/Loader';

export function LoginPage() {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <Loader />;
  }
  if (user) {
    return <Navigate to="/shop" />;
  }

  return (
    <StyledLoginPage>
      <StyledContainer>
        <div className="flexGrid">
          <div className="left">
            <StyledGridBox className="formBox">
              <StyledTitle tag="h2" $fontSize="three">
                Login
              </StyledTitle>
              <LoginForm />
              <StyledParagraph textAlign="center" fontColor="gray">
                Crie sua conta para saborear muitas delícias e matar sua fome!
              </StyledParagraph>
              <StyledButtonLink
                to="/register"
                $buttonSize="default"
                $buttonStyle="gray"
              >
                Cadastre-se
              </StyledButtonLink>
            </StyledGridBox>
          </div>
          <div className="right">
            <IllustrationBox />
          </div>
        </div>
      </StyledContainer>
    </StyledLoginPage>
  );
}
