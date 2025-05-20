'use client'

import { FaChevronUp } from "react-icons/fa";
import styled from "styled-components";

const Section = styled.section`
  background: linear-gradient(135deg, ${({ theme }) => theme.highlight} 0%, ${({ theme }) => theme.background} 100%);
  position: relative;
  color: ${({ theme }) => theme.text};
  padding: 4rem 2rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    max-width: 500px;
    margin: 0 auto 2rem;
    font-size: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 500px;
    margin: 0 auto 1rem auto;

    input,
    textarea {
      background-color: ${({ theme }) => theme.accent}50;
      color: ${({ theme }) => theme.text};
      border: none;
      border-radius: 6px;
      padding: 0.8rem;
      font-size: 1rem;
      outline: none;

      &::placeholder {
            color: ${({ theme }) => theme.text};
            opacity: 0.7; // opcional, para un estilo más sutil
            transition: color 0.3s ease;
        }
    }

    button {
      padding: 0.6rem 1.2rem;
      background-color: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.text};
      font-weight: 500;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: transform 0.2s, opacity 0.2s;

      &:hover {
        transform: scale(1.03);
        opacity: 0.9;
      }
    }
  }
`;

const ScrollUp = styled.a`
  position: absolute;
  bottom: 1.5rem;
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

const Contact = () => {
  return (
    <Section id="contact">
      <h2>Contacto</h2>
      <p>¿Te interesa trabajar conmigo o tenés alguna consulta?</p>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Mensaje" rows={5} required />
        <button type="submit">Enviar Mensaje</button>
      </form>
      
        <ScrollUp href="#hero">
            <FaChevronUp />
        </ScrollUp>
    </Section>
  );
};

export default Contact;