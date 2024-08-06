import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 1440px; 
  padding: 40px; 
  text-align: center;
`;

const ContentDescription = styled.div`
  text-align: justify;
  margin-left: 30px;
  margin-right: 30px;
  line-height: 1.5; 
  font-size: 16px; 
  font-family: 'Arial', sans-serif; 
`;

const Title = styled.h1`
  font-size: 32px;
  color: red;
  margin: 0; 
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.5;
`;

const WelcomeSection = () => {
  return (
    <Container>
      <ContentContainer>
        <Title>Welcome to</Title>
        <Title>Gadhimai Temple: Bariyarpur Bara</Title>
      </ContentContainer>
      <ContentDescription>
        <Text>
          The Mahagadhimai Temple Mela is a major Hindu festival dedicated to Goddess Gadhimai, an incarnation of Kali, held at the Gadhimai Temple in Mahagadhimai
          Municipality, Bara District, Nepal. Traditionally known for the sacrifice of a large number of animals, the festival now emphasizes animal welfare following a 2015 ban on
          such practices. Despite the ban, the festival continues to draw thousands of pilgrims who visit the temple to worship the goddess and seek her blessings.
        </Text>
        <Text>
          Located in the Terai region, the Gadhimai Temple Mela is especially significant to the Bhojpuri community, who view the temple as a sacred site. The goddess is believed
          to fulfill vows and bring happiness to devotees. The festival is celebrated with great devotion, attracting visitors from across the region to offer prayers and make
          offerings, highlighting the evolving nature of cultural and religious practices in Nepal.
        </Text>
       </ContentDescription>
    </Container>
  );
};

export default WelcomeSection;
