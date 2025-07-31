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
          <h1 className="text-3xl font-bold mb-4">Annual Sports Day Success</h1>
          <p className="text-gray-500 text-sm mb-4">Published: June 29, 2025</p>
          <Image
            src="/images/news/playground.jpg"
            alt="Annual Sports Day"
            width={700}
            height={350}
            className="rounded-lg mb-6"
          />
          <p className="text-lg mb-4">
            Students showcased their athletic talents in our annual sports day celebration. The event featured a variety of track and field competitions, team games, and fun activities for all age groups.
          </p>
          <p className="mb-4">
            Parents, teachers, and staff cheered on the participants, creating a vibrant and supportive atmosphere. The highlight of the day was the relay race, which saw an exciting finish and great teamwork from all houses.
          </p>
          <p>
            Congratulations to all the winners and participants for their enthusiasm and sportsmanship. We thank everyone who contributed to making this event a memorable success!
          </p>
        </div>
      </div>
    </div>
  )
}