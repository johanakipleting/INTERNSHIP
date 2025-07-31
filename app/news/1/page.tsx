import Image from "next/image"
import Link from "next/link"

export default function NewsDetail() {
  // In a real app, fetch news data by ID here
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/news" className="text-blue-700 hover:underline mb-6 inline-block">
          &larr; Back to News
        </Link>
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold mb-4">Bugema Adventist Primary Wins National Science Fair</h1>
          <p className="text-gray-500 text-sm mb-4">Published: June 30, 2025</p>
          <Image
            src="/images/news/fair.jpg"
            alt="Science Fair"
            width={700}
            height={350}
            className="rounded-lg mb-6"
          />
          <p className="text-lg mb-4">
            Bugema Adventist Primary School has emerged as the winner of the 2025 National Science Fair, held in Kampala.
            The school’s innovative project on renewable energy impressed the judges and earned top honors among dozens of
            competing schools.
          </p>
          <p className="mb-4">
            The head teacher, Mrs. Jane Doe, praised the students and staff for their dedication and creativity. “This
            achievement reflects our commitment to excellence in science and technology education,” she said.
          </p>
          <p>
            The school will represent the region at the upcoming East African Science Expo. Congratulations to all
            participants!
          </p>
        </div>
      </div>
    </div>
  )
}