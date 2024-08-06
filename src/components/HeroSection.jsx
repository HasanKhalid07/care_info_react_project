import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../Pictures/temple.png'; 

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  color: white;
  text-align: center;
  position: relative; 
  margin-top: 100px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); 
    z-index: 1;
  }

  /* Ensure the text and button are above the overlay */
  > * {
    position: relative;
    z-index: 2;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroButton = styled.button`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #FF0000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);

  &:hover {
    background-color: #cc0000;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroTitle>Welcome to the Grand Gadhimai Mela</HeroTitle>
      <HeroSubtitle>Experience the Sacred and Historic Five-Yearly Festival</HeroSubtitle>
      <HeroButton>Read More</HeroButton>
    </HeroContainer>
  );
};
export default HeroSection;

