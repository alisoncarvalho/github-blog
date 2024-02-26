import styled from "styled-components";

export const PostContentContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2.5rem 2rem;
    margin-bottom: 8rem;

    img{
        width: 100%;
    }

    h1, h2 ,h3 {
        color: ${({theme})=> theme['brand-blue']};
    }

    pre{
        background:${({theme})=> theme['base-post']} ;
        padding: 1rem;
        border-radius: 8px;

        >div{
            background: none !important;
            padding: 0 !important;
            margin: 0 !important ;
        }
    }
`