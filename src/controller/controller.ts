import {
  creatMovieData,
  getMovie,
  getMovieId,
  getSearch,
  deleteMovie,
  updateMovieList,
} from "../services/service";

const createMovie = async (req: any, res: any) => {
  console.log(req);
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

const movieDel = async (req: any, res: any) => {
  const del = await deleteMovie(req.params.id);
  res.send(del);
};

const updateMovie = async (req: any, res: any) => {
  const updateData = await updateMovieList(req.params.id, req.body);
  res.send(updateData);
};

export {
  createMovie,
  getAllMovie,
  getIdbyMovie,
  movieSearch,
  movieDel,
  updateMovie,
};
