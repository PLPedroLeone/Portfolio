'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { useTheme } from '@/context/ThemeContext';
import { Moon, Sun } from 'lucide-react';

const NavBarContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
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
`;

const Logo = styled.span`
  font-family: var(--font-geist-mono);
  font-size: 1.3rem;
  font-weight: 700;

  span {
    color: #22c55e; /* verde para acento */
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;
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

  return (
    <NavBarContainer>
      <NavContent>
        <Logo>
          Pedro <span>Leone</span>
        </Logo>
        <Nav>
          <NavLink href="#about">Sobre mí</NavLink>
          <NavLink href="#projects">Proyectos</NavLink>
          <NavLink href="#contact">Contacto</NavLink>
          <DownloadCV href="/cv.pdf" download>
            Descargar CV
          </DownloadCV>
          <ThemeToggle onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </ThemeToggle>
        </Nav>
      </NavContent>
    </NavBarContainer>
  );
}