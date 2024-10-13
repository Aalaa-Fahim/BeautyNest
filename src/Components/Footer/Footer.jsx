import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  margin: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h2>BeautyNest</h2>
          <p>Your beauty and self-care destination.</p>
        </FooterSection>
        <FooterSection>
          <h3>Contact Us</h3>
          <p>Email: info@beautynest.com</p>
        </FooterSection>
        <FooterSection>
          <h3>Follow Us</h3>
          <p><a href="#" style={{ color: '#fff' }}>Instagram</a></p>
          <p><a href="#" style={{ color: '#fff' }}>Facebook</a></p>
        </FooterSection>
      </FooterContent>
      <p>&copy; {new Date().getFullYear()} BeautyNest. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
