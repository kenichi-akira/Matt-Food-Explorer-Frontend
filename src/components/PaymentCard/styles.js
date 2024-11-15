import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 53.0rem;

    > .buttons {
        display: flex;
        height: 8.1rem;
    } 

    > .buttons button {
        width: 100%;
        background-color: transparent;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
        border-bottom: none;
        font-size: 1.6rem;
        line-height: 2.4rem;
    }

    .buttons button.active {
        top: 2px;
        left: 1px;
        box-shadow: none;
        background-color: ${({ theme }) => theme.COLORS.GRAY_400};
    } 

    > .buttons img {
        margin-right: 1.4rem;
        vertical-align: middle;
    }

    > .buttons button:first-child {
        border-radius: 0.8rem 0 0;
    }

    > .buttons button:last-child {
        border-radius: 0 0.8rem 0 0;
    }
`;

export const Content = styled.div`
    width: 100%;
    max-width: 53.0rem;
    max-height: 48rem;
    font-family: 'Roboto', sans-serif;

    padding: 4rem clamp(2rem, 3rem + 2.5vw, 6rem);
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_200};
    border-radius: 0 0 0.8rem 0.8rem;
    margin: 0 auto;
    
    
    .paymentCredit,
    .paymentPix {
        text-align: center;
        margin: 0 auto; // Centraliza o conteúdo interno
    }

    .validTo {
        display: flex;
        gap: 1.7rem;
        margin: 3.7rem 0;
        justify-content: center;
    
        // Configuração de largura para cada div interna (Validade e CVC)
        div:first-child {
            flex: 1;
            max-width: 10rem; // Largura para o campo "Validade"
        }
    
        div:last-child {
            flex: 1;
            max-width: 8rem; // Largura ligeiramente menor para o campo "CVC"
        }
    }

    .paymentPix img {
        width: 100%;
        max-width: 27rem;
        margin: 2rem auto; // Centraliza o QR code
    }

    .qr {
        margin: 0 4rem;
    }

    .paymentPix img {
        width: 100%;
        max-width: 27rem;
        margin-bottom: 2rem;
    }

    
    .clock,
    .approved,
    .delivered,
    .cart {
        width: 100%;
        text-align: center;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    .clock p,
    .approved p,
    .delivered p,
    .cart p {
        font-size: 2.4rem;
        margin-top: 3rem;
    }

    .hide {
        display: none;
    }
`;
