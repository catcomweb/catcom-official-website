import {Router} from 'express';
import sccleadersController from "../controllers/sccLeaders.controller.js";

const router = Router();

// ENDPOINTS FOR LEADERS

// GET LEADERS

router.get('/sccLeaders', sccleadersController.getsccLeader)

//POST LEADERS
router.post('/sccLeaders', sccleadersController.createsccLeader)

//DELETE LEADERS
router.delete('/sccLeaders/:id', sccleadersController.deletesccLeader)

export default router;
