import { Request, Response } from "express";
import { Movie } from "../models/Movie";
import { prisma } from "../prisma/prismaClient";
import { ConflictError, NotFoundError } from "../errors/AppError";

export const createMovie = async (req: Request, res: Response) => {
  const { name, category, duration, price } = req.body;

  const checkIfMovieNameExist = await prisma.movies.findFirst({
    where: {
      name: name,
    },
  });

  if (!checkIfMovieNameExist) {
    const newMovie: Movie = await prisma.movies.create({
      data: {
        name,
        category,
        duration,
        price,
      },
    });
    return res.status(201).json(newMovie);
  } else {
    throw new ConflictError("Movie name already exists!");
  }
};

export const findAllMovies = async (req: Request, res: Response) => {
  const category = req.query.category as string;

  let movies;
  if (category) {
    movies = await prisma.movies.findMany({
      where: {
        category: category,
      },
    });
  } else {
    movies = await prisma.movies.findMany();
  }

  return res.status(200).json(movies);
};

export const findMovieById = async (req: Request, res: Response) => {
  const movieId = req.params.id;

  const findMovie = await prisma.movies.findUnique({
    where: {
      id: movieId,
    },
  });

  if (findMovie) {
    return res.status(200).json(findMovie);
  } else {
    throw new NotFoundError("Movie not found!");
  }
};

export const updateMovie = async (req: Request, res: Response) => {
  const movieId = req.params.id;
  const { name, category, duration, price } = req.body;

  const checkIfMovieExist = await prisma.movies.findUnique({
    where: {
      id: movieId,
    },
  });

  if (checkIfMovieExist) {
    const checkIfMovieNameExist = await prisma.movies.findFirst({
      where: {
        name: name,
      },
    });
    if (!checkIfMovieNameExist) {
      const updateMovie = await prisma.movies.update({
        where: {
          id: movieId,
        },
        data: {
          name,
          category,
          duration,
          price,
        },
      });
      return res.status(200).json(updateMovie);
    } else {
      throw new ConflictError("Movie name already exists!");
    }
  } else {
    throw new NotFoundError("Movie not found!");
  }
};

export const deleteMovie = async (req: Request, res: Response) => {
  const movieId = req.params.id;

  const checkIfMovieExist = await prisma.movies.findUnique({
    where: {
      id: movieId,
    },
  });

  if (checkIfMovieExist) {
    await prisma.movies.delete({
      where: {
        id: movieId,
      },
    });

    return res.sendStatus(204);
  } else {
    throw new NotFoundError("Movie not found!");
  }
};
