const model = require("./../../model/milk.model");
const api = require("../../tools/common");

// Group
const getAllMilk = async (req, res) => {
  try {
    let data = await model.getAllMilk();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getMilkById = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.getMilkById(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const updateMilk = async (req, res) => {
  const { id } = req.params;
  const newMilk = req.body;
  try {
    let data = await model.updateMilk(id, newMilk);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const insertMilk = async (req, res) => {
  const newMilk = req.body;
  try {
    let data = await model.insertMilk(newMilk);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  getAllMilk,
  getMilkById,
  insertMilk,
  updateMilk,
};
