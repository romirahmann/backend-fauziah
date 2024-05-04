const model = require("./../../model/transaction.model");
const api = require("../../tools/common");

const getAllTransaction = async (req, res) => {
  try {
    let data = await model.getAllTransaction();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

const getTransactionById = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.transactionById(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

const getTransactionByCategoryId = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.transactionByCategroy(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

const updateTransaction = async (req, res) => {
  const { id } = req.params;
  const newTransaction = req.body;
  try {
    let data = await model.updateTransaction(id, newTransaction);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const deleteTransaction = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.deleteTransaction(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

const insertTransaction = async (req, res) => {
  const newTransaction = req.body;
  try {
    let data = await model.insertTransaction(newTransaction);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
// STOK
const getAllStok = async (req, res) => {
  try {
    let data = await model.getStok();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const updateStok = async (req, res) => {
  const { id } = req.params;
  const stok = req.body;
  try {
    let data = await model.updateStok(id, stok);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const insertStok = async (req, res) => {
  const stok = req.body;
  try {
    let data = await model.insertStok(stok);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  getAllTransaction,
  getTransactionById,
  updateTransaction,
  insertTransaction,
  getTransactionByCategoryId,
  deleteTransaction,
  getAllStok,
  insertStok,
  updateStok,
};
