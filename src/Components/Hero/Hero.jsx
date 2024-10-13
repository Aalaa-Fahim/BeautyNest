import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

// Hero Section Container
const HeroContainer = styled.div`
  background-image: url('src/assets/images/background.jpg');
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

// Hero Content
const HeroContent = styled(motion.div)`
  max-width: 600px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
`;

// Hero Title
const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

// Hero Subtitle with Typewriter Effect
const HeroSubTitle = styled.div`
  font-size: 1.5rem;
  margin: 20px 0;
`;

// Call to Action Button
const CTAButton = styled(motion.a)`
  background-color: #695c5c;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #d3b8b8;
  }
`;

// About Section
const AboutSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  color: #695c5c;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

// About Section Text
const AboutText = styled.div`
  flex: 1;
  
  h1 {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #daa49a;
  }
`;

// About Image
const AboutImage = styled.img`
  flex: 1;
  max-width: 350px;
  margin-left: 20px;

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const Hero = () => {
  return (
    <>
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

      <AboutSection>
        <AboutText>
          <h1>About BeautyNest</h1>
          <p>Welcome to BeautyNest, your ultimate destination for all things beauty and self-care! We believe that every individual deserves to feel confident and radiant in their own skin. That’s why BeautyNest is dedicated to curating a luxurious collection of cosmetics and skincare products from trusted brands around the world. Whether you're seeking bold makeup for a night out or natural skincare essentials for daily rejuvenation, our platform is designed to provide an effortless shopping experience. At BeautyNest, we celebrate diversity, creativity, and self-expression, helping you embrace your unique beauty in every way. Explore, indulge, and discover your personal beauty haven with us!</p>
        </AboutText>
        <AboutImage src="src/assets/images/final_logo.png" alt="About BeautyNest" />
      </AboutSection>
    </>
  );
};

export default Hero;
