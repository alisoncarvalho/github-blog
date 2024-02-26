import { ComponentProps, ReactNode } from "react";
import { ExternalLinkContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

type ExternalLinkProps = ComponentProps<typeof ExternalLinkContainer> &{
    text: string
    icon?: ReactNode
    variant?: 'iconLeft'
}

export function ExternalLink({text, icon , ...rest} :ExternalLinkProps){
    return(
        <ExternalLinkContainer href="" {...rest} >
            {text}
            {icon ?? <FontAwesomeIcon icon={faUpRightFromSquare}/>}
        </ExternalLinkContainer>
    )
}