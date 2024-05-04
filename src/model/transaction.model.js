const db = require("./../database/project");

const getAllTransaction = async () =>
  await db
    .select(
      "t.transaction_id",
      "t.category_id",
      "t.date",
      "t.user_id",
      "t.vol",
      "t.milk_id",
      "c.category_name",
      "cr.customer_id",
      "cr.customer_name",
      "cr.noIdCustomer",
      "m.member_id",
      "m.stok",
      "mbr.noID",
      "mbr.member_name",
      "mbr.group_id",
      "g.group_name",
      "u.username"
    )
    .from("transactions as t")
    .leftJoin("categories_transaction as c", "t.category_id", "c.category_id")
    .leftJoin("customer as cr", "cr.customer_id", "t.customer_id")
    .leftJoin("milk as m", "t.milk_id", "m.milk_id")
    .leftJoin("members as mbr", "m.member_id", "mbr.member_id")
    .leftJoin("users as u", "u.user_id", "t.user_id")
    .leftJoin("group_members as g", "mbr.group_id", "g.group_id");

const transactionById = async (id) =>
  await db
    .select(
      "t.transaction_id",
      "t.category_id",
      "t.date",
      "t.user_id",
      "t.milk_id",
      "t.vol",
      "c.category_name",
      "cr.customer_id",
      "cr.customer_name",
      "cr.noIdCustomer",
      "m.member_id",
      "m.stok",
      "mbr.noID",
      "mbr.member_name",
      "mbr.group_id",
      "g.group_name",
      "u.username"
    )
    .from("transactions as t")
    .leftJoin("categories_transaction as c", "t.category_id", "c.category_id")
    .leftJoin("customer as cr", "cr.customer_id", "t.customer_id")
    .leftJoin("milk as m", "t.milk_id", "m.milk_id")
    .leftJoin("members as mbr", "m.member_id", "mbr.member_id")
    .leftJoin("users as u", "u.user_id", "t.user_id")
    .leftJoin("group_members as g", "mbr.group_id", "g.group_id")
    .where("t.transaction_id", id);

const insertTransaction = async (data) => await db("transactions").insert(data);
const updateTransaction = async (id, data) =>
  await db("transactions").where("transaction_id", id).update(data);
const deleteTransaction = async (id) =>
  await db("transactions").where("transaction_id", id).del();

const transactionByCategroy = async (id) =>
  await db
    .select(
      "t.transaction_id",
      "t.category_id",
      "t.date",
      "t.user_id",
      "t.vol",
      "t.milk_id",
      "c.category_name",
      "cr.customer_id",
      "cr.customer_name",
      "cr.noIdCustomer",
      "m.member_id",
      "m.stok",
      "mbr.noID",
      "mbr.member_name",
      "mbr.group_id",
      "g.group_name",
      "u.username"
    )
    .from("transactions as t")
    .leftJoin("categories_transaction as c", "t.category_id", "c.category_id")
    .leftJoin("customer as cr", "cr.customer_id", "t.customer_id")
    .leftJoin("milk as m", "t.milk_id", "m.milk_id")
    .leftJoin("members as mbr", "m.member_id", "mbr.member_id")
    .leftJoin("users as u", "u.user_id", "t.user_id")
    .leftJoin("group_members as g", "mbr.group_id", "g.group_id")
    .where("t.category_id", id);

// STOK
const getStok = async () => await db.select("stok_id", "stok_vol").from("stok");
const insertStok = async (data) => await db("stok").insert(data);
const updateStok = async (id, data) =>
  await db("stok").where("stok_id", id).update(data);

module.exports = {
  getAllTransaction,
  transactionById,
  insertTransaction,
  updateTransaction,
  transactionByCategroy,
  deleteTransaction,
  getStok,
  insertStok,
  updateStok,
};
