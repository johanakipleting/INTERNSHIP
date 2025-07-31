import mongoose from "mongoose"

const SettingsSchema = new mongoose.Schema({
  siteName: {
    type: String,
    required: true,
    default: "Bugema Adventist Primary School",
  },
  tagline: {
    type: String,
    default: "The fear of God is the beginning of wisdom",
  },
  description: {
    type: String,
    default: "Train the child spiritually,mentally,and socially for this world and world to come.",
  },
  logo: {
    type: String,
    default: null,
  },
  favicon: {
    type: String,
    default: null,
  },
  primaryColor: {
    type: String,
    default: "#3b82f6",
  },
  secondaryColor: {
    type: String,
    default: "#10b981",
  },
  accentColor: {
    type: String,
    default: "#f59e0b",
  },
  darkMode: {
    type: Boolean,
    default: false,
  },
  customCSS: {
    type: String,
    default: "",
  },
  contactInfo: {
    address: {
      type: String,
      default: "Bugema, Luweero District, Uganda",
    },
    phone: {
      type: String,
      default: "+256 786 934 813 / +256 775 034 301",
    },
    email: {
      type: String,
      default: "bugemaadvprimary@gmail.com",
    },
    officeHours: {
      type: String,
      default: "Mon - Fri: 8:00 AM - 5:00 PM",
    },
  },
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String,
    youtube: String,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

SettingsSchema.pre("save", function (next) {
  this.updatedAt = new Date()
  next()
})

export default mongoose.models.Settings || mongoose.model("Settings", SettingsSchema)
