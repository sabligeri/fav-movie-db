import dotenv from "dotenv";
import mongoose from "mongoose";
import MoviesModel from "./model/movies.model.cjs"

dotenv.config();

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  console.error("Missing MONGO_URL environment variable");
  process.exit(1); // exit the current program
}

const populateMovies = async () => {
  
  const movies = movies.map((movie) => ({
    poster: movie.poster,
    title: movie.title,
    year: movie.year,
    seen: movie.seen,
    comment: movie.comment,
    genre: movie.genre
     }));

  await MoviesModel.create(...movies);
  console.log("Movies updated");
};

const main = async () => {
  await mongoose.connect(mongoUrl);

  await populateMovies();

  await mongoose.disconnect();
};

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
