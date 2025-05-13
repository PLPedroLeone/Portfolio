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
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background}CC; // con opacidad
  color: ${({ theme }) => theme.text};
  border-bottom: 1px solid ${({ theme }) => theme.text}20;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
`;

const Logo = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 0.95rem;

  &:hover {
    opacity: 0.8;
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
      <Logo>Pedro Leone</Logo>

      <Nav>
        <NavLink href="#about">Sobre mí</NavLink>
        <NavLink href="#projects">Proyectos</NavLink>
        <NavLink href="#contact">Contacto</NavLink>
        <ThemeToggle onClick={toggleTheme}>
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
        </ThemeToggle>
      </Nav>
    </NavBarContainer>
  );
}