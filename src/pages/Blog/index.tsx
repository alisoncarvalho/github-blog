/* eslint-disable no-empty */
import { useCallback, useEffect, useState } from "react";
import { Post } from "./components/Post";
import { Profile } from "./components/Profile";
import { SearchInput } from "./components/SearchInput";
import { BlogContainer, PostsListContainer } from "./styles";
import { api } from "../../lib/axios";
import { Spinner } from "../../components/Spinner";

const username = import.meta.env.VITE_GITHUB_USERNAME
const repoName = import.meta.env.VITE_GITHUB_REPONAME

export interface IPost{
    title: string
    body: string
    createdAt: string
    number: number
    html_url:string
    comments: number
    user:{
        login:string
    }
}

export function Blog(){
    const [posts, setPosts] = useState<IPost[]>([])
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isLoading , setIsLoading] = useState(true)

    const getPosts = useCallback(async (query: string = "")=>{
        try{
            setIsLoading(true)
            const response = await api.get(`/search/issues?q=${query}%20repo:${username}/${repoName}`)
            // console.log(response.data)
            setPosts(response.data.items)
        }finally{
            setIsLoading(false)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[posts])

    useEffect(()=>{
        getPosts()
    },[])

    return(
        <BlogContainer>
            <Profile/>
            <SearchInput postsLength={posts.length} getPosts={getPosts}/>
            {isLoading ? <Spinner/> : 
            <>
                <PostsListContainer>
                {posts.map(post => (
                    <Post
                        key={post.number}
                        post={post}
                    />
                ))}
                
                </PostsListContainer>
            </>
            }
        </BlogContainer>
        
    )
}