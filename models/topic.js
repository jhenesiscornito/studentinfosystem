import mongoose, { Schema } from "mongoose";

const topicSchema = new Schema(
  {
    title: {
      type: String,
      required: true,  // Ensures title is always provided
    },
    description: {
      type: String,
      required: true,  // Ensures description is always provided
    },
    year: {
      type: String,
      required: true,  // Makes sure year is provided
    },
    email: {
      type: String,
      required: true,  // Makes sure email is provided
      match: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/, // Optional: regex for basic email validation
    },
    contact: {
      type: String,
      required: true,  // Ensures contact is provided
    },
  },
  {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
  }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;
