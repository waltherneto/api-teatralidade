const database = require('../models');

class ActorController {
  // Criar os métodos que iremos utilizar
  static async getAllActors (req, res) {
    try {
      const allActors = await database.Actors.findAll();
      return res.status(200).json(allActors);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async gettOneActor (req, res) {
    const { actorID } = req.params;

    try {
      const oneActor = await database.Actors.findOne({
        where: {
          id: Number(actorID)
        }
      })

      return res.status(200).json(oneActor);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async createActor (req, res) {
    const newActor = req.body;

    try {
      const newCreatedActor = await database.Actors.create(newActor);
      return res.status(200).json(newCreatedActor);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateActor (req, res) {
    const { actorID } = req.params;
    const newInfo = req.body;

    try {
      await database.Actors.update(newInfo, { 
        where: { 
          id: Number(actorID)
        }
       });

       const updatedActor = await database.Actors.findOne({
        where: {
          id: Number(actorID)
        }
      });

      return res.status(200).json(updatedActor);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async removeActor (req, res) {
    const { actorID } = req.params;

    try {
      await database.Actors.destroy({ 
        where: {
          id: Number(actorID)
        }
       });
      return res.status(200).json({ mensagem: `O ator com o ID #${actorID} foi removido com sucesso!` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async restoreActor (req, res) {
    const { actorID } = req.params;

    try {
      await database.Actors.restore({ 
        where: {
          id: Number(actorID)
        }
       });
      return res.status(200).json({ mensagem: `O ator com o ID #${actorID} foi restaurado com sucesso!` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async gettOneMedia (req, res) {
    const { actorID, mediaID } = req.params;

    try {
      const oneMedia = await database.ActorMedias.findOne({
        where: {
          id: Number(mediaID),
          actor_id: Number(actorID)
        }
      })

      return res.status(200).json(oneMedia);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async createActorMedia (req, res) {
    const { actorID } = req.params;
    const newActorMedia = { ...req.body, actor_id: Number(actorID) };

    try {
      const newCreatedActorMedia = await database.ActorMedias.create(newActorMedia)

      return res.status(200).json(newCreatedActorMedia);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async updateActorMedia (req, res) {
    const { actorID, mediaID } = req.params;
    const newInfo = req.body;

    try {
      await database.ActorMedias.update(newInfo, { 
        where: { 
          id: Number(mediaID),
          actor_id: Number(actorID)
        }
       });

       const updatedActorMedia = await database.ActorMedias.findOne({
        where: {
          id: Number(mediaID),
          actor_id: Number(actorID)
        }
      });

      return res.status(200).json(updatedActorMedia);
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

  static async removeActorMedia (req, res) {
    const { actorID, mediaID } = req.params;

    try {
      await database.Actors.destroy({ 
        where: {
          id: Number(mediaID),
          actor_id: Number(actorID)
        }
       });
      return res.status(200).json({ mensagem: `O item de mídia com ID #${mediaID} do ator #${actorID} foi removido com sucesso!` });
    } catch (err) {
      return res.status(500).json(err.message);
    }
  }

}

module.exports = ActorController;