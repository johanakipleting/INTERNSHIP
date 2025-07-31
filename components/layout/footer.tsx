import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-pink-600 text-white border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Motto */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/1.jpeg"
                alt="Bugema Adventist Primary Logo"
                width={32}
                height={32}
                className="rounded bg-white"
                priority
              />
              <span className="font-bold text-lg">Bugema Adventist Primary</span>
            </div>
            <p className="text-sm text-pink-100">
              The fear of God is the beginning of wisdom
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-sm text-pink-100 hover:text-white">
                About Us
              </Link>
              <Link href="/academics" className="block text-sm text-pink-100 hover:text-white">
                Academics
              </Link>
              <Link href="/admissions" className="block text-sm text-pink-100 hover:text-white">
                Admissions
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <div className="space-y-2">
              <Link href="/news" className="block text-sm text-pink-100 hover:text-white">
                News
              </Link>
              <Link href="/events" className="block text-sm text-pink-100 hover:text-white">
                Events
              </Link>
              <Link href="/gallery" className="block text-sm text-pink-100 hover:text-white">
                Gallery
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-pink-100">
                <MapPin className="h-4 w-4" />
                <span>Bugema, Luweero District, Uganda</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-pink-100">
                <Phone className="h-4 w-4" />
                <span>+256 786 934 813 / +256 775 034 301</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-pink-100">
                <Mail className="h-4 w-4" />
                <span>bugemaadvprimary@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-200 mt-8 pt-8 text-center text-sm text-pink-100">
          <p>&copy; {new Date().getFullYear()} Bugema Adventist Primary School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}