import { PostContentContainer } from "./styles";
import ReactMarkdown from "react-markdown"
import {Prism  as Syntaxhighlighter} from "react-syntax-highlighter"
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/hljs";

interface PostContentProps {
    content: string
}

export function PostContent({content}:PostContentProps){
    return(
        <PostContentContainer>
            <ReactMarkdown 
                children={content}
                components={{
                    code({ node, inline, className, children, ...props }) {
                      const match = /language-(\w+)/.exec(className || "");
                      return !inline && match ? (
                        <Syntaxhighlighter
                          children={String(children).replace(/\n$/, "")}
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                          style={dracula as any}
                          language={match[1]}
                          PreTag="div"
                          {...props}
                        />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    },
                  }}
                />
        </PostContentContainer>
    )
}