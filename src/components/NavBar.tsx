'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

const NavBarContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 11000;
  width: 100%;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.text}20;
  backdrop-filter: blur(8px);
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const Logo = styled.span`
  font-family: var(--font-geist-mono);
  font-size: 1.3rem;
  font-weight: 700;

  span {
    color: #22c55e;
  }
`;

const Nav = styled.nav<{ open: boolean }>`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 4.5rem;
    left: 0;
    right: 0;
    background-color: ${({ theme }) => theme.background};
    flex-direction: column;
    padding: 1rem 0;
    gap: 1rem;
    display: ${({ open }) => (open ? 'flex' : 'none')};
    border-bottom: 1px solid ${({ theme }) => theme.text}20;
    z-index: 10000;
  }
`;

const RightSection = styled.div<{ open: boolean }>`
  display: flex;
  align-items: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
    ${({ open }) => open && `flex-direction: column; align-items: flex-end;`}
  }
`;

const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`;


const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;

  &:hover {
    color: #22c55e;
  }
`;

const DownloadCV = styled(Link)`
  padding: 0.5rem 1rem;
  background-color: #22c55e;
  color: white;
  border-radius: 0.375rem;
  font-weight: 500;
  font-size: 0.9rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: #16a34a;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

export default function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false); 

  return (
    <NavBarContainer>
      <NavContent>
        <NavLink href="#hero">
          <Logo>
            Pedro <span>Leone</span>
          </Logo>
        </NavLink>

        <RightSection open={menuOpen}>
          <Nav open={menuOpen}>
            <NavLink href="#about">Sobre mí</NavLink>
            <NavLink href="#technologies">Tecnologías</NavLink>
            <NavLink href="#projects">Proyectos</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
            <DownloadCV href="/cv-pedro-leone.pdf" download="cv-pedro-leone.pdf">
              Descargar CV
            </DownloadCV>
          </Nav>

          <ThemeToggle onClick={toggleTheme} aria-label="Cambiar tema">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </ThemeToggle>

          <HamburgerButton onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </HamburgerButton>
        </RightSection>
      </NavContent>
    </NavBarContainer>
  );
}