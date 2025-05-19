'use client';

import { Eye } from "lucide-react";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styled from "styled-components";

interface FilterButtonProps {
  $active: boolean;
}

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

const FilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  text-align: center;
`;

const FilterButton = styled.button<FilterButtonProps>`
  padding: 0.5rem 1rem;
  background: ${({ $active, theme }) => ($active ? theme.primary : "transparent")};
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 8px;
  color: ${({ theme }) => theme.text};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${({ theme }) => theme.primary}55;
  }
`;

const ProjectList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const ProjectCard = styled.button<FilterButtonProps>`
  background: ${({ $active, theme }) => ($active ? `${theme.accent}80` : theme.highlight)};
  color: ${({ theme }) => theme.text};
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  box-shadow: ${({ $active }) => ($active ? "0 2px 6px rgba(0,0,0,0.1)" : "none")};
  transition: transform 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    background: ${({ theme }) => theme.accent}aa;
  }
`;

const ProjectDetail = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  padding: 2rem;
  background: ${({ theme }) => theme.accent}50;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  align-items: center;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProjectImage = styled.img`
  width: 450px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.text};
  line-height: 1.5;
`;

const ProjectTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  list-style: none;
  padding: 0;
`;

const TechItem = styled.li`
  background: ${({ theme }) => theme.primary}aa;
  color: ${({ theme }) => theme.text};
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-size: 0.9rem;
`;

const ProjectLinks = styled.div`
  margin-top: auto;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  a {
    padding: 0.2rem 0.8rem;
    border-radius: 6px;
    font-size: 0.9rem;
    text-decoration: none;
    font-weight: 500;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;

    &.demo {
      background-color: #22c55e;
      color: ${({ theme }) => theme.text};
      border: 2px solid transparent;

      &:hover {
        opacity: 0.9;
        transform: translateY(-3px);
      }

      svg {
        width: 1rem;
        height: 1rem;
      }
    }

    &.code {
      background-color: #24292e; // GitHub dark
      color: #f6f8fa; // GitHub light text
      border: 2px solid #1b1f23;

      &:hover {
        background-color: #2f363d;
        transform: translateY(-3px);
      }
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

const projectsData = [
  {
    id: "1",
    name: "Ecommerce API",
    category: "BackEnd",
    description: "Desarrollé el BackEnd de una aplicación web comercio electrónico implementando arquitectura RESTful con Nest.js y Typescript. La plataforma incluye un registro y autenticación, gestión de productos y categorías a través de un seeder, un carrito de compras y procesamiento de pedidos.",
    tech: ["Node.js", "NestJS", "PostgreSQL", "TypeORM", "Cloudinary", "JWT Auth"],
    github: "https://github.com/usuario/ecommerce-api",
    demo: "",
    image: "/images/ecommerce-api.jpg"
  },
  {
    id: "2",
    name: "App de Turnos",
    category: "Fullstack",
    description: "Aplicación para reservar y gestionar turnos online.",
    tech: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com/usuario/turnos-app",
    demo: "https://turnos-app.vercel.app",
    image: "/images/turnos-app.png"
  },
];

const filters = ["Todos", "BackEnd", "Fullstack"];

export const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);

  const filteredProjects =
    selectedFilter === "Todos"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedFilter);

  return (
    <Section id="projects">
        <Container>
            <Title>Mis Proyectos</Title>
            <Description>Estos son los proyectos en los que he trabajado.</Description>

            <FilterWrapper>
                {filters.map((f) => (
                <FilterButton
                    key={f}
                    $active={selectedFilter === f}
                    onClick={() => setSelectedFilter(f)}
                >
                    {f}
                </FilterButton>
                ))}
            </FilterWrapper>

            <ProjectList>
                {filteredProjects.map((project) => (
                <ProjectCard
                    key={project.id}
                    $active={selectedProject?.id === project.id}
                    onClick={() => setSelectedProject(project)}
                >
                    {project.name}
                </ProjectCard>
                ))}
            </ProjectList>

            {selectedProject && (
                <ProjectDetail>
                    <ProjectImage src={selectedProject.image} alt={selectedProject.name} />
                    <ProjectContent>
                        <ProjectTitle>{selectedProject.name}</ProjectTitle>
                        <ProjectDescription>{selectedProject.description}</ProjectDescription>
                        <ProjectTechList>
                            {selectedProject.tech.map((t) => (
                                <TechItem key={t}>{t}</TechItem>
                            ))}
                        </ProjectTechList>
                        <ProjectLinks>
                            {selectedProject.github && (
                                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="code">
                                    &lt;/&gt; Ver Código
                                </a>
                            )}
                            {selectedProject.demo && (
                                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="demo">
                                    <Eye strokeWidth={2} size={16} />
                                    Demo en Vivo
                                </a>
                            )}
                        </ProjectLinks>
                    </ProjectContent>
                </ProjectDetail>
            )}
        </Container>

        <ScrollDown href="#contact">
            <FaChevronDown />
        </ScrollDown>
    </Section>
  );
};