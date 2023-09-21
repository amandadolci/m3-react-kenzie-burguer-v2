import { Link } from 'react-router-dom';

import { StyledRegisterPage } from './style';
import { IllustrationBox } from '../../components/IllustrationBox';

import { StyledContainer, StyledGridBox } from '../../styles/grid';
import { StyledTitle } from '../../styles/typography';
import Burguer from '../../assets/Burguer.png';

export function NotFoundPage() {
  return (
    <StyledRegisterPage>
      <StyledContainer>
        <div className="flexGrid">
          <div className="left">
            <IllustrationBox />
          </div>
          <div className="right">
            <StyledGridBox className="formBox">
              <StyledTitle tag="h1" $fontSize="big">
                Ooops! Página não encontrada!
              </StyledTitle>
              <Link to="/">Volte e faça o login correndo!</Link>
              <Link to="/" className="burguer">
                <img className="burguer" src={Burguer} alt="Burguer" />
              </Link>
            </StyledGridBox>
          </div>
        </div>
      </StyledContainer>
    </StyledRegisterPage>
  );
}
