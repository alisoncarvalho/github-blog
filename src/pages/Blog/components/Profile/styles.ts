import styled from "styled-components";

export const ProfileContainer = styled.section`
    width: 100%;
    min-height: 13.25rem;
    background: ${({theme})=> theme["base-profile"]};
    box-shadow: 0px 2px 28px rgba(0,0,0,0.2);
    padding: 2rem 2.5rem;
    border-radius: 10px;

    margin-top: -5.5rem;

    display: flex;
    gap: 2rem;

    
`

export const ProfilePicture = styled.img`
    width: 148px;
    height: 148px;
    border-radius:8px;
    object-fit: cover;
`

export const ProfileDetails = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }

    h1{
        font-size: 1.5rem;
        color: ${({theme})=> theme['base-title']};
    }

    p{
        color: ${({theme})=> theme['base-text']};
        font-size: 1rem;
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
        }

        svg{
            width: 1.125rem;
            height: 1.125rem;
            color: ${({theme})=>theme['base-label']};
        }
    }
`