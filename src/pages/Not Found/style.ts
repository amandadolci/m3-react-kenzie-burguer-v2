import styled from 'styled-components';
import Mustard from '../../assets/MustardSM.png';

export const StyledRegisterPage = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  .formBox {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    min-height: 420px;
    height: fit-content;

    a {
      font-family: ${({ theme }) => theme.fonts.primary};
      font-size: 1rem;
      font-weight: 600;
      line-height: 150%;
      color: ${({ theme }) => theme.colors.gray300};

      &:hover {
        text-decoration: underline;
      }
    }
    a.burguer {
      display: flex;
      justify-content: center;
      cursor: default;
      .burguer,
      .burguer:focus {
        width: 200px;
        cursor: url(${Mustard}) 0 65, pointer !important;
      }
    }
  }

  .flexGrid {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    .left,
    .right {
      width: 100%;
    }

    @media (max-width: 750px) {
      flex-direction: column;
      .ballsImage {
        display: none;
      }
    }
  }
`;
