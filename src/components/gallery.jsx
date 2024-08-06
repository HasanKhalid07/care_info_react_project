import React from 'react';
import styled from 'styled-components';
import templeImage from '../Pictures/temple2.png'; 

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px;
  background-color: #f5f5f5;
`;

const ImageContainer = styled.div`
  width: 50%;
  position: relative; 
  margin-right: 20px; 
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

const TextContainer = styled.div`
  width: 50%;
  text-align: left; /* Align text to the left */
  color: black; /* Set text color to black */
`;

const Title = styled.h2`
  font-size: 36px; 
  margin-bottom: 10px;
  position: relative;
  display: inline-block; 

  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 65px; 
    height: 3px;
    background-color: red;
  }
`;

const Description = styled.p`
  font-size: 16px;
  color: #4d4d4d; 
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #ff0000; 
  color: white; 
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: bold;

  &:after {
    content: '→';
    margin-left: 10px;
  }
`;

const Gallery = () => {
  return (
    <Container>
      <ImageContainer>
        <Image src={templeImage} alt="Gadhimai Temple" />
        <Overlay />
      </ImageContainer>
      <TextContainer>
        <Title>Our Gallery</Title>
        <Description>Explore our comprehensive gallery showcasing high-resolution images of the Gadhimai Temple.</Description>
        <Button>Explore</Button>
      </TextContainer>
    </Container>
  );
};

export default Gallery;
