import React from 'react';
import styled from 'styled-components';
import eventImage from '../Pictures/temple1.png';
import calendarIcon from '../Pictures/calender.png';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; 
  padding: 55px;
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const TextContainer = styled.div`
  width: 50%;
  padding-right: 20px; 
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 50px; 
    height: 2px;
    background-color: red;
  }
`;

const SubTitle = styled.h3`
  font-size: 20px; 
  margin-bottom: 10px;
`;

const EventInfo = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const EventDate = styled.span`
  font-size: 14px;
  color: red; 
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  &:before {
    content: '';
    display: inline-block;
    width: 14px; 
    height: 14px; 
    background-image: url(${calendarIcon});
    background-size: contain;
    background-repeat: no-repeat;
    margin-right: 8px;
  }
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

const Events = () => {
  return (
    <Container>
      <TextContainer>
        <Title>Upcoming Events</Title>
        <SubTitle>Gadhimai Mela</SubTitle>
        <EventDate>Mon, 2081/06/17 - 2081/08/30</EventDate>
        <EventInfo>It is a grand five-yearly festival at Gadhimai Temple, featuring vibrant processions, sacred rituals, and a celebration of deep-rooted spirituality.</EventInfo>
        <SubTitle>Inauguration of the Shri Gadhimai</SubTitle>
        <EventDate>2081/03/09</EventDate>
        <EventInfo>Kick off the grand Shri Gadhimai Mela with the vibrant Kalash Yatra and Shobha Yatra, marking the start of this sacred festival.</EventInfo>
        <Button>Explore</Button>
      </TextContainer>
      <ImageContainer>
        <Image src={eventImage} alt="Event Image" />
      </ImageContainer>
    </Container>
  );
};

export default Events;


