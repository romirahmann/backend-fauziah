const model = require("./../../model/customer.model");
const api = require("../../tools/common");

// Group
const getAllCustomer = async (req, res) => {
  try {
    let data = await model.getAllCustomer();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getCustomerById = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.customerById(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const updateCustomer = async (req, res) => {
  const { id } = req.params;
  const newCustomer = req.body;
  try {
    let data = await model.updateCustomer(id, newCustomer);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const insertCustomer = async (req, res) => {
  const newCustomer = req.body;
  try {
    let data = await model.insertCustomer(newCustomer);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  getAllCustomer,
  getCustomerById,
  insertCustomer,
  updateCustomer,
};
