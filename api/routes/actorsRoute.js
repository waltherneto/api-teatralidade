const { Router } = require("express");
const ActorController = require("../controllers/ActorController.js");

const router = Router();

router.get('/actors', ActorController.getAllActors)
router.get('/actors/:actorID', ActorController.gettOneActor)
router.post('/actors', ActorController.createActor)
router.put('/actors/:actorID', ActorController.updateActor)
router.delete('/actors/:actorID', ActorController.removeActor)

module.exports = router;