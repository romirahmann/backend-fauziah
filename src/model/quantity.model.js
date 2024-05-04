const db = require("./../database/project");

const getAllByMilk = async (id) =>
  await db
    .select(
      "quantity_id",
      "milk_id",
      "uji_alkohol",
      "uji_bj",
      "fat",
      "snf",
      "lactosa",
      "density",
      "salts",
      "protein",
      "ts",
      "added_water",
      "temp_sample",
      "freez_point"
    )
    .from("quantity_milk")
    .where("milk_id", id);
const getAllByTransaction = async (id) =>
  await db
    .select(
      "quantity_id",
      "milk_id",
      "transaction_id",
      "uji_alkohol",
      "uji_bj",
      "fat",
      "snf",
      "lactosa",
      "density",
      "salts",
      "protein",
      "ts",
      "added_water",
      "temp_sample",
      "freez_point"
    )
    .from("quantity_milk")
    .where("transaction_id", id);
const insert = async (data) => await db("quantity_milk").insert(data);
const update = async (id, data) =>
  await db("quantity_milk").where("quantity_id", id).insert(data);
const deleteQuantity = async (id, data) =>
  await db("quantity_milk").where("transaction_id", id).del();

module.exports = {
  getAllByMilk,
  getAllByTransaction,
  insert,
  update,
  deleteQuantity,
};
