"use client"
import { useState } from "react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function AdmissionPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would send the form data to your backend or email service
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 py-12 px-4">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto text-center mb-12">
          <Badge className="mb-4 bg-green-600 hover:bg-green-700">Admissions</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Bugema Adventist Primary School</h1>
          <p className="text-lg text-gray-600">
            We welcome new students to our vibrant, faith-based learning community. Discover our admissions process and become part of our family!
          </p>
        </section>

        {/* Admissions Info */}
        <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Admission Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Completed application form</li>
                <li>Copy of birth certificate</li>
                <li>Previous school report (if applicable)</li>
                <li>Two passport-size photographs</li>
                <li>Medical report</li>
                <li>Interview with the admissions team</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Why Choose Us?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc ml-5 text-gray-700 space-y-2">
                <li>Christian-based holistic education</li>
                <li>Experienced and caring teachers</li>
                <li>Modern facilities and ICT integration</li>
                <li>Strong academic and co-curricular programs</li>
                <li>Safe and nurturing environment</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Contact/Inquiry Form */}
        <section className="max-w-2xl mx-auto mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Admissions Inquiry</CardTitle>
              <CardDescription>
                Fill out the form below and our admissions team will get back to you soon.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="text-green-700 font-semibold text-center py-8">
                  Thank you for your inquiry! We will contact you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    required
                  />
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Send Inquiry
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </section>
      </div>
      <Footer />
    </>
  )
}