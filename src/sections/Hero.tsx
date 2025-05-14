'use client';

import styled from 'styled-components';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Section = styled.section`
  min-height: calc(100vh - 4rem); /* Navbar altura aprox */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  gap: 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    border-radius: 1rem;
    object-fit: cover;
    max-width: 300px;
    height: auto;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;

  a {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 500;
    transition: 0.3s ease;

    &:first-child {
      background-color: #16a34a;
      color: white;

      &:hover {
        background-color: #15803d;
      }
    }

    &:last-child {
      border: 2px solid #16a34a;
      color: #16a34a;

      &:hover {
        background-color: #16a34a;
        color: white;
      }
    }
  }

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default function Hero() {
  return (
    <Section id="hero">
      <TextContainer>
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          ¡Hola! Soy Pedro Leone
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl mt-4 max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Backend developer con mentalidad lógica y estructura clara.  
          Desarrollo sistemas bien pensados, con datos ordenados y funcionalidades limpias.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <ButtonGroup>
            <Link href="/cv.pdf" download>Descargar CV</Link>
            <a href="#contact">Contáctame</a>
          </ButtonGroup>
        </motion.div>
      </TextContainer>

      <ImageContainer>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <Image
            src="/pedro.jpg"
            alt="Pedro Leone"
            width={300}
            height={300}
            priority
          />
        </motion.div>
      </ImageContainer>
    </Section>
  );
}