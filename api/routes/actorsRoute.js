const { Router } = require("express");
const ActorController = require("../controllers/ActorController.js");

const router = Router();

router.get('/actors', ActorController.getAllActors)
router.get('/actors/:actorID', ActorController.gettOneActor)
router.post('/actors', ActorController.createActor)
router.post('/actors/:actorID', ActorController.restoreActor)
router.put('/actors/:actorID', ActorController.updateActor)
router.delete('/actors/:actorID', ActorController.removeActor)

router.get('/actors/:actorID/media/:mediaID', ActorController.gettOneMedia)
router.post('/actors/:actorID/media', ActorController.createActorMedia)
router.put('/actors/:actorID/media/:mediaID', ActorController.updateActorMedia)

module.exports = router;