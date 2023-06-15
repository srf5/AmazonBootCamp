import React, { useState } from 'react';
import './App.css';
import BlogPosts from "./BlogPosts";
import BlogPostForm from './BlogPostForm';
import {PostDTO} from "../api/models/PostDTO";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
   // Please fill this with your own blog posts. 🙂
   const [blogPosts, setBlogPosts] = useState<PostDTO[]>([
    {
      id: "1",
      title: "Trip to Beirut",
      text: "Last summer I went to Beirut, a beautiful city in the middle of the Mediterranean Sea.",
      author: "Sabine Farhat",
      pictureUrl:"https://static.nationalgeographic.co.uk/files/styles/image_3200/public/Sleep_Beirut%20Watefront%20%26%20FSBEI%20Location_HR_WEB.jpg?w=1900&h=1267"
    },
    {
      id: "2",
      title: "Hiking Adventure in the Alps",
      text: "I recently embarked on a thrilling hiking adventure in the breathtaking Alps. The stunning views and challenging trails made it an unforgettable experience.",
      author: "Sabine Farhat",
      pictureUrl:"https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2017/04/thumb_720_450_Alpsdreamstime_xl_45054687.jpg"
    },
    {
      id: "3",
      title: "Exploring Tokyo's Hidden Gems",
      text: "During my trip to Tokyo, I discovered some hidden gems that are often overlooked by tourists. From quaint alleyways to traditional tea houses, Tokyo has so much more to offer beyond its popular attractions.",
      author: "Sabine Farhat",
      pictureUrl:"https://a.cdn-hotels.com/gdcs/production26/d1450/64fe038c-0da0-413f-9fcd-dbb337ce3012.jpg?impolicy=fcrop&w=800&h=533&q=medium"
    },
    {
      id: "4",
      title: "Culinary Delights in Paris",
      text: "Paris is a food lover's paradise, and I had the pleasure of indulging in its culinary delights. From flaky croissants to decadent pastries, every bite was a taste of heaven.",
      author: "Sabine Farhat",
      pictureUrl:"https://media.cnn.com/api/v1/images/stellar/prod/230324090551-01-visiting-france-during-protests-what-to-know-top.jpg?c=16x9&q=h_720,w_1280,c_fill"
    },
  ]);
  
   
  const onFormSubmit = (post: PostDTO) => {
    const newPost = { ...post, id: String(blogPosts.length + 1) };
    setBlogPosts([newPost, ...blogPosts]);
  };

   return (
       <div className="App">
           <header className="App-header">
               {"Sabine's personal blog"}
           </header>
           <body className="App-body">
          {/* <BlogPostForm onPostSubmit={onFormSubmit} /> */}
            <BlogPosts blogPosts={blogPosts.reverse()}/>
           </body>
           <footer className='App-footer'>
            Thank you for visiting our blog! 
            <div className="social-icons">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
           </footer>
       </div>
   );
}


export default App;