import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { PostDetails, PostInfoContainer } from "./styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCalendar, faChevronLeft, faComment } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { IPost } from "../../../Blog";
import { relativeDateFormatter } from "../../../../utils/dateFormatted";
import { Spinner } from "../../../../components/Spinner";

interface PostInfoProps {
    postData: IPost
    isLoading: boolean
}

export function PostInfo({postData , isLoading}: PostInfoProps){
    const navigate = useNavigate()
    function goBack(){
        navigate(-1)
    }

    const dateFormatted = relativeDateFormatter(postData.createdAt)

    return(
        <PostInfoContainer>
            {isLoading ? <Spinner/> : 
            <>
            <PostDetails>
                <header>
                    <ExternalLink icon={<FontAwesomeIcon icon={faChevronLeft}/>} text="VOLTAR" href="/" onClick={goBack} variant="iconLeft"/>
                    <ExternalLink text="VER NO GITHUB" href={postData.html_url} target="_blank"/>
                </header>

                <strong>{postData.title}</strong>

                <ul>
                    <li><FontAwesomeIcon icon={faGithub}/> {postData.user.login}</li>
                    <li><FontAwesomeIcon icon={faCalendar}/>{dateFormatted}</li>
                    <li><FontAwesomeIcon icon={faComment}/>{postData.comments}</li>
                </ul>
            </PostDetails>
            </>
            }
            
        </PostInfoContainer>
    )
}