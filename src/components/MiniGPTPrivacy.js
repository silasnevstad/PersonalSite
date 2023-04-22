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

const MiniGPTPrivacy = () => {
  return (
    <PrivacyContainer>
      <Title>MiniGPT Privacy Policy</Title>
      <LastUpdated>Last updated: April 22, 2023</LastUpdated>
      <Text>
        This Privacy Policy describes how we handle your information when you
        use our MiniGPT mobile application (the "App"). By using the App, you
        agree to the handling of your information in accordance with this
        Privacy Policy.
      </Text>
      <SubTitle>Information Storage and Use</SubTitle>
      <Text>
        The App does not require users to create an account or log in, and we
        do not collect any personally identifiable information about you. We
        store your conversation or chat history locally on your device for the
        purpose of providing a seamless conversation experience. We do not
        collect or store your chat history on our servers.
      </Text>
      <Text>
        If you choose to input an API key in the App, we store this information
        locally on your device to enable the App's functionality. We do not
        transmit or store your API key on our servers.
      </Text>
      <SubTitle>Security</SubTitle>
      <Text>
        We value your trust in providing us with your information, and we are
        committed to using commercially reasonable measures to protect it.
        However, no method of electronic storage is 100% secure, and we cannot
        guarantee absolute security.
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

export default MiniGPTPrivacy;
