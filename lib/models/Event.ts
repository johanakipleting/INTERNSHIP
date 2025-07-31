import mongoose from "mongoose"

const EventSchema = new mongoose.Schema({
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
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["academic", "cultural", "sports", "competition", "meeting"],
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["draft", "published", "cancelled"],
    default: "draft",
  },
  featuredImage: {
    type: String,
    default: null,
  },
  maxAttendees: {
    type: Number,
    default: null,
  },
  registrationRequired: {
    type: Boolean,
    default: false,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
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

EventSchema.pre("save", function (next) {
  this.updatedAt = new Date()
  next()
})

export default mongoose.models.Event || mongoose.model("Event", EventSchema)
