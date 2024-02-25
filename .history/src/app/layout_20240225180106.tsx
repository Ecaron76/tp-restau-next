'use client'

import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider, extendTheme  } from '@chakra-ui/react'
const theme = extendTheme({
  colors: {
    brand: {
      50: '#ffeee6',
      100: '#ffc7b7',
      200: '#ffa788',
      300: '#ff8259',
      400: '#ff5b29',
      500: '#ff3300',
      600: '#cc2900',
      700: '#991f00',
      800: '#661600',
      900: '#330c00',
    },
  },
});



export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
