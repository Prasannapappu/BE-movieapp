import MovieModel from "../modules/modules";

const creatMovieData = async (body: any) => {
  const data = await MovieModel.create(body);
  return data;
};

const getMovie = async () => {
  const movieList = await MovieModel.find({});
  return movieList;
};

const getMovieId = async (id: string) => {
  const movieId = await MovieModel.aggregate([
    {
      $match: { _id: id },
    },
  ]);
  return movieId;
};

const getSearch = async (movie: string) => {
  const movieId = await MovieModel.aggregate([
    {
      $match: {
        movie: { $regex: movie.charAt(0).toUpperCase() + movie.slice(1) },
      },
    },
  ]);
  return movieId;
};

export { creatMovieData, getMovie, getMovieId, getSearch };
