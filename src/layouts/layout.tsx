import Default from "./default"
import React,{ReactNode} from "react"


interface Layout{
    children: ReactNode,
    pageContext: { 
        authenticated: boolean,
        lang: string,
        theme: string,
        layout: string
      }
};

export default ({ children, pageContext }:Layout) =>
  pageContext.layout === "home" ? (
    <>{children}</>
  ) : (
    <Default>{children}</Default>
  )
