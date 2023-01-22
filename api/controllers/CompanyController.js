const database = require('../models');

class CompanyController {
  // Criar os métodos que iremos utilizar
  static async getAllCompanies (req, res) {
    try {
      const allCompanies = await database.Companies.findAll();
      return res.status(200).json(allCompanies);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async gettOneCompany (req, res) {
    const { companyID } = req.params;

    try {
      const oneCompany = await database.Companies.findOne({
        where: {
          id: Number(companyID)
        }
      })

      return res.status(200).json(oneCompany);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async createCompany (req, res) {
    const newCompany = req.body;

    try {
      const newCreatedCompany = await database.Companies.create(newCompany);
      return res.status(200).json(newCreatedCompany);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateCompany (req, res) {
    const { companyID } = req.params;
    const newInfo = req.body;

    try {
      await database.Companies.update(newInfo, { 
        where: { 
          id: Number(companyID)
        }
       });

       const updatedCompany = await database.Companies.findOne({
        where: {
          id: Number(companyID)
        }
      });

      return res.status(200).json(updatedCompany);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async removeCompany (req, res) {
    const { companyID } = req.params;

    try {
      await database.Companies.destroy({ 
        where: {
          id: Number(companyID)
        }
       });
      return res.status(200).json({ mensagem: `A companhia com o ID #${companyID} foi removida com sucesso!` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async restoreCompany (req, res) {
    const { companyID } = req.params;

    try {
      await database.Company.restore({ 
        where: {
          id: Number(companyID)
        }
       });
      return res.status(200).json({ mensagem: `A companhia com o ID #${companyID} foi restaurada com sucesso!` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

}

module.exports = CompanyController;