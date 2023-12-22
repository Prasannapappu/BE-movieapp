import {
  creatMovieData,
  getMovie,
  getMovieId,
  getSearch,
} from "../services/service";

const createMovie = async (req: any, res: any) => {
  const movieData = await creatMovieData(req.body);
  res.send(movieData);
};

const getAllMovie = async (req: any, res: any) => {
  const allMovie = await getMovie();
  res.send(allMovie);
};

const getIdbyMovie = async (req: any, res: any) => {
  const movieId = await getMovieId(req.params.id);
  res.send(movieId);
};

const movieSearch = async (req: any, res: any) => {
  const search = await getSearch(req.params.key);
  res.send(search);
};

export { createMovie, getAllMovie, getIdbyMovie, movieSearch };
