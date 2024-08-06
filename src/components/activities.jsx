import React from 'react';
import styled from 'styled-components';
import image1 from '../Pictures/animal.png';
import image2 from '../Pictures/food.png';
import image3 from '../Pictures/health.png';
import image4 from '../Pictures/environment.png';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 40px 35px;
  gap: 10px;  // Ensuring there's a small gap between images
`;

const ImageContainer = styled.div`
  text-align: center;
`;

const Image = styled.img`
  width: 270px;
  height: 220px;  // Rectangular shape
  object-fit: cover;
`;

const Title = styled.h3`
  margin-top: 10px;
  font-size: ${(props) => (props.isHealth ? '14px' : '16px')};  
  font-weight: normal;  
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

const ImageComponent = ({ imageSrc, title, isHealth }) => {
  return (
    <ImageContainer>
      <Image src={imageSrc} alt={title} />
      <Title isHealth={isHealth}>{title}</Title>
    </ImageContainer>
  );
};

const Activities = () => {
  return (
    <div style={{ textAlign: 'center' }}>  {/* Ensuring the entire content is centered */}
      <Heading>Charitable Activities</Heading>
      <Description>
        Gadhimai Temple Trust is engaged in various charitable initiatives. Some of these activities are outlined below.
      </Description>
      <Container>
        <ImageComponent imageSrc={image1} title="Animal Welfare Initiatives" />
        <ImageComponent imageSrc={image2} title="Food Distribution" />
        <ImageComponent imageSrc={image3} title="Health Initiatives" isHealth />
        <ImageComponent imageSrc={image4} title="Environmental Conservation" />
      </Container>
    </div>
  );
};

export default Activities;
