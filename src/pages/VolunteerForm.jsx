import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #FFFFFF;
  margin-top: 101px;
`;

const Header = styled.div`
  background-color: #f4e0e0;
  padding: 50px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 36px;
  margin: 0;
  color: #333;

  span {
    position: relative;
    &.underline::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      height: 2px;
      background: #D03030;
      border-bottom: 2px solid #D03030;
    }
  }
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  color: #333;
  padding-bottom: 5px;
  margin-bottom: 20px;
`;

const FormRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const FormField = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;

  label {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    display: block;
    margin-bottom: 15px;
  }

  input, textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
    background: #EFF4F4;

    &:focus {
      border-color: #333;
    }
  }
`;

const DateFieldContainer = styled.div`
  display: flex;
  width: 277px;
  height: 40px;
  padding: 6px;
  gap: 10px; 
`;

const DateInput = styled.input`
  flex: 1;
  height: 100%;
  padding: 0 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
  background: #EFF4F4;
`;

const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const SubmitButton = styled.button`
  background-color: #c04b37;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #a63b2b;
  }

  span {
    margin-left: 10px;
    display: inline-block;
    transition: margin-left 0.3s;
  }

  &:hover span {
    margin-left: 15px;
  }
`;

const VolunteerApplicationForm = () => {
  return (
    <Container>
      <Header>
        <Title>
          <span>A</span>
          <span className="underline">pplication for Volunteer</span>
          <span>s</span>
        </Title>
      </Header>
      <Section>
        <SectionTitle>Information</SectionTitle>
        <FormRow>
          <FormField>
            <label>Full Name</label>
            <input type="text" />
          </FormField>
          <FormField>
            <label>Email Address</label>
            <input type="email" />
          </FormField>
        </FormRow>
        <FormRow>
          <FormField>
            <label>Phone Number</label>
            <input type="tel" />
          </FormField>
          <FormField>
            <label>Date of Birth</label>
            <input type="date" />
          </FormField>
        </FormRow>
      </Section>
      <Section>
        <SectionTitle>Primary Address</SectionTitle>
        <FormRow>
          <FormField>
            <label>State</label>
            <input type="text" />
          </FormField>
          <FormField>
            <label>District</label>
            <input type="text" />
          </FormField>
        </FormRow>
        <FormRow>
          <FormField>
            <label>City</label>
            <input type="text" />
          </FormField>
        </FormRow>
      </Section>
      <Section>
        <SectionTitle>Availability</SectionTitle>
        <FormField>
          <label>Available Dates For Volunteering</label>
          <DateFieldContainer>
            <DateInput type="date" placeholder="From" />
            <DateInput type="date" placeholder="To" />
          </DateFieldContainer>
        </FormField>
      </Section>
      <Section>
        <SectionTitle>Additional Information</SectionTitle>
        <FormRow>
          <FormField>
            <label>1. Why do you want to volunteer at the Gadhimai Mandir?</label>
            <textarea rows="4" />
          </FormField>
        </FormRow>
        <FormRow>
          <FormField>
            <label>2. Do You Have any Previous Volunteer Experience?</label>
            <textarea rows="4" />
          </FormField>
        </FormRow>
      </Section>
      <SubmitButtonContainer>
        <SubmitButton>
          Submit Request <span>→</span>
        </SubmitButton>
      </SubmitButtonContainer>
    </Container>
  );
};

export default VolunteerApplicationForm;
