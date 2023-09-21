import styled from 'styled-components';

export const StyledProductCard = styled.li`
  border: 2px solid ${({ theme }) => theme.colors.gray100};
  border-radius: 5px;
  transition: 0.3s;

  :has(button:hover) {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  .imageBox {
    background: ${({ theme }) => theme.colors.gray0};
    width: 100%;
    height: 9.375rem;
    display: flex;
    justify-content: center;

    img {
      height: 9.375rem;
      object-fit: cover;
      object-position: bottom;
    }

    .imageMedium {
      width: 10.125rem;
      margin-bottom: 0.5rem;
    }

    .imageBig {
      width: 15.4375rem;
      margin-top: 1.25rem;
    }
  }

  .content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
    padding: 23px 20px;

    .price {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;
