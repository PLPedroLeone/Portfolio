/* eslint-disable @next/next/no-img-element */
'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 2rem 4rem 2rem;
  position: relative;
  background: linear-gradient(135deg, ${({ theme }) => theme.background} 0%, ${({ theme }) => theme.highlight} 100%);
  color: ${({ theme }) => theme.text};
  scroll-snap-align: start;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 2rem auto;
  color: ${({ theme }) => theme.subtext};
`;

const SubTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1.2rem;
  text-align: center;
`;

const StackGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const CategoryCard = styled.div`
  background: linear-gradient(145deg, ${({ theme }) => theme.accent}10 0%, ${({ theme }) => theme.accent}66 100%);
  box-shadow: 0 0 0 4px ${({ theme }) => theme.primary}44;
  border-radius: 24px;
  padding: 1rem 2rem;
  flex: 1 1 280px;
  max-width: 320px;
  text-align: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 16px 24px rgba(0, 0, 0, 0.15);
  }

  h4 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.text};
    margin: 1.5rem 0 1rem;
    font-weight: 600;
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  .icon-wrapper {
    position:relative;
    width: 64px;
    height: 64px;
    background: ${({ theme }) => theme.highlight}90;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.accent}40;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s ease, transform 0.2s ease;

    &::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -36px;
    left: 50%;
    transform: translateX(-50%);
    background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.background};
    padding: 0.4rem 0.6rem;
    font-size: 0.75rem;
    border-radius: 4px;
    white-space: nowrap;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease;
    z-index: 10;
  }

  &:hover::after {
    opacity: 1;
  }

    &:hover {
      transform: translateY(-4px) scale(1.05);
      background: ${({ theme }) => theme.highlight};
      box-shadow: 0 4px 10px ${({ theme }) => theme.accent}40;
    }

    img {
      width: 32px;
      height: 32px;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: rotate(5deg) scale(1.1);
    }
  }
    
`;

const ScrollDown = styled.a`
  position: absolute;
  bottom: 2rem;
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

export default function TechStack() {
  return (
    <Section id="technologies">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Title>Habilidades Técnicas</Title>
          <Description>
            Estas son las principales tecnologías con las que trabajo para desarrollar soluciones sólidas, eficientes y escalables.
          </Description>

          <StackGroup>
            <CategoryCard>
              <h4>Lenguajes</h4>
              <div className="icons">
                <div className="icon-wrapper" data-tooltip="JavaScript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
                </div>
                <div className="icon-wrapper" data-tooltip="TypeScript">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" />
                </div>
              </div>
            </CategoryCard>
          </StackGroup>

          <SubTitle>Herramientas y Frameworks</SubTitle>
          <StackGroup>
            <CategoryCard>
              <h4>Backend</h4>
              <div className="icons">
                <div className="icon-wrapper" data-tooltip="Node.js">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" title="Node.js" />
                </div>
                <div className="icon-wrapper" data-tooltip="Express">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" title="Express" />
                </div>
                <div className="icon-wrapper" data-tooltip="NestJS">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" alt="NestJS" title="NestJS" />
                </div>
                <div className="icon-wrapper" data-tooltip="Docker">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" alt="Docker" title="Docker" />
                </div>
                <div className="icon-wrapper" data-tooltip="Git">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" title="Git" />
                </div>
              </div>
            </CategoryCard>

            <CategoryCard>
              <h4>Frontend</h4>
              <div className="icons">
                <div className="icon-wrapper" data-tooltip="React">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" title="React" />
                </div>
                <div className="icon-wrapper" data-tooltip="Next.js">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" title="Next.js" />
                </div>
                <div className="icon-wrapper" data-tooltip="Tailwind CSS">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" title="Tailwind CSS" />
                </div>
                <div className="icon-wrapper" data-tooltip="HTML5">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" title="HTML5" />
                </div>
                <div className="icon-wrapper" data-tooltip="CSS3">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" title="CSS3" />
                </div>
              </div>
            </CategoryCard>

            <CategoryCard>
              <h4>DB & Tools</h4>
              <div className="icons">
                <div className="icon-wrapper" data-tooltip="MongoDB">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" title="MongoDB" />
                </div>
                <div className="icon-wrapper" data-tooltip="PostgreSQL">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" title="PostgreSQL" />
                </div>
                <div className="icon-wrapper" data-tooltip="MySQL">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" title="MySQL" />
                </div>
                <div className="icon-wrapper" data-tooltip="Insomnia">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" alt="Insomnia" title="Insomnia" />
                </div>
                <div className="icon-wrapper" data-tooltip="Postman">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" title="Postman" />
                </div>
              </div>
            </CategoryCard>
          </StackGroup>
        </motion.div>
      </Container>

      <ScrollDown href="#projects">
        <FaChevronDown />
      </ScrollDown>
    </Section>
  );
}