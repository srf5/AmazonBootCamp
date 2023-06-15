import React from 'react';
import {PostDTO} from "../api/models/PostDTO";
import {Card} from "react-bootstrap";


type Props = {
   post: PostDTO;
}

function BlogPost(props: Props) {
   const {post} = props;


   return <Card className="mb-2" 
      // border="dark" /* Try to change this: https://react-bootstrap.github.io/components/cards/#card-styles  */
     //  bg="light" /* Try to change this: https://react-bootstrap.github.io/components/cards/#card-styles*/
       style={{whiteSpace: "pre-wrap"}} /* Making sure that \n and \t treated as new line and tab in our text. */
   >
    {post.pictureUrl && <Card.Img variant="top" src={post.pictureUrl} />}
      <Card.Body  className="mb-2" >
   <Card.Title>{post.title}</Card.Title>
   <Card.Text>{post.text}</Card.Text>
   {
       // This line make sure that the link is only displayed if it exists.
       post.readmoreUrl && <Card.Link href={post.readmoreUrl}>Read more…</Card.Link>
   }
</Card.Body>

       <Card.Footer className="text-center bg-light">
  <small className="text-muted" style={{ fontSize: '12px' }}>
    Author: {post.author}
  </small>
</Card.Footer>
   </Card>
}


export default BlogPost;
