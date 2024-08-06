import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import image1 from '../Pictures/pooja1.png';
import image2 from '../Pictures/pooja2.png';
import image3 from '../Pictures/pooja3.png';
import image4 from '../Pictures/pooja4.png';
import image5 from '../Pictures/pooja2.png';
import image6 from '../Pictures/pooja1.png';
import image7 from '../Pictures/pooja4.png';
import image8 from '../Pictures/pooja1.png';
import image9 from '../Pictures/pooja4.png';
import image10 from '../Pictures/pooja2.png';
import image11 from '../Pictures/pooja3.png';
import image12 from '../Pictures/pooja1.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 35px;
  background-color: #f5f5f5;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 20px;
  gap: 25px;  
`;

const Image = styled.img`
  width: 270px;
  height: 220px;  // Rectangular shape
  object-fit: cover;
`;

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    display: block;
    height: 2px;
    background: red;
    width: 100px;
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 30px;
  font-size: 16px;
  color: #333;
`;

const EclipseContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Eclipse = styled.div`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: ${(props) => (props.active ? 'red' : 'gray')};
  border-radius: 50%;
`;

const Pooja = () => {
  const images = useMemo(() => [
    image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12
  ], []);

  const [currentImages, setCurrentImages] = useState(images.slice(0, 4));
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 4) % images.length);
    }, 1200);

    return () => clearInterval(intervalId);
  }, [images]);

  useEffect(() => {
    setCurrentImages(images.slice(currentIndex, currentIndex + 4));
  }, [currentIndex, images]);

  return (
    <Container>
      <Heading>Pooja</Heading>
      <Description>
        The Gadhimai Temple hosts a variety of sacred rituals and ceremonies within its premises.
      </Description>
      <ImageContainer>
        {currentImages.map((image, index) => (
          <Image key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </ImageContainer>
      <EclipseContainer>
        {images.slice(0, Math.ceil(images.length / 4)).map((_, index) => (
          <Eclipse key={index} active={index === Math.floor(currentIndex / 4)} />
        ))}
      </EclipseContainer>
    </Container>
  );
};

export default Pooja;
