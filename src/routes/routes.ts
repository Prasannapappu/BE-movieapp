import express from "express";
import { Router } from "express";
import {
  createMovie,
  getAllMovie,
  getIdbyMovie,
  movieSearch,
  movieDel,
  updateMovie,
} from "../controller/controller";

const router: Router = express.Router();

router.route("/create/movie").post(createMovie);

router.route("/get/movie").get(getAllMovie);

router.route("/get/movie/:id").get(getIdbyMovie);

router.route("/get/search/:key").get(movieSearch);

router.route("/delete/:id").delete(movieDel);

router.route("/update/movie/:id").put(updateMovie);

export default router;
