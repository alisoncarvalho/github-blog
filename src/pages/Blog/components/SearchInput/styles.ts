import styled from "styled-components";

export const SearchInputContainer = styled.form`
    width: 100%;
    margin-top:4.5rem;
    margin-bottom: 3rem;

    input{
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid ${({theme})=>theme['base-border']};
        border-radius: 6px;
        background: ${({theme})=>theme['base-input']};
        color: ${({theme})=>theme['base-text']};

        &:focus{
            border-color: ${({theme})=>theme['brand-blue']};
            outline: none;
        }

        &::placeholder{
            color: ${({theme})=>theme['base-label']};
        }
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.85rem;

        h3{
            font-size: 1.125rem;
            color: ${({theme})=>theme['base-subtitle']};
        }

        span{
            font-size: 0.875rem;
            color:${({theme})=>theme['base-span']} ;
        }
    }
`