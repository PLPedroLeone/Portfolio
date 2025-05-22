'use client';

import { Eye } from "lucide-react";
import React, { useState } from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
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

  @media (max-width: 768px) {
    padding: 4rem 1rem 2rem 1rem;
  }
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
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 0 1rem;
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
  padding: 0 1rem;
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
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  max-width: 450px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
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
      background-color: #24292e;
      color: #f6f8fa;
      border: 2px solid #1b1f23;

      &:hover {
        background-color: #2f363d;
        transform: translateY(-3px);
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;



const ScrollDown = styled.a`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;
  transform: translateX(-50%);
  animation: bounce 2s infinite;
  color: ${({ theme }) => theme.subtext};

  @media (max-width: 768px) {
    margin-top: 1rem;
  }

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
    name: "GeStocker",
    category: "Fullstack",
    description: "GeStocker es una aplicación web de gestión de inventario para pequeños y medianos negocios. GeStocker le permite al usuario crear negocios y locales, gestionar entradas y salidas de productos, entre otras cosas. El proyecto fue desarrollado en equipo con metodologías ágiles, priorizando la experiencia del usuario y la escalabilidad del producto. Rol: BackEnd Developer (6 integrantes: 4 backend, 2 frontend) | Abril 2025. Trabajé en el diseño de la arquitectura de la base de datos con TypeORM y PostgreSQL.",
    tech: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "TypeORM", "Cloudinary", "JWT Auth", "Auth0", "NextJS", "React"],
    github: "https://github.com/PLPedroLeone/Ecommerce-PM4Henry",
    demo: "https://ge-stocker.vercel.app/",
    images: ["/images/gestocker1.jpg", "/images/gestocker2.jpg", "/images/gestocker3.jpg", "/images/gestocker4.jpg", "/images/gestocker5.jpg", "/images/gestocker6.jpg", "/images/gestocker7.jpg",]
  },
  {
    id: "2",
    name: "Ecommerce API",
    category: "BackEnd",
    description: "Desarrollé el BackEnd de una aplicación web comercio electrónico implementando arquitectura RESTful con Nest.js y Typescript. La plataforma incluye un registro y autenticación, gestión de productos y categorías a través de un seeder, un carrito de compras y procesamiento de pedidos.",
    tech: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "TypeORM", "Cloudinary", "JWT Auth"],
    github: "https://github.com/PLPedroLeone/Ecommerce-PM4Henry",
    demo: "",
    images: ["/images/ecommerce-api.jpg", "/images/ecommerce-api-2.jpg"]
  },
  {
    id: "3",
    name: "App de Turnos",
    category: "Fullstack",
    description: "Diseño FullStack de aplicación web para reservar turnos. Implementé arquitectura RESTful con Express y TypeScript. FrontEnd realizado con React.",
    tech: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com/PLPedroLeone/LabAppointments",
    demo: "",
    images: ["/images/Turnos1.jpg", "/images/Turnos2.jpg", "/images/Turnos3.jpg"]
  },
];

const filters = ["Todos", "BackEnd", "Fullstack"];

export const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState(projectsData[0]);
  const [imageIndex, setImageIndex] = useState(0);

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
                     onClick={() => {
                      setSelectedProject(project);
                      setImageIndex(0);
                    }}
                >
                    {project.name}
                </ProjectCard>
                ))}
            </ProjectList>

            {selectedProject && (
                <ProjectDetail>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  <ProjectImage
    src={selectedProject.images[imageIndex]}
    alt={selectedProject.name}
  />

  {selectedProject.images.length > 1 && (
    <div
      style={{
        display: 'flex',
        gap: '0.5rem',
        marginTop: '0.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '-1rem',
      }}
    >
      <FaChevronLeft
        style={{ cursor: 'pointer' }}
        onClick={() =>
          setImageIndex((prev) =>
            prev === 0
              ? selectedProject.images.length - 1
              : prev - 1
          )
        }
      />
      <span>
        {imageIndex + 1}/{selectedProject.images.length}
      </span>
      <FaChevronRight
        style={{ cursor: 'pointer' }}
        onClick={() =>
          setImageIndex((prev) =>
            prev === selectedProject.images.length - 1
              ? 0
              : prev + 1
          )
        }
      />
    </div>
  )}
</div>

                    <ProjectContent>
                        <ProjectTitle>{selectedProject.name}</ProjectTitle>
                        <ProjectDescription>{selectedProject.description}</ProjectDescription>

                        <ProjectTechList>
                            {selectedProject.tech.map((tech) => (
                                <TechItem key={tech}>{tech}</TechItem>
                            ))}
                        </ProjectTechList>

                        <ProjectLinks>
                            {selectedProject.demo && (
                                <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="demo">
                                    <Eye /> Demo
                                </a>
                            )}
                            {selectedProject.github && (
                                <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="code">
                                    &lt;/&gt; Código
                                </a>
                            )}
                        </ProjectLinks>

                    </ProjectContent>
                </ProjectDetail>
            )}

            <ScrollDown href="#contact">
                <FaChevronDown />
            </ScrollDown>
        </Container>
    </Section>
  );
};