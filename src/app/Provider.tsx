// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import React from "react";
// import {ThemeProvider as NextThemesProvider} from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      {/* fordi vi bruger children så bliver andre componenter
        ikke lavet om til use client lige som denne. og 
        kan derfor stadigvæk bruge use server */}
      {children}
    </NextUIProvider>
  );
}
