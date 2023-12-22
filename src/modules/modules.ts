import mongoose, { Schema, Document, Model } from "mongoose";
import { v4 as uuidv4 } from "uuid";

interface IMovie extends Document {
  _id: string;
  movie: string;
  genres: string;
  language: string;
  rating: number;
}

const movieSchema: Schema = new Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  movie: {
    type: String,
  },
  genres: {
    type: String,
  },
  language: {
    type: String,
  },
  rating: {
    type: Number,
  },
});

const MovieModel: Model<IMovie> = mongoose.model<IMovie>("Movie", movieSchema);

export default MovieModel;
