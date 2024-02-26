import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostDetails, PostInfoContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export function PostInfo(){
    const navigate = useNavigate()
    function goBack(){
        navigate(-1)
    }

    return(
        <PostInfoContainer>
            <PostDetails>
                <header>
                    <ExternalLink icon={<FontAwesomeIcon icon={faChevronLeft}/>} text="VOLTAR" href="/" onClick={goBack} variant="iconLeft"/>
                    <ExternalLink text="VER NO GITHUB" href="#" target="_blank"/>
                </header>

                <strong>JavaScript data types and data structures</strong>

                <ul>
                    <li><FontAwesomeIcon icon={faGithub}/> alisoncarvalho</li>
                    <li><FontAwesomeIcon icon={faCalendar}/> Há 1 dia</li>
                    <li><FontAwesomeIcon icon={faComment}/> 5 cometários</li>
                </ul>
            </PostDetails>
        </PostInfoContainer>
    )
}