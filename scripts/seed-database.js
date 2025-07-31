const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/bugema-school"

// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
  isActive: Boolean,
  createdAt: { type: Date, default: Date.now },
})

// Settings Schema
const SettingsSchema = new mongoose.Schema({
  siteName: String,
  tagline: String,
  description: String,
  primaryColor: String,
  secondaryColor: String,
  accentColor: String,
  darkMode: Boolean,
  contactInfo: {
    address: String,
    phone: String,
    email: String,
    officeHours: String,
  },
  updatedAt: { type: Date, default: Date.now },
})

// News Schema
const NewsSchema = new mongoose.Schema({
  title: String,
  slug: String,
  excerpt: String,
  content: String,
  category: String,
  status: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  publishedAt: Date,
  createdAt: { type: Date, default: Date.now },
})

// Event Schema
const EventSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  category: String,
  startDate: Date,
  endDate: Date,
  startTime: String,
  endTime: String,
  location: String,
  status: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, default: Date.now },
})

const User = mongoose.model("User", UserSchema)
const Settings = mongoose.model("Settings", SettingsSchema)
const News = mongoose.model("News", NewsSchema)
const Event = mongoose.model("Event", EventSchema)

async function seedDatabase() {
  try {
    await mongoose.connect(MONGODB_URI)
    console.log("Connected to MongoDB")

    // Clear existing data
    await User.deleteMany({})
    await Settings.deleteMany({})
    await News.deleteMany({})
    await Event.deleteMany({})
    console.log("Cleared existing data")

    // Create admin user
    const hashedPassword = await bcrypt.hash("admin123", 10)
    const adminUser = await User.create({
      name: "Admin User",
      email: "admin@bugemaprimary.ac.ug",
      password: hashedPassword,
      role: "admin",
      isActive: true,
    })
    console.log("Created admin user")

    // Create default settings
    await Settings.create({
      siteName: "Bugema Adventist Primary School",
      tagline: "Excellence in Christian Education",
      description: "Nurturing young minds with values and knowledge",
      primaryColor: "#3b82f6",
      secondaryColor: "#10b981",
      accentColor: "#f59e0b",
      darkMode: false,
      contactInfo: {
        address: "Bugema, Wakiso District, Uganda",
        phone: "+256 123 456 789",
        email: "info@bugemaprimary.ac.ug",
        officeHours: "Mon - Fri: 8:00 AM - 5:00 PM",
      },
    })
    console.log("Created default settings")

    // Create sample news articles
    const newsArticles = [
      {
        title: "New Science Laboratory Opens",
        slug: "new-science-laboratory-opens",
        excerpt:
          "Our state-of-the-art science laboratory is now open, providing students with hands-on learning opportunities.",
        content:
          "We are excited to announce the opening of our new science laboratory, equipped with modern equipment and safety features. This facility will enhance our students' learning experience in physics, chemistry, and biology.",
        category: "facilities",
        status: "published",
        author: adminUser._id,
        publishedAt: new Date("2024-01-15"),
      },
      {
        title: "Annual Sports Day Success",
        slug: "annual-sports-day-success",
        excerpt: "Students showcased their athletic talents in our annual sports day celebration.",
        content:
          "Our annual sports day was a tremendous success with students participating in various athletic events. The day promoted teamwork, healthy competition, and school spirit.",
        category: "events",
        status: "published",
        author: adminUser._id,
        publishedAt: new Date("2024-01-10"),
      },
      {
        title: "Academic Excellence Awards",
        slug: "academic-excellence-awards",
        excerpt: "Celebrating our top-performing students in the recent academic assessments.",
        content:
          "We are proud to recognize our outstanding students who have demonstrated exceptional academic performance. Their dedication and hard work serve as an inspiration to their peers.",
        category: "academics",
        status: "published",
        author: adminUser._id,
        publishedAt: new Date("2024-01-05"),
      },
    ]

    await News.insertMany(newsArticles)
    console.log("Created sample news articles")

    // Create sample events
    const events = [
      {
        title: "Parent-Teacher Conference",
        slug: "parent-teacher-conference",
        description: "Meet with your child's teachers to discuss academic progress and development.",
        category: "academic",
        startDate: new Date("2024-02-15"),
        endDate: new Date("2024-02-15"),
        startTime: "09:00 AM",
        endTime: "05:00 PM",
        location: "School Hall",
        status: "published",
        author: adminUser._id,
      },
      {
        title: "Science Fair",
        slug: "science-fair",
        description: "Students will showcase their innovative science projects and experiments.",
        category: "competition",
        startDate: new Date("2024-02-20"),
        endDate: new Date("2024-02-20"),
        startTime: "10:00 AM",
        endTime: "03:00 PM",
        location: "Science Laboratory",
        status: "published",
        author: adminUser._id,
      },
      {
        title: "Cultural Day Celebration",
        slug: "cultural-day-celebration",
        description: "Celebrating the diverse cultures of our student community.",
        category: "cultural",
        startDate: new Date("2024-02-25"),
        endDate: new Date("2024-02-25"),
        startTime: "02:00 PM",
        endTime: "06:00 PM",
        location: "School Grounds",
        status: "published",
        author: adminUser._id,
      },
    ]

    await Event.insertMany(events)
    console.log("Created sample events")

    console.log("Database seeded successfully!")
    console.log("Admin login: admin@bugemaprimary.ac.ug / admin123")
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    await mongoose.disconnect()
    console.log("Disconnected from MongoDB")
  }
}

seedDatabase()
