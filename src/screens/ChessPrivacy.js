import React from 'react';
import styled from 'styled-components';

const PrivacyContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const LastUpdated = styled.p`
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ChessClockPrivacy = () => {
  return (
    <PrivacyContainer>
      <Title>Chess Clock Swift App Privacy Policy</Title>
      <LastUpdated>Last updated: April 22, 2023</LastUpdated>
      <Text>
        This Privacy Policy describes how we handle your information when you
        use our Chess Clock Swift mobile application (the "App"). By using the App, you
        agree to the handling of your information in accordance with this
        Privacy Policy.
      </Text>
      <SubTitle>Information Collection and Use</SubTitle>
      <Text>
        The App does not require users to create an account or log in, and we
        do not collect any personally identifiable information about you. The App serves as a chess clock with different time modes for over-the-board games, without any data collection or storage.
      </Text>
      <SubTitle>Security</SubTitle>
      <Text>
        We value your trust in using our App, and while there is no user information collected or stored, we remain committed to ensuring a secure user experience.
      </Text>
      <SubTitle>Changes to This Privacy Policy</SubTitle>
      <Text>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page. You are
        advised to review this Privacy Policy periodically for any changes.
        Changes to this Privacy Policy are effective when they are posted on
        this page.
      </Text>
      <SubTitle>Contact Us</SubTitle>
      <Text>
        If you have any questions or suggestions about our Privacy Policy,
        please contact us.
      </Text>
    </PrivacyContainer>
  );
};

export default ChessClockPrivacy;
