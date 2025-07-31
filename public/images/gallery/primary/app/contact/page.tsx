"use client"

import { Calendar } from "@/components/ui/calendar"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "School Address",
      details: ["Bugema University Road", "Luwero District", "Central Region, Uganda"],
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+256 123 456 789", "+256 987 654 321", "Emergency: +256 111 222 333"],
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@bugemaprimary.edu", "admissions@bugemaprimary.edu", "headteacher@bugemaprimary.edu"],
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 7:30 AM - 5:00 PM", "Saturday: 8:00 AM - 12:00 PM", "Sunday: Closed"],
      color: "text-orange-600",
    },
  ]

  const departments = [
    {
      name: "Admissions Office",
      contact: "admissions@bugemaprimary.edu",
      phone: "+256 123 456 789",
      description: "For enrollment inquiries, application processes, and admission requirements.",
    },
    {
      name: "Academic Office",
      contact: "academics@bugemaprimary.edu",
      phone: "+256 123 456 790",
      description: "For curriculum questions, academic progress, and educational programs.",
    },
    {
      name: "Finance Office",
      contact: "finance@bugemaprimary.edu",
      phone: "+256 123 456 791",
      description: "For school fees, payment plans, and financial assistance inquiries.",
    },
    {
      name: "Head Teacher's Office",
      contact: "headteacher@bugemaprimary.edu",
      phone: "+256 123 456 792",
      description: "For general school matters, policies, and administrative issues.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-teal-100 leading-relaxed">
              We're here to help! Get in touch with us for any questions, concerns, or information about Bugema
              Adventist Primary School.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4`}>
                    <info.icon className={`h-8 w-8 ${info.color}`} />
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2" />
                    Contact Form
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select onValueChange={(value) => handleInputChange("inquiryType", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="admissions">Admissions</SelectItem>
                            <SelectItem value="academic">Academic</SelectItem>
                            <SelectItem value="finance">Finance</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="complaint">Complaint</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Location */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us</h2>
              <Card className="mb-6">
                <CardContent className="p-0">
                  <div className="relative h-64 bg-gray-200 rounded-t-lg">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="School Location Map"
                      fill
                      className="object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                      <p className="text-white text-lg font-semibold">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">Bugema Adventist Primary School</h3>
                    <p className="text-gray-600 mb-4">
                      Located along Bugema University Road in Luwero District, our school is easily accessible by public
                      and private transport.
                    </p>
                    <Button variant="outline" className="w-full">
                      <MapPin className="h-4 w-4 mr-2" />
                      Get Directions
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Contact</CardTitle>
                  <CardDescription>Need immediate assistance?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="font-medium">Emergency Contact</span>
                      <span className="text-blue-600 font-semibold">+256 111 222 333</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium">WhatsApp</span>
                      <span className="text-green-600 font-semibold">+256 123 456 789</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600">Direct contact information for specific departments</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{dept.name}</CardTitle>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{dept.contact}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">{dept.phone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Us CTA */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Our Campus</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            We'd love to show you around our beautiful campus and introduce you to our school community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Calendar className="h-5 w-5 mr-2" />
              Schedule a Tour
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-teal-600">
              Download Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
