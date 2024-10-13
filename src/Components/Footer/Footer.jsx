import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 10px; /* Decreased height */
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
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
          <p>&copy; 2024 BeautyNest. All rights reserved.</p> {/* Text moved to the left */}
        </FooterSection>
        <FooterSection>
          <h3>Contact Us</h3>
          <p>Email: info@beautynest.com</p>
        </FooterSection>
        <FooterSection>
          <h3>Follow Us</h3>
          <p>
            <a href="#" style={{ color: '#fff', marginRight: '10px' }}>Instagram</a>
            <a href="#" style={{ color: '#fff' }}>Facebook</a> {/* Placed side by side */}
          </p>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
