const { Router } = require("express");
const connectionDB = require("../database/connection");

const routes = Router();

routes.get("/presentes", async (req, res) => {
  const gifts = await connectionDB("gifts")
    .select()
    .orderBy('id', 'asc');

  return res.json(gifts);
});

routes.put("/presentes/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  let { giver } = req.body;

  const gift = await connectionDB("gifts")
    .where('id', id)
    .first();

  if (!gift) {
    return res.status(404).json({
      error: true, 
      message: "Presente não encontrado no sistema"
    });
  }

  if (gift.giver) {
    return res.status(400).json({
      error: true,
      message: "Presente já está assinado por outra pessoa"
    });
  }

  giver = giver.trim();

  if (!(giver && giver.includes(" "))) {
    return res.status(400).json({
      error: true,
      message: "Nome e sobrenome da pessoa que está presenteando são obrigatórios"
    });
  }
  
  await connectionDB("gifts")
    .where('id', id)
    .update({ giver });

  return res.sendStatus(204);
});

module.exports = routes;