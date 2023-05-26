import express from "express";
import {
  createTour,
  deleteTour,
  getAllTour,
  getSingleTour,
  getTourLatest,
  updatedTour,
  // getTourBySearch,
  // getFeaturedTour,
  // getTourCounts,
  // getAllTourHotel,
} from "../controllers/tourController.js";

import { verifyHotel } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/hotel", getAllTourHotel);

//create new tour
router.post("/", createTour);

//update tour
router.put("/:id", updatedTour);

//Delete tour
router.delete("/:id", deleteTour);

//get sigle tour
router.get("/single/:id", getSingleTour);

//get all tours
router.get("/", getAllTour);

router.get("/latest", getTourLatest);

//get tours by Search
// router.get("/search/getTourBySearch", getTourBySearch);
// router.get("/search/getFeaturedTours", getFeaturedTour);
// router.get("/search/getTourCount", getTourCounts);

export default router;
