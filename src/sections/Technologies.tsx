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
  margin-bottom: 2rem;
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
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const StackGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const CategoryCard = styled.div`
  background-color: ${({ theme }) => theme.accent}30;
  border-radius: 20px;
  padding: 2rem;
  flex: 1 1 300px;
  max-width: 360px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  h4 {
    margin-bottom: 1rem;
    font-size: 1.3rem;
    color: ${({ theme }) => theme.text};
  }

  .icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
  }

  img {
    width: 42px;
    height: 42px;
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
      transform: scale(1.2);
      filter: brightness(1.2);
      }
  }
`;

const ScrollDown = styled.a`
  position: absolute;
  bottom: 2.5rem;
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
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" />
              </div>
            </CategoryCard>
          </StackGroup>

          <SubTitle>Herramientas y Frameworks</SubTitle>
          <StackGroup>
            <CategoryCard>
              <h4>Backend</h4>
              <div className="icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" alt="Node.js" title="Node.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" alt="Express" title="Express" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" alt="NestJS" title="NestJS" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg" alt="Docker" title="Docker" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" title="Git" />
              </div>
            </CategoryCard>

            <CategoryCard>
              <h4>Frontend</h4>
              <div className="icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" title="React" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" title="Next.js" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" title="Tailwind CSS" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML" title="HTML5" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS" title="CSS3" />
              </div>
            </CategoryCard>

            <CategoryCard>
              <h4>DB & Tools</h4>
              <div className="icons">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" title="MongoDB" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" title="PostgreSQL" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" alt="MySQL" title="MySQL" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/insomnia/insomnia-original.svg" alt="Insomnia" title="Insomnia" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman" title="Postman" />
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