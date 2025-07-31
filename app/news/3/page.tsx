import Image from "next/image"
import Link from "next/link"

export default function NewsDetail() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link href="/news" className="text-blue-700 hover:underline mb-6 inline-block">
          &larr; Back to News
        </Link>
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold mb-4">Academic Excellence Awards</h1>
          <p className="text-gray-500 text-sm mb-4">Published: June 28, 2025</p>
          <Image
            src="/images/news/ac.jpg"
            alt="Academic Excellence Awards"
            width={700}
            height={350}
            className="rounded-lg mb-6"
          />
          <p className="text-lg mb-4">
            Celebrating our top-performing students in the recent academic assessments. The awards ceremony recognized outstanding achievement and dedication to learning across all grade levels.
          </p>
          <p className="mb-4">
            Parents, teachers, and fellow students applauded the recipients for their hard work and commitment to excellence. Special certificates and prizes were presented to those who excelled in various subjects.
          </p>
          <p>
            We are proud of all our students and encourage everyone to continue striving for academic success. Congratulations to our award winners!
          </p>
        </div>
      </div>
    </div>
  )
}