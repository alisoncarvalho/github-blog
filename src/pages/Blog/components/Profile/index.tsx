import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ExternalLink } from "../../../../components/ExternalLink";
import { ProfileContainer, ProfileDetails, ProfilePicture } from "./styles";
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import { faBuilding, faUserGroup,  } from "@fortawesome/free-solid-svg-icons";

export function Profile(){
    return(
        <ProfileContainer>
            <ProfilePicture src="https://github.com/alisoncarvalho.png" alt="" />
            <ProfileDetails>
                <header>
                    <h1>Alison Carvalho</h1>
                    <ExternalLink text="GITHUB" href="#"/>
                </header>

                <p>
                    Tristique volutpat pulvinar vel massa, pellentesque egestas.
                    Eu viverra massa quam dignissim aenean malesuada suscipit.
                    Nunc, volutpat pulvinar vel mass.
                </p>

                <ul>
                    <li><FontAwesomeIcon icon={faGithub}/> alisoncarvalho</li>
                    <li><FontAwesomeIcon icon={faBuilding}/> Uber</li>
                    <li><FontAwesomeIcon icon={faUserGroup}/> 25 seguidores</li>
                </ul>
            </ProfileDetails>
        </ProfileContainer>
    )
}