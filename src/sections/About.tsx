'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  padding: 4rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  max-width: 60ch;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const TechList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  list-style: none;
  padding: 0;

  li {
    background: ${({ theme }) => theme.text}10;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-weight: 500;
  }
`;

export default function About() {
  return (
    <Section id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Heading>Sobre mí</Heading>

        <Paragraph>
          Soy Biólogo de formación con un enfoque analítico y estructurado.
          En los últimos años hice una transición al desarrollo web, especializándome en
          Backend, arquitectura de datos y soluciones fullstack que combinan lógica, claridad
          y eficiencia.
        </Paragraph>

        <Paragraph>
          Me apasiona construir software limpio y mantenible, y disfruto diseñar
          flujos de datos que escalen con facilidad. Tengo experiencia liderando módulos
          de inventario, métricas y manejo de usuarios en aplicaciones empresariales.
        </Paragraph>

        <Heading>Tecnologías</Heading>
        <TechList>
          <li>TypeScript</li>
          <li>Node.js</li>
          <li>NestJS</li>
          <li>PostgreSQL</li>
          <li>Prisma</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Styled Components</li>
        </TechList>
      </motion.div>
    </Section>
  );
}