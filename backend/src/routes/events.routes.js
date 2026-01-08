import { Router } from "express";
import { createEvent, getEvents } from "../controllers/eve  nt.controller.js";

const router = Router();

router.get("/events", getEvents);
router.post("/events", createEvent);

export default router;
