"use client";

import { useTheme } from "@/context/ThemeContext";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid #ccc;
`;

const Title = styled.h1`
  font-size: 1.5rem;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: inherit;
`;

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <HeaderContainer>
      <Title>Pedro Leone</Title>
      <ThemeToggle onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </ThemeToggle>
    </HeaderContainer>
  );
}