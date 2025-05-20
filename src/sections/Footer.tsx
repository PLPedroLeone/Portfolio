'use client'

import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 2rem;
  font-size: 0.875rem;
  opacity: 0.6;
`;

export default function Footer() {
  return <FooterContainer>© {new Date().getFullYear()} Pedro Leone</FooterContainer>;
}