import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import styled from '@emotion/styled';

const PostContainer = styled.div(() => ({
  width: '300px',
  margin: '10px',
 
  border: '1px solid #ccc',
  borderRadius: '5px',
  overflow: 'hidden',
}));

const CarouselContainer = styled.div(() => ({
  position: 'relative',
}));

const Carousel = styled.div(() => ({
  display: 'flex',
  overflowX: 'scroll',
  scrollbarWidth: 'none',
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  position: 'relative',
}));

const CarouselItem = styled.div(() => ({
  marginTop:"70px",
  flex: '0 0 auto',
  scrollSnapAlign: 'start',
}));

const Image = styled.img(() => ({
  width: '280px',
  height: 'auto',
  maxHeight: '300px',
  padding: '10px',
}));

const Content = styled.div(() => ({
  padding: '10px',
  '& > h2': {
    marginBottom: '16px',
  },
}));

const Button = styled.button(() => ({
  position: 'absolute',
 top:"50%",
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
  border: 'none',
  color: '#000',
  fontSize: '20px',
  cursor: 'pointer',
  height: '50px',
}));

const PrevButton = styled(Button)`
  left: 10px;
`;

const NextButton = styled(Button)`
  right: 10px;
`;


const UserName = styled.div(() => ({
  marginRight: '10px',
  fontWeight: 'bold',
}));

const UserEmail = styled.div(() => ({
  color: '#666',
}));
const UserInfo = styled.div(() => ({
  position: 'absolute',
  top: '10px',
  left: '10px',
  display: 'flex',
  alignItems: 'center',
  fontSize: '14px',
  zIndex: 1,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  padding: '8px',
  borderRadius: '5px',
  width: 'calc(100% - 20px)', 
}));

const UserInitials = styled.div(() => ({
  marginRight: '10px',
  fontWeight: 'bold',
  width: '40px', 
  height: '40px', 
  borderRadius: '50%',
  backgroundColor: '#ccc', 
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '18px',
}));

const UserNameEmail = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const Post = ({ post }) => {
  const carouselRef = useRef(null);

  const handleNextClick = () => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        
        left: scrollWidth,
        behavior: 'smooth',
      });
    }
  };

  const handlePrevClick = () => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.clientWidth;
      carouselRef.current.scrollBy({
        left: -scrollWidth,
        behavior: 'smooth',
      });
    }
  };
  const user = post.user || {
    firstname: 'Rahul',
    lastname: 'Bera',
    email: 'rahulbera9932@gmail.com',
  };

  const initials = `${user.firstname.charAt(0).toUpperCase()}${user.lastname.charAt(0).toUpperCase()}`;
  return (
    
    <PostContainer>
       
      <CarouselContainer>
      <UserInfo>
      <UserInfo>
        <UserInitials>{initials}</UserInitials>
        <UserNameEmail>
          <UserName>{`${user.firstname} ${user.lastname}`}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserNameEmail>
      </UserInfo>
  </UserInfo>
      
        <Carousel ref={carouselRef}>
          {post.images.map((image, index) => (
            <CarouselItem key={index}>
              <Image src={image.url} alt={post.title} />
            </CarouselItem>
          ))}
        </Carousel>
        <PrevButton onClick={handlePrevClick}>&#10094;</PrevButton>
        <NextButton onClick={handleNextClick}>&#10095;</NextButton>
      </CarouselContainer>
      <Content>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Content>
    </PostContainer>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.shape({
      firstname: PropTypes.any,
      lastname: PropTypes.any,
      email: PropTypes.any,
    }),
    content: PropTypes.any,
    images: PropTypes.shape({
      map: PropTypes.func,
    }),
    title: PropTypes.any,
  }),
};



export default Post;