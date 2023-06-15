import React from 'react';
import {PostDTO} from "../api/models/PostDTO";
import BlogPost from "./BlogPost";


type Props = {
   blogPosts: PostDTO[];
}


function BlogPosts(props: Props) {
   const {blogPosts} = props;


   const articles = blogPosts.map(post => <BlogPost post={post} />)


   return <div>{articles}</div>;
}




export default BlogPosts;