'use client'
import { Header } from '@/components/layout/header'
// Update the path below to the correct relative path if needed, e.g.:
// Update the path below to the correct relative path if needed, e.g.:
import { Footer } from '@/components/layout/footer'

const defaultImages = [
  "/images/gallery/1.jpg",
  "/images/gallery/2.jpg",
  "/images/gallery/3.jpg",
  "/images/gallery/4.jpg",
  "/images/gallery/5.jpg",
  "/images/gallery/6.jpg",
  "/images/gallery/7.jpg",
  "/images/gallery/8.jpg",
  "/images/gallery/9.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/11.jpg",
  "/images/gallery/12.jpg",
  "/images/gallery/13.jpg",
  "/images/gallery/14.jpg",
  "/images/gallery/15.jpg",
  "/images/gallery/16.jpg",
  "/images/gallery/17.jpg",
  "/images/gallery/18.jpg",
  "/images/gallery/19.jpg",
  "/images/gallery/20.jpg",
  "/images/gallery/21.jpg",
  "/images/gallery/22.jpg",
  "/images/gallery/23.jpg",
  "/images/gallery/24.jpg",
  "/images/gallery/25.jpg",
  "/images/gallery/26.jpg",
  "/images/gallery/27.jpg",
  "/images/gallery/28.jpg",
  "/images/gallery/29.jpg",
  "/images/gallery/30.jpg",
  "/images/gallery/31.jpg",
  "/images/gallery/32.jpg",
  "/images/gallery/33.jpg",
  "/images/gallery/34.jpg",
  "/images/gallery/35.jpg",
  "/images/gallery/36.jpg",
  "/images/gallery/37.jpg",
  "/images/gallery/38.jpg",
  "/images/gallery/39.jpg",
  "/images/gallery/40.jpg",
  "/images/gallery/41.jpg",
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