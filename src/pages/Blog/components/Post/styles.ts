import { Link } from "react-router-dom";
import styled from "styled-components";

export const PostContainer = styled(Link)`
    width: 100%;
    height: 16.25rem;
    border-radius: 10px;
    padding: 2rem;
    background: ${({theme})=>theme['base-post']};
    border: 2px solid transparent;

    &:hover{
        border: 2px solid ${({theme})=>theme['base-label']} ;
        transition: 0.4s;
    }

    div{
        display: flex;
        gap: 1rem ;
        margin-bottom: 1.25rem;

        strong{
            flex: 1;
            font-size: 1.25rem;
            color: ${({theme})=>theme['base-title']} ;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
        }

        span{
            width: max-content;
            font-size: 0.875rem;
            color: ${({theme})=>theme['base-span']};
        }
    }

    p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }


`