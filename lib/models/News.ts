import mongoose from "mongoose"

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["academics", "events", "facilities", "announcements"],
  },
  status: {
    type: String,
    required: true,
    enum: ["draft", "published"],
    default: "draft",
  },
  featuredImage: {
    type: String,
    default: null,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  publishedAt: {
    type: Date,
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

NewsSchema.pre("save", function (next) {
  this.updatedAt = new Date()
  if (this.status === "published" && !this.publishedAt) {
    this.publishedAt = new Date()
  }
  next()
})

export default mongoose.models.News || mongoose.model("News", NewsSchema)
