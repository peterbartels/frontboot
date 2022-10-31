import { Inter } from '@next/font/google'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter()

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Frontboot Playground</title>
      </head>
      <body>{children}</body>
    </html>
  )
}