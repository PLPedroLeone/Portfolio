'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaNodeJs, FaReact } from 'react-icons/fa';
import { SiTypescript, SiNestjs, SiPostgresql, SiPrisma, SiNextdotjs, SiStyledcomponents } from 'react-icons/si';

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.text};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1.5rem;
`;

const Card = styled(motion.div)`
  background-color: ${({ theme }) => theme.text}10;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  svg {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  &:hover {
    transform: translateY(-5px);
    background-color: ${({ theme }) => theme.text}20;
  }
`;

const Label = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

export default function TechStack() {
  const tech = [
    { label: 'TypeScript', icon: <SiTypescript /> },
    { label: 'Node.js', icon: <FaNodeJs /> },
    { label: 'NestJS', icon: <SiNestjs /> },
    { label: 'PostgreSQL', icon: <SiPostgresql /> },
    { label: 'Prisma', icon: <SiPrisma /> },
    { label: 'React', icon: <FaReact /> },
    { label: 'Next.js', icon: <SiNextdotjs /> },
    { label: 'Styled Components', icon: <SiStyledcomponents /> },
  ];

  return (
    <Section id="techstack">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Heading>Tech Stack</Heading>
          <Grid>
            {tech.map(({ label, icon }) => (
              <Card key={label} whileHover={{ scale: 1.05 }}>
                {icon}
                <Label>{label}</Label>
              </Card>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Section>
  );
}