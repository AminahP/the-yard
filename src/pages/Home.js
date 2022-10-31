import { useEffect, useState } from 'react';
// Link component allow users to navigate to the blog post component page
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import http from '../lib/http';
// utility function to format the creation date
import formatDate from '../lib/formatDate';
import React from 'react';

const Home = () => {
  // useState allows us to make use of the component state to store the posts
  const [posts, setPosts] = useState([]); 
  useEffect(() => {
    // Call the server to fetch the posts and store them into the state
    async function fetchData() {
      const { data } = await http.get('/api/posts');
      setPosts(data.data.posts);
    }
    fetchData();
  }, []);
  
  return (
    <>
     

      <Container className="my-5" style={{ maxWidth: '800px' }}>
        
        <h2 className="text-center">Welcome to The Yard, the best blog about HBCU's</h2>
        <br></br>

        <Image
          src="https://www.nccu.edu/sites/default/files/inline-images/admin%20building%20overhead%20copy.jpg"
          width="1500"
          // style={{ borderRadius: '50%' }}
          className="d-block mx-auto img-fluid"
        /> 

        <h6>  Picture of North Carolina Central University in Durham,NC</h6>
        <br></br>

        <p>Did you know the first HBCU (Historically black college and university) was founded in Cheyney, PA in 1837. Cheyney University previously known as the Institute for Colored Youth was founded by Richard Humphreys in order to prepare formerly freed slaves 
          for entering the world, teaching trades and agriculture. In America many states refused to accept black applicants after slavery, becuase of that many schools where created to educate black students. Today we have over 100 established HBCU's,
         with many noteable Almuni like Spike Lee, Samuel L. Jackson , Megan The Stallion, V.P Kamala Harris , memeber's of your family, and hopefully you.    </p>
      </Container>
      <Container style={{ maxWidth: '800px' }}>
        <ListGroup variant="flush" as="ol">
          {
            posts.map((post) => {
            
              return (
                <ListGroup.Item key={post._id}> 
                  <div className="fw-bold h3">
                    <Link to={`/posts/${post._id}`} style={{ textDecoration: 'none' }}>{post.title}</Link>
                  </div>
                  <div>{post.author} - <span className="text-secondary">{formatDate(post.createdAt)}</span></div>
                </ListGroup.Item>
              );
            })
          }
        </ListGroup>
      </Container>
    </>
  );
};

export default Home;
