const database = require('../models');

class WorkController {
  // Criar os métodos que iremos utilizar
  static async getAllWorks (req, res) {
    try {
      const allWorks = await database.Works.findAll();
      return res.status(200).json(allWorks);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async gettOneWork (req, res) {
    const { workID } = req.params;

    try {
      const oneWork = await database.Works.findOne({
        where: {
          id: Number(workID)
        }
      })

      return res.status(200).json(oneWork);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async createWork (req, res) {
    const newWork = req.body;

    try {
      const newCreatedWork = await database.Works.create(newWork);
      return res.status(200).json(newCreatedWork);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateWork (req, res) {
    const { workID } = req.params;
    const newInfo = req.body;

    try {
      await database.Works.update(newInfo, { 
        where: { 
          id: Number(workID)
        }
       });

       const updatedWork = await database.Works.findOne({
        where: {
          id: Number(workID)
        }
      });

      return res.status(200).json(updatedWork);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async removeWork (req, res) {
    const { workID } = req.params;

    try {
      await database.Works.destroy({ 
        where: {
          id: Number(workID)
        }
       });
      return res.status(200).json({ mensagem: `O trabalho com o ID #${workID} foi removido com sucesso!` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async restoreWork (req, res) {
    const { workID } = req.params;

    try {
      await database.Work.restore({ 
        where: {
          id: Number(workID)
        }
       });
      return res.status(200).json({ mensagem: `A companhia com o ID #${workID} foi restaurada com sucesso!` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

}

module.exports = WorkController;