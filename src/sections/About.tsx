'use client';

import { motion } from 'framer-motion';
import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.section`
  min-height: calc(100vh - 4rem); /* asumiendo navbar de 4rem */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export default function About() {
  return (
    <Section id="about">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ¡Hola! 👋 Soy Pedro Leone
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl max-w-2xl mb-6 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        Biólogo de formación con background en ciencias, ahora desarrollador web
        especializado en Backend y arquitectura de datos.  
        Creo soluciones limpias y eficientes basadas en lógica sólida y
        bases de datos organizadas.
      </motion.p>

      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Link
          href="/cv.pdf"
          download
          className="px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Descargar CV
        </Link>
        <a
          href="#contact"
          className="px-5 py-3 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-600 hover:text-white transition"
        >
          Contáctame
        </a>
      </motion.div>
    </Section>
  );
}