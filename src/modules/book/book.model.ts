import { model, Schema } from "mongoose";
import { Genre, IBook } from "./book.interface";

const genreEnum: Genre[] = [
  "FICTION",
  "NON_FICTION",
  "SCIENCE",
  "HISTORY",
  "BIOGRAPHY",
  "FANTASY",
];

const bookSchema = new Schema<IBook>(
  {
    title: { type: String, required: [true, "Title is required"] },
    author: { type: String, required: [true, "Author  is required"] },
    genre: {
      type: String,
      uppercase: true,
      required: [true, "Genre is required"],
      enum: {
        values: genreEnum,
        message: `Genre must be one of: ${genreEnum.join(", ")}`,
      },
    },
    isbn: {
      type: String,
      required: [true, "ISBN is required"],
    },
    description: { type: String, default: "" },
    copies: {
      type: Number,
      required: true,
      min: [0, "Copies must be a positive number"],
    },
    available: { type: Boolean, default: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

bookSchema.methods.updateAvailability = function () {
  if (this.copies <= 0) {
    this.available = false;
  }
};


const Book = model<IBook>("Book", bookSchema);

export default Book;
