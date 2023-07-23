import express from "express";
import {
  createMovie,
  deleteMovie,
  findAllMovies,
  findMovieById,
  updateMovie,
} from "../controllers/movies.controller";

const movieRoutes = express.Router();

movieRoutes.post("/movies", createMovie);
movieRoutes.get("/movies", findAllMovies);
movieRoutes.get("/movies/:id", findMovieById);
movieRoutes.put("/movies/:id", updateMovie);
movieRoutes.delete("/movies/:id", deleteMovie);

export default movieRoutes;
