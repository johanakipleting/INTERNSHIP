import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Clock, Award, Computer, Globe, Music } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

export default function AcademicsPage() {
  const subjects = [
    {
      icon: BookOpen,
      title: "English Language",
      description: "Comprehensive language skills development including reading, writing, speaking, and listening.",
    },
    {
      icon: Globe,
      title: "Mathematics",
      description: "Building strong numerical foundations and problem-solving skills.",
    },
    {
      icon: Computer,
      title: "Science",
      description: "Exploring the natural world through hands-on experiments and discovery.",
    },
    {
      icon: Users,
      title: "Social Studies",
      description: "Understanding society, culture, and our place in the world.",
    },
    {
      icon: Computer,
      title: "ICT",
      description: "Digital literacy and computer skills for the modern world.",
    },
    {
      icon: Music,
      title: "Music & Arts",
      description: "Creative expression through music, dance, and visual arts.",
    },
  ]

  const programs = [
    {
      title: "Early Years Foundation",
      description: "Nursery and Baby Class programs focusing on foundational skills and social development.",
      ageRange: "3-5 years",
      color: "bg-blue-100 text-blue-800",
    },
    {
      title: "Primary Education",
      description: "Comprehensive primary education from Primary 1 to Primary 7.",
      ageRange: "6-13 years",
      color: "bg-green-100 text-green-800",
    },
    {
      title: "Special Programs",
      description: "Remedial classes, gifted and talented programs, and special needs support.",
      ageRange: "All ages",
      color: "bg-orange-100 text-orange-800",
    },
  ]

  const features = [
    {
      icon: Clock,
      title: "Structured Schedule",
      description: "Well-organized daily routines that balance academics, play, and rest.",
    },
    {
      icon: Users,
      title: "Small Class Sizes",
      description: "Personalized attention with optimal teacher-to-student ratios.",
    },
    {
      icon: Award,
      title: "Assessment & Progress",
      description: "Regular evaluation and progress tracking for each student.",
    },
    {
      icon: BookOpen,
      title: "Curriculum Excellence",
      description: "Following the Uganda National Curriculum with Christian integration.",
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">Academic Excellence</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Academic Programs</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Comprehensive education that prepares students for success in academics and life, grounded in Christian
                values and modern teaching methods.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Educational Programs</h2>
              <p className="text-xl text-gray-600">Tailored programs for different age groups and learning needs</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <Badge className={program.color}>{program.ageRange}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{program.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ICT Integration */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Modern ICT Integration</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our state-of-the-art computer laboratory provides students with essential digital literacy skills. We
                  integrate technology into learning to prepare students for the digital age while maintaining our focus
                  on fundamental academic skills.
                </p>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Computer literacy from early years</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Internet safety and digital citizenship</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Educational software and applications</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Technology-enhanced learning experiences</span>
                  </li>
                </ul>
              </div>
              <div>
                <Image
                  src="/images/ict.jpg"
                  alt="ICT Computer Laboratory"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Core Subjects */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Subjects</h2>
              <p className="text-xl text-gray-600">Comprehensive curriculum covering all essential areas of learning</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subjects.map((subject, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <subject.icon className="h-6 w-6 text-blue-700" />
                    </div>
                    <CardTitle className="text-xl">{subject.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{subject.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Environment */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/images/lib.jpg"
                  alt="School Library"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Enriching Learning Environment</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our well-equipped library and learning spaces provide students with access to a wealth of resources. We
                  believe that a conducive learning environment is essential for academic success and personal growth.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <feature.icon className="h-4 w-4 text-blue-700" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm">{feature.title}</h4>
                        <p className="text-xs text-gray-600 mt-1">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}