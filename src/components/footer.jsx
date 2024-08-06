import React from 'react';
import styled from 'styled-components';
import logo from '../Pictures/logo.jpeg'; 
import facebookIcon from '../Pictures/facebook-icon.jpeg'; 
import instagramIcon from '../Pictures/instagram-icon.jpeg';
import locationIcon from '../Pictures/location-icon.png'; 
import mailIcon from '../Pictures/mail-icon.png'; 
import phoneIcon from '../Pictures/phone-icon.png'; 

const FooterContainer = styled.footer`
  background-color: #282828;
  color: #fff;
  padding: 20px 40px;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
`;

const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%; 
  margin-bottom: 10px;
`;

const LogoText = styled.h3`
  margin: 0;
  color: #FFFFFF;
  text-align: center;
`;

const DescriptionText = styled.p`
  color: #747474;
  margin-top: 10px;
  margin-bottom: 20px;
  font-size: 12px; 
  text-align: center;
  max-width: 180px; 
  word-break: break-word; 
`;

const LinksContainer = styled.div`
  display: flex;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 40px;
`;

const ColumnHeading = styled.h4`
  color: #FFFFFF;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: #747474;
  text-decoration: none;
  margin-bottom: 10px;
  display: block;

  &:hover {
    color: red; 
  }
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px; 
`;

const ContactIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const ContactText = styled.p`
  color: #747474;
  margin: 0; 
`;

const SocialIconsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const SocialIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

const FollowUsText = styled.p`
  color: #747474;
  margin-right: 10px;
  margin: 0; 
`;

const CopyrightContainer = styled.div`
  background-color: #525352;
  color: #fff;
  text-align: center;
  padding: 5px;
  margin-top: 20px; 
`;

const CopyrightText = styled.p`
  font-size: 12px; 
  margin: 0; 
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LogoContainer>
          <LogoImage src={logo} alt="Logo" />
          <LogoText>Gadhimai Temple</LogoText>
          <DescriptionText>
            The Gadhimai Temple is an iconic religious site located in Kathmandu, Nepal. It is known for its vibrant festivals and rich cultural heritage.
          </DescriptionText>
        </LogoContainer>
        <LinksContainer>
          <Column>
            <ColumnHeading>Quick Links</ColumnHeading>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/photo-gallery">Photo Gallery</FooterLink>
            <FooterLink href="/membership-form">Membership Form</FooterLink>
          </Column>
          <Column>
            <ColumnHeading>About</ColumnHeading>
            <FooterLink href="/about-the-temple">About The Temple</FooterLink>
            <FooterLink href="/events">Events</FooterLink>
            <FooterLink href="/management-committee">Management Committee</FooterLink>
            <FooterLink href="/trustee">Trustee</FooterLink>
          </Column>
        </LinksContainer>
        <ContactContainer>
          <ColumnHeading>Contact</ColumnHeading>
          <ContactItem>
            <ContactIcon src={locationIcon} alt="Location" />
            <ContactText>Kathmandu, Nepal</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon src={mailIcon} alt="Mail" />
            <ContactText>managadhimaltemple@gmail.com</ContactText>
          </ContactItem>
          <ContactItem>
            <ContactIcon src={phoneIcon} alt="Phone" />
            <ContactText>+977-9811102136</ContactText>
          </ContactItem>
          <SocialIconsContainer>
            <FollowUsText>Follow us:</FollowUsText>
            <a href="https://www.facebook.com"><SocialIcon src={facebookIcon} alt="Facebook" /></a>
            <a href="https://www.instagram.com"><SocialIcon src={instagramIcon} alt="Instagram" /></a>
          </SocialIconsContainer>
        </ContactContainer>
      </FooterContent>
      <CopyrightContainer>
        <CopyrightText>Copyright ©2024 Careinfo. All Rights Reserved</CopyrightText>
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
