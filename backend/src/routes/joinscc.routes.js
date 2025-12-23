import { Router } from "express"; 
import joinsccController from "../controllers/joinscc.controller.js";       

const router = Router();
// ENDPOINTS FOR JOIN SCC

// GET JOIN SCC ENTRIES
router.get("/joinscc", joinsccController.getJoinSCC);
// POST JOIN SCC ENTRY
router.post("/joinscc", joinsccController.createJoinSCC);
// DELETE JOIN SCC ENTRY
router.delete("/joinscc/:id", joinsccController.deleteJoinSCC);     


export default router;