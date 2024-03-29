import styled from "styled-components";
import HeaderBg from '../../assets/Cover.png'

export const HeaderContainer = styled.header`
    width: 100%;
    height: 18.5rem;
    background: url(${HeaderBg}) no-repeat  center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        position: absolute;
        top: 64px;
    }
`