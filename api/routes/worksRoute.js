const { Router } = require("express");
const WorkController = require("../controllers/WorkController.js");

const router = Router();

router.get('/works', WorkController.getAllWorks)
router.get('/works/:workID', WorkController.gettOneWork)
router.post('/works', WorkController.createWork)
router.post('/works/:workID', WorkController.restoreWork)
router.put('/works/:workID', WorkController.updateWork)
router.delete('/works/:workID', WorkController.removeWork)

module.exports = router;