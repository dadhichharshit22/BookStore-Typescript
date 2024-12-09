import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the Book document
export interface IBook extends Document {
  name: string;
  author: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

// Define the schema for the Book model
const bookSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    required: true, // Make it required if needed
    default: true,  // Provide a default value if applicable
  },
  image: {
    type: Buffer,
    required: true,
  },
});

// Create and export the Book model
const Book = mongoose.model<IBook>('Book', bookSchema);
export default Book;
