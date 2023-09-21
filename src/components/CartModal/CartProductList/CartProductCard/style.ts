import styled from 'styled-components';

export const StyledCartProductCard = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;

  .imageBox {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: ${({ theme }) => theme.colors.gray100};
    border-radius: 0.3125rem;

    img {
      width: 5rem;
      object-fit: cover;
      object-position: center;
    }

    .imageMedium {
      height: 6rem;
      margin-bottom: 0.5rem;
    }

    .imageBig {
      height: 9.75rem;
      margin-bottom: 2.5rem;
    }

    /* @media (max-width: 450px) {
      width: 40px;
      height: 40px;

      img {
        width: 40px;
        height: 40px;
      }
    } */
  }

  .contentBox {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-right: 20px;
    div {
      display: flex;
      span {
        font-family: ${({ theme }) => theme.fonts.primary};
        display: flex;
        align-items: center;
        border: 2px solid ${({ theme }) => theme.colors.gray10};
        p {
          width: 3rem;
          text-align: center;
        }
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 2.125rem;
          width: 1.875rem;
          font-family: inherit;
          font-size: 1.125rem;
          font-weight: 600;
          color: ${({ theme }) => theme.colors.secondary};
          background-color: ${({ theme }) => theme.colors.gray10};
        }
      }
    }

    button {
      background: transparent;
      opacity: 0.4;
      transition: 0.4s;

      :hover {
        opacity: 0.7;
      }
    }
  }
`;
