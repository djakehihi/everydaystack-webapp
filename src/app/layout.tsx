import type { Metadata } from "next";
import { MantineProvider } from "@/components/MantineProvider";
import { Flex } from "@mantine/core";
import "./globals.css";
import { Manrope } from 'next/font/google'
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Everyday Stack",
  description: "Share your daily stack!",
};

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" />
      </head>
      <body className={`${manrope.variable}`}>
        <MantineProvider>
          <Flex gap={52} align="center" justify="center" direction="column">
            <Header />
            {children}
          </Flex>
        </MantineProvider>
      </body>
    </html>
  );
}
