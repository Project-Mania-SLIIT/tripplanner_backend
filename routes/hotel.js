import express from "express";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getSingleHotel,
  getAllHotels,
} from "../controllers/hotelController.js";
const router = express.Router();

import { verifyVehicleDriver } from "../utils/verifyToken.js";
router.get("/single/:id", getSingleHotel);

router.post("/", createHotel);

router.delete("/:id", deleteHotel);

router.put("/", updateHotel);

router.get("/", getAllHotels);



export default router;
