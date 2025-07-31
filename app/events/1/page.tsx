import Link from "next/link"
import Image from "next/image"

export default function EventDetail() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/events" className="text-blue-700 hover:underline mb-6 inline-block">
          &larr; Back to Events
        </Link>
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold mb-4">Academic Progress Section</h1>
          <p className="text-gray-500 text-sm mb-4">Date: August 5, 2025</p>
          <Image
            src="/images/events/17.jpg"
            alt="Academic Progress"
            width={700}
            height={350}
            className="rounded-lg mb-6"
          />
          <p className="text-lg mb-4">
            Our Academic Progress Section event highlights the achievements and improvements of our students throughout the term. Teachers and students share progress reports, celebrate milestones, and set new academic goals.
          </p>
          <p>
            Parents are invited to engage with teachers, discuss their children's performance, and learn about strategies for continued academic growth. Join us as we recognize hard work and encourage a culture of excellence!
          </p>
        </div>
      </div>
    </div>
  )
}