const db = require("./../database/project");

// members
const getAllCustomer = async () =>
  await db
    .select("customer_id", "customer_name", "noIdCustomer")
    .from("customer")
    .where("is_deleted", 0);
const customerById = async (id) =>
  await db
    .select("customer_id", "customer_name", "noIdCustomer")
    .where("is_deleted", 0)
    .andWhere("customer_id", id);
const updateCustomer = async (id, data) =>
  await db("customer").where("customer_id", id).update(data);
const insertCustomer = async (data) => await db("customer").insert(data);
module.exports = {
  getAllCustomer,
  customerById,
  updateCustomer,
  insertCustomer,
};
