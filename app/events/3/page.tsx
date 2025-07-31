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
          <h1 className="text-3xl font-bold mb-4">Cultural Showcase</h1>
          <p className="text-gray-500 text-sm mb-4">Date: September 12, 2025</p>
          <Image
            src="/images/events/culture.jpg"
            alt="Cultural Showcase"
            width={700}
            height={350}
            className="rounded-lg mb-6"
          />
          <p className="text-lg mb-4">
            Our Cultural Showcase celebrates the rich diversity of our school community. Students present traditional dances, songs, and attire from various cultures, fostering appreciation and unity.
          </p>
          <p>
            Families and guests are invited to enjoy performances, sample cultural foods, and learn about the heritage of our students. This event encourages respect, understanding, and pride in our multicultural environment.
          </p>
        </div>
      </div>
    </div>
  )
}