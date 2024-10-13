import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 6px;
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FooterSection = styled.div`
  margin: 5px;
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
          <p>Email: info@beautynest.com</p>
        </FooterSection>
        <FooterSection>
          <h3>Follow Us</h3>
          <p>
            <a href="#" style={{ color: '#fff', marginRight: '10px' }}>Instagram</a> 
            <span>|</span>
            <a href="#" style={{ color: '#fff', marginLeft: '10px' }}>Facebook</a>
          </p>
        </FooterSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
