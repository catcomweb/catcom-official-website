import { Router } from "express"; 
import joinSCCController from "../controllers/joinscc.controller.js";       

const router = Router();
// ENDPOINTS FOR JOIN SCC

// GET JOIN SCC ENTRIES
router.get("/joinscc", joinSCCController.getJoinSCC);
// POST JOIN SCC ENTRY
router.post("/joinscc", joinSCCController.createJoinSCC);
// DELETE JOIN SCC ENTRY
router.delete("/joinscc/:id", joinSCCController.deleteJoinSCC);     

export default router;