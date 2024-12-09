import express,{ Request, Response, NextFunction, Application } from 'express';
import Book from '../models/Book';

// const app:Application = express();

// Get all books
export const getAllBooks = async (req: Request, res: any,next:NextFunction) => {
    try {
      const books = await Book.find();
      if (!books) {
        return res.status(404).json({ message: 'No books found' });
      }
      return res.status(200).json({ books });
    } catch (err) {
       return next(err);
    }
  };

// Get a book by ID
export const getById = async (req: Request, res: any, next: NextFunction) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.error(err);
    return next(err);
  }

  if (!book) {
    return res.status(404).json({ message: 'No Book found' });
  }
  return res.status(200).json({ book });
};

// Add a new book
export const addBook = async (req: Request, res: any, next: NextFunction) => {
  const { name, author, description, price, available, image } = req.body;

  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.error(err);
    return next(err);
  }

  if (!book) {
    return res.status(500).json({ message: 'Unable To Add the Book' });
  }
  return res.status(201).json({ book });
};

// Update a book by ID
export const updateBook = async (req: Request, res: any, next: NextFunction) => {
  const id = req.params.id;
  const { name, author, description, price, available, image } = req.body;

  let book;
  try {
    book = await Book.findByIdAndUpdate(
      id,
      {
        name,
        author,
        description,
        price,
        available,
        image,
      },
    
    );
  } catch (err) {
    console.error(err);
    return next(err);
  }

  if (!book) {
    return res.status(404).json({ message: 'Unable To Update By this ID' });
  }
  return res.status(200).json({ book });
};

// Delete a book by ID
export const deleteBook = async (req: Request, res: any, next: NextFunction) => {
  const id = req.params.id;

  let book;
  try {
    book = await Book.findByIdAndDelete(id);
  } catch (err) {
    console.error(err);
    return next(err);
  }

  if (!book) {
    return res.status(404).json({ message: 'Unable To Delete By this ID' });
  }
  return res.status(200).json({ message: 'Book Successfully Deleted' });
};
