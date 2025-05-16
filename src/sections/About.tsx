'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronDown, FaGithub, FaLinkedin } from 'react-icons/fa';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 2rem;
  position: relative;
  background: linear-gradient(135deg, ${({ theme }) => theme.highlight} 0%, ${({ theme }) => theme.background} 100%);
  color: ${({ theme }) => theme.text};
  scroll-snap-align: start;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: -3rem auto -5rem auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoCard = styled.div`
  background-color: ${({ theme }) => theme.accent}30;
  padding: 2rem;
  border-radius: 16px;
  color: ${({ theme }) => theme.text};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 1.2rem;
  text-align: left;
  min-height: 350px;
`;

const IconRow = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const IconWrapper = styled.a`
  background-color: ${({ theme }) => theme.accent}80;
  padding: 0.5rem;
  border-radius: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, background-color 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background-color: ${({ theme }) => theme.primary};
  }

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
  }
`;

const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    line-height: 1.7;
    max-width: 70ch;
    color: ${({ theme }) => theme.subtext}
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

export default function About() {
  return (
    <Section id="about">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title>Sobre mí</Title>
          <Content>
            <InfoCard>
              <span><strong>Pedro Leone</strong></span>
              <span>💼 Desarrollador Fullstack | Biólogo</span>
              <span>📍 Buenos Aires, Argentina</span>
              <span>✉️ pedro.leone@example.com</span>

                <IconRow>
                  <IconWrapper
                    href="https://www.linkedin.com/in/pedro-leone"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </IconWrapper>
                  <IconWrapper
                    href="https://github.com/PLPedroLeone"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </IconWrapper>
                </IconRow>
            </InfoCard>

            <Paragraphs>
              <p>
                Soy Licenciado en Ciencias Biológicas con una fuerte vocación por la resolución de problemas complejos. 
                Durante los últimos años hice una transición al mundo del desarrollo web, donde encontré un espacio ideal para aplicar pensamiento lógico, claridad estructural y creatividad.
              </p>

              <p>
                Actualmente me especializo en desarrollo Backend y arquitectura de datos, con foco en la creación de aplicaciones robustas y escalables. 
                He liderado el desarrollo de módulos clave como gestión de inventario, métricas analíticas y control de usuarios, dentro de entornos empresariales.
              </p>

              <p>
                Valoro el código limpio, el diseño centrado en el usuario y la colaboración efectiva. 
                Me entusiasma seguir aprendiendo y contribuir con soluciones que realmente generen impacto.
              </p>
            </Paragraphs>
          </Content>
        </motion.div>
      </Container>
      <ScrollDown href="#technologies">
        <FaChevronDown />
      </ScrollDown>
    </Section>
  );
}