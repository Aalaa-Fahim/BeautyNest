import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 3px 40px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  margin: 10px 0;
`;

const FooterLink = styled.a`
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <p>&copy; 2024 BeautyNest. All rights reserved.</p>
        </FooterSection>
        <FooterSection>
          <h3>Contact Us</h3>
          <address>Email: info@beautynest.com</address>
        </FooterSection>
        <FooterSection>
          <h3>Follow Us</h3>
          <nav>
            <FooterLink href="#">Instagram</FooterLink>
            <span>|</span>
            <FooterLink href="#">Facebook</FooterLink>
          </nav>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
