'use client'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react'

const inter = Inter({ subsets: ["latin"] });


export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider>{children}</ChakraProvider>
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
