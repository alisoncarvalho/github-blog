import styled, { css } from "styled-components";
interface ExternalLinkProps {
    variant?: 'iconLeft'
}
export const ExternalLinkContainer = styled.a<ExternalLinkProps>`
    border: none;
    background: none;
    color: ${({theme})=>theme["brand-blue"]};
    font-size:0.75rem;
    border-bottom: 1px solid transparent;
    transition: 0.4s;
    font-weight: 700;
    height: 19px;
    line-height: 19px;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover{
        border-bottom: 1px solid ${({theme})=>theme["brand-blue"]} ;
    }

    svg{
        width: 0.75rem;
        height: 0.75rem;
    }

    ${({variant})=> variant === 'iconLeft' && css`
        flex-direction: row-reverse;
    ` }
`