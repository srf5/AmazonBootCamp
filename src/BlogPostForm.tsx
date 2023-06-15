import React, { useState } from 'react';
import {Button, Form} from "react-bootstrap";
import { PostDTO } from '../api/models/PostDTO';


type Props = {
    onPostSubmit: (blogPost: PostDTO) => void;
};


function BlogPostForm(props: Props) {
    const [author, setAuthor] = useState("nobody"); 
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [link, setlink] = useState("");
    const {onPostSubmit} = props;

   // This is the event handler function, which gets executed once the Save button is pressed.
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
       const form = event.currentTarget;




       // To cancel the native behaviour of the submit button,
       // you need to use React’s event.preventDefault() function
       // https://sebhastian.com/react-preventdefault/
       // We need to keep it here until the API call is added,
       // after that we can move into the if block.
       event.preventDefault();


       // Checking if the form has any invalid input. If not it stops the form to be saved.
       if (!form.checkValidity()) {
           // The stopPropagation() method of the Event interface prevents further propagation
           // of the current event in the capturing and bubbling phases.
           // https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
           event.stopPropagation();
       }
   };


   return (
       <Form className="mb-3" style={{width: "60vw"}} onSubmit={handleSubmit}>
           <Form.Group className="mb-3" controlId="formTitle">
               <Form.Label>Title</Form.Label>
               <Form.Control required type="text" placeholder="Enter the title" size="lg" onChange={e => setTitle(e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formText">
               <Form.Label>Text</Form.Label>
               <Form.Control required as="textarea" rows={3} onChange={e => setText(e.target.value)}/>
           </Form.Group>
           <Form.Group className={"mb-3"} controlId="formAuthor">
               <Form.Label>Author</Form.Label>
               <Form.Control  type="text" placeholder="Enter the author name" onChange={e => setAuthor(e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formLink">
               <Form.Label>Link name</Form.Label>
               <Form.Control type="text" placeholder="Enter the url where people can read more (Optional)" size="lg" onChange={e => setlink(e.target.value)}/>
           </Form.Group>
 	     <Button variant="primary" type="submit">
             Save
           </Button>
     </Form>
);


}


export default BlogPostForm;


