/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from "react";
import { PostInfo } from "./components/PostInfo";
import { PostContainer } from "./styles";
import { IPost } from "../Blog";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { PostContent } from "./components/PostContent";

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export function Post(){
    const { id } = useParams()
    const [isLoading , setIsLoading] = useState(true)
    const [postData, setPostData] = useState<IPost>({} as IPost)

    const getPostDetails = useCallback(async()=> {
        try{
            setIsLoading(true)
            const response = await api.get(`/repos/${username}/${repoName}/issues/${id}`)

            setPostData(response.data)
        }
        finally{
            setIsLoading(false)
        }
    }, [postData])

    useEffect(()=>{
        getPostDetails()
    },[])

    return(
        <PostContainer>
            <PostInfo isLoading={isLoading} postData={postData}/>
            {!isLoading && <PostContent content={postData.body}/>}
        </PostContainer>
    )
}