const { Router } = require("express");
const CompanyController = require("../controllers/CompanyController.js");

const router = Router();

router.get('/companies', CompanyController.getAllCompanies)
router.get('/companies/:companyID', CompanyController.gettOneCompany)
router.post('/companies', CompanyController.createCompany)
router.post('/companies/:companyID', CompanyController.restoreCompany)
router.put('/companies/:companyID', CompanyController.updateCompany)
router.delete('/companies/:companyID', CompanyController.removeCompany)

module.exports = router;