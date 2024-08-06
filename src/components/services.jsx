import React from 'react';
import styled from 'styled-components';
import icon1 from '../Pictures/hand-icon.png';
import icon2 from '../Pictures/health-icon.png';
import icon3 from '../Pictures/Handjoin-icon.png';
import icon4 from '../Pictures/calender.png';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 60px 35px;
  background-color: #f5f5f5;
`;

const ServiceCard = styled.div`
  text-align: center;
`;

const ServiceIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const ServiceTitle = styled.h4`
  font-size: 18px;
  margin-bottom: 5px;
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

const Services = () => {
  const servicesData = [
    {
      icon: icon1,
      title: 'Live Darshan & Streaming',
      description: 'Experience temple events live from anywhere.',
    },
    {
      icon: icon2,
      title: 'Health & Wellness Program',
      description: 'Participate in health camps and wellness activities.',
    },
    {
      icon: icon3,
      title: 'Volunteer Opportunities',
      description: 'Be a part of our community and make a difference.',
    },
    {
      icon: icon4,
      title: 'Event Calendar & Updates',
      description: 'Stay informed about all upcoming events and celebrations.',
    },
  ];

  return (
    <Container>
      {servicesData.map((service, index) => (
        <ServiceCard key={index}>
          <ServiceIcon src={service.icon} alt={service.title} />
          <ServiceTitle>{service.title}</ServiceTitle>
          <ServiceDescription>{service.description}</ServiceDescription>
        </ServiceCard>
      ))}
    </Container>
  );
};

export default Services;
