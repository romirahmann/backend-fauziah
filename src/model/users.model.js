const db = require("./../database/project");

const getAll = async () =>
  await db
    .select(
      "u.user_id",
      "u.username",
      "u.role_id",
      "u.password",
      "u.is_deleted",
      "r.role_name",
      "r.role_description"
    )
    .from("users as u")
    .join("role as r", "r.role_id", "u.role_id")
    .where("u.is_deleted", 0);

const getById = async (id) =>
  await db
    .select(
      "u.user_id",
      "u.username",
      "u.role_id",
      "u.password",
      "u.is_deleted",
      "r.role_name",
      "r.role_description"
    )
    .from("users as u")
    .join("role as r", "r.role_id", "u.role_id")
    .where("u.is_deleted", 0)
    .andWhere("u.user_id", id);

const insert = async (data) => await db("users").insert(data);
const update = async (id, data) =>
  await db("users").where("user_id", id).update(data);

// ROLE ID
const allRole = async () =>
  await db.select("role_id", "role_name", "role_description").from("role");

module.exports = {
  getAll,
  getById,
  insert,
  update,
  allRole,
};
