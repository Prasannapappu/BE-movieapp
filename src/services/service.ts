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

const deleteMovie = async (id: string) => {
  const findMovieId = await MovieModel.findById(id);
  if (!findMovieId) {
    console.log("user Not found");
  }
  const updateMovie = await MovieModel.findByIdAndDelete({ _id: id });
  return updateMovie;
};

const updateMovieList = async (id: string, body: any) => {
  const findMovieId = await MovieModel.findById(id);
  if (!findMovieId) {
    console.log("user Not found");
  }
  const updateData = await MovieModel.findByIdAndUpdate({ _id: id }, body, {
    new: true,
  });
  return updateData;
};

export {
  creatMovieData,
  getMovie,
  getMovieId,
  getSearch,
  deleteMovie,
  updateMovieList,
};
