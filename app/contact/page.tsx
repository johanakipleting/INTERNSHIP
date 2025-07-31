"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "News", href: "/news" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
  { name: "Admission", href: "/admission" },
]

export default function ContactPage() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: "Bugema, Luwero District, Uganda",
      description: "Visit our beautiful campus",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+256 123 456 789",
      description: "Call us during office hours",
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@bugemaschool.ac.ug",
      description: "Send us a message anytime",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Fri: 8:00 AM - 5:00 PM",
      description: "Saturday: 8:00 AM - 12:00 PM",
    },
  ]

  const departments = [
    {
      name: "Admissions Office",
      email: "admissions@bugemaschool.ac.ug",
      phone: "+256 123 456 790",
    },
    {
      name: "Academic Office",
      email: "academics@bugemaschool.ac.ug",
      phone: "+256 123 456 791",
    },
    {
      name: "Finance Department",
      email: "finance@bugemaschool.ac.ug",
      phone: "+256 123 456 792",
    },
    {
      name: "Transport Services",
      email: "transport@bugemaschool.ac.ug",
      phone: "+256 123 456 793",
    },
  ]

  return (
    <>
      <Header />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <Badge className="mb-4 bg-orange-600 hover:bg-orange-700">Get In Touch</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                We're here to help! Reach out to us for admissions, inquiries, or any questions about Bugema Adventist
                Primary School.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Reach Us</h2>
              <p className="text-xl text-gray-600">Multiple ways to connect with our school community</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                      <info.icon className="h-6 w-6 text-teal-700" />
                    </div>
                    <CardTitle className="text-xl">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-gray-900 mb-2">{info.details}</p>
                    <CardDescription className="text-gray-600">{info.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                        <Input placeholder="Enter your first name" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                        <Input placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <Input type="email" placeholder="Enter your email address" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input type="tel" placeholder="Enter your phone number" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                      <Input placeholder="What is this regarding?" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                      <Textarea placeholder="Tell us more about your inquiry..." rows={5} />
                    </div>

                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* School Image & Info */}
              <div className="space-y-8">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/images/gate.jpg"
                    alt="Bugema Adventist Primary School Campus"
                    fill
                    className="object-cover"
                  />
                </div>

                <Card className="p-6">
                  <CardHeader>
                    <CardTitle className="text-xl">Visit Our Campus</CardTitle>
                    <CardDescription>We welcome visitors to tour our facilities and meet our staff.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Schedule a visit to experience our learning environment firsthand. Our admissions team will be happy
                      to show you around and answer any questions about our programs.
                    </p>
                    <Button variant="outline" className="w-full">
                      Schedule a Campus Tour
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Department Contacts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Department Contacts</h2>
              <p className="text-xl text-gray-600">Direct contact information for specific departments</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {departments.map((dept, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-teal-600" />
                        <span className="text-sm text-gray-600">{dept.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-teal-600" />
                        <span className="text-sm text-gray-600">{dept.phone}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-teal-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to common questions</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg">What are the admission requirements?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Admission requirements vary by grade level. Please contact our admissions office for specific
                    requirements and application procedures.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg">Do you provide transportation?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Yes, we offer safe and reliable school transport services. Contact our transport department for routes
                    and schedules.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg">What is the student-teacher ratio?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We maintain small class sizes to ensure personalized attention, with an average ratio of 20:1 students
                    to teachers.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg">Are meals provided at school?</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Yes, we provide nutritious meals for students. Our dining facilities serve breakfast, lunch, and
                    snacks.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
      <div className="bg-green-700">
    <Footer />
  </div>
     
    </>
  )
}