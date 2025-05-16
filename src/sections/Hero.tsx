'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';

const Section = styled.section`
  min-height: calc(100vh - 4.4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  background: linear-gradient(135deg, ${({ theme }) => theme.background} 0%, ${({ theme }) => theme.highlight} 100%);
  color: ${({ theme }) => theme.text};
  transition: background 0.3s ease, color 0.3s ease;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 12rem;
  max-width: 1000px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const TextContainer = styled.div`
  max-width: 540px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-left: -2rem;
`;

const Name = styled.h1`
  font-size: 4rem;
  font-weight: 700;

  span {
    color: #22c55e;
  }

  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

const Description = styled.p`
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  margin-top: 1rem;
`;

const Subtitle = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.subtext};
  margin-top: 1rem;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 500;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;

  &.primary {
    background-color: #22c55e;
    color: white;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(34, 197, 94, 0.3);
      background-color: #16a34a;
    }
  }

  &.secondary {
    border: 2px solid #f97316;
    color: #f97316;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(249, 115, 22, 0.3);
      background-color: #f97316;
      color: white;
    }
  }
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  border-radius: 20%;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  max-width: 320px;

  @media (max-width: 768px) {
    order: -1;
    max-width: 260px;
  }

  img {
    border-radius: 20%;
    object-fit: cover;
    width: 100%;
    height: auto;
  }
`;

const ScrollDown = styled.a`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  color: ${({ theme }) => theme.subtext};
  font-size: 1.5rem;
  cursor: pointer;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(8px); }
  }

  &:hover {
    color: ${({ theme }) => theme.text};
  }
`;

export default function Hero() {
  return (
    <Section id="hero">
      <Content>
        <TextContainer>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Name>
              <span>Pedro Leone</span>
            </Name>
            <Description>
              Desarrollador FullStack. Especializado en BackEnd y arquitectura de datos.
            </Description>
            <Subtitle>
              Formado en Ciencias como Licenciado en Ciencias Biológicas.
            </Subtitle>
            <Buttons>
              <Button href="#projects" className="primary">
                Ver proyectos
              </Button>
              <Button
                href="https://github.com/PLPedroLeone"
                className="secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} style={{marginRight: '0.5rem'}} />
                GitHub
              </Button>
            </Buttons>
          </motion.div>
        </TextContainer>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <ImageContainer>
            <Image
              src="/pedro.jpg"
              alt="Pedro Leone"
              width={320}
              height={320}
              priority
            />
          </ImageContainer>
        </motion.div>
      </Content>
      <ScrollDown href="#about">
          <FaChevronDown />
      </ScrollDown>
    </Section>
  );
}