"use client";

import React, { useRef } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const sheetRef = useRef<ServerStyleSheet | null>(null);

  if (!sheetRef.current) {
    sheetRef.current = new ServerStyleSheet();
  }

  return (
    <StyleSheetManager sheet={sheetRef.current.instance}>
      {children}
    </StyleSheetManager>
  );
}