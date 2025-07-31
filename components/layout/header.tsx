"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "News", href: "/news" },
  { name: "Events", href: "/events" },
  { name: "facilities", href: "/facilities" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-blue-100 shadow">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and School Name */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/images/1.jpeg"
            alt="Bugema Adventist Primary Logo"
            width={40}
            height={40}
            className="rounded bg-white"
            priority
          />
          <span className="font-bold text-xl text-blue-900">Bugema Adventist Primary</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-blue-900 hover:text-blue-700 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="bg-blue-700 text-white hover:bg-blue-800">
            <Link href="/admin">Admin</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5 text-blue-900" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-blue-50">
            <div className="flex flex-col space-y-4 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-blue-900 hover:text-blue-700 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="bg-blue-700 text-white hover:bg-blue-800">
                <Link href="/admin" onClick={() => setIsOpen(false)}>
                  Admin
                </Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}