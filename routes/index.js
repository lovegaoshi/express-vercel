const { Router } = require("express");
const { SuccessResponseObject } = require("../common/http");
const ytbi = require("./ytbi");

const r = Router();

r.use("/ytbi", ytbi);

r.get("/", (req, res) =>
  res.json(new SuccessResponseObject("express vercel boiler plate"))
);

module.exports = r;
