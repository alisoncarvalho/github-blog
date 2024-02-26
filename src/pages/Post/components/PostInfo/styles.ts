import styled from "styled-components";

export const PostInfoContainer = styled.div`
    width: 100%;
    min-height: 10.5rem;
    background: ${({theme})=> theme["base-profile"]};
    box-shadow: 0px 2px 28px rgba(0,0,0,0.2);
    padding: 2rem 2.5rem;
    border-radius: 10px;

    margin-top: -5.5rem;

    display: flex;
    gap: 2rem;
`

export const PostDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.25rem;
    }

    strong{
        font-size: 1.5rem;
        color: ${({theme})=> theme['base-title']};
        margin-bottom: auto;
    }

    

    ul{
        display: flex;
        align-items: center;
        gap: 2rem;

        li{
            display: flex;
            align-items: center;
            gap: 0.5rem;
            color: ${({theme})=>theme['base-span']};
        }

        svg{
            width: 1.125rem;
            height: 1.125rem;
            color: ${({theme})=>theme['base-label']};
        }
    }
`