import express from "express";
import { Router } from "express";
import {
  createMovie,
  getAllMovie,
  getIdbyMovie,
  movieSearch,
} from "../controller/controller";

const router: Router = express.Router();

router.route("/create/movie").post(createMovie);

router.route("/get/movie").get(getAllMovie);

router.route("/get/movie/:id").get(getIdbyMovie);

router.route("/get/search/:key").get(movieSearch);

export default router;
