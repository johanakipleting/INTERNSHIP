import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bugema Adventist Primary School",
  description:
    "Excellence in Christian Education - Nurturing minds, building character, and preparing leaders for tomorrow.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  )
}

function ConditionalLayout({ children }: { children: React.ReactNode }) {
  // This would normally use usePathname, but for SSR we'll handle it differently
  // In a real app, you'd check the pathname to conditionally render Header/Footer
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
