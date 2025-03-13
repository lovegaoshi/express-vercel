const { Router } = require("express");
const { SuccessResponseObject } = require("../common/http");
const { getPlayer } = require("../services/ytbi");

const r = Router();

r.get("/", async (req, res) => {
  await getPlayer();
  res.json(new SuccessResponseObject("demo path live 🚀"));
});

module.exports = r;
