import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getSingleHotel,
  getAllHotels,
  getHotelLatest
} from "../controllers/hotelController.js";
const router = express.Router();

import { verifyVehicleDriver } from "../utils/verifyToken.js";
router.get("/single/:id", getSingleHotel);

router.post("/", createHotel);

router.delete("/:id", deleteHotel);

router.put("/update/:id", updateHotel);

router.get("/", getAllHotels);

router.get("/latest", getHotelLatest);



export default router;
