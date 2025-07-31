import Link from "next/link"
import Image from "next/image"

export default function EventDetail() {
  // In a real app, fetch event data by ID here
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/events" className="text-blue-700 hover:underline mb-6 inline-block">
          &larr; Back to Events
        </Link>
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold mb-4">Science Exhibition</h1>
          <p className="text-gray-500 text-sm mb-4">Date: July 15, 2025</p>
          <Image
            src="/images/events/science.jpg"
            alt="Science Exhibition"
            width={700}
            height={350}
            className="rounded-lg mb-6"
          />
          <p>
            Join us for our annual Science Exhibition where students will present their innovative projects and experiments.
            This event encourages creativity, critical thinking, and a passion for science among our learners.
          </p>
        </div>
      </div>
    </div>
  )
}