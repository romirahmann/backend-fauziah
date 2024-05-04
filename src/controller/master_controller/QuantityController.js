const model = require("./../../model/quantity.model");
const api = require("../../tools/common");

const getQuantityByMilkId = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.getAllByMilk(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getQuantityByTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.getAllByTransaction(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

const updateQuantity = async (req, res) => {
  const { id } = req.params;
  const newQuantity = req.body;
  try {
    let data = await model.update(id, newQuantity);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const deleteQuantity = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.deleteQuantity(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

const insertQuantity = async (req, res) => {
  const newQuantity = req.body;
  try {
    let data = await model.insert(newQuantity);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  getQuantityByMilkId,
  getQuantityByTransaction,
  insertQuantity,
  updateQuantity,
  deleteQuantity,
};
