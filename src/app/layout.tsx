import { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers/ChakraProvider";



export const metadata: Metadata = {
  title: 'Dolce Cucina',
  description: 'Restaurant italien',
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
