import type React from "react"
import type { Metadata } from "next"
import { Courier_Prime } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/navbar"

const courier = Courier_Prime({ weight: ["400", "700"], subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Engineer, Researcher, Problem Solver",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${courier.className} antialiased`}>
        <Navbar />
        <main className="bg-background text-foreground pt-16">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  )
}
