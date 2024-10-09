import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

const HeroContainer = styled.div`
  background-image: url('src/assets/images/background1.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  text-align: center;
`;

const HeroContent = styled(motion.div)`
  max-width: 600px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const HeroSubTitle = styled.div`
  font-size: 1.5rem;
  margin: 20px 0;
`;

const CTAButton = styled(motion.a)`
  background-color: #ff6347;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #ff4500;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeroTitle>Welcome to BeautyNest</HeroTitle>
        <HeroSubTitle>
          <Typewriter
            options={{
              strings: ['Discover your beauty', 'Shop the best products'],
              autoStart: true,
              loop: true,
            }}
          />
        </HeroSubTitle>
        <CTAButton
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          href="/shop"
        >
          Shop Now
        </CTAButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
