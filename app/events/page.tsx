'use client'
import { Header } from '@/components/layout/header'
// Update the path below to the correct relative path if needed, e.g.:
// Update the path below to the correct relative path if needed, e.g.:
import { Footer } from '@/components/layout/footer'

const defaultImages = [
  "/images/gallery/e1.jpg",
  "/images/gallery/e2.jpg",
  "/images/gallery/e3.jpg",
  "/images/gallery/e4.jpg",
  "/images/gallery/e5.jpg",
  "/images/gallery/e6.jpg",
  "/images/gallery/e7.jpg",
  "/images/gallery/e8.jpg",
  "/images/gallery/e9.jpg",
  "/images/gallery/e10.jpg",
 
  // Add more image paths as needed
]

export default function GalleryPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen py-12 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Gallery</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {defaultImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Gallery image ${idx + 1}`}
              className="w-full h-48 object-cover rounded shadow"
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}