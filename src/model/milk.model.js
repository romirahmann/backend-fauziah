const db = require("./../database/project");

const getAllMilk = async () =>
  await db
    .select(
      "m.milk_id",
      "m.member_id",
      "m.stok",
      "mbr.noID",
      "mbr.member_name",
      "mbr.group_id",
      "g.group_name"
    )
    .from("milk as m")
    .leftJoin("members as mbr", "mbr.member_id", "m.member_id")
    .leftJoin("group_memberS as g", "g.group_id", "mbr.group_id")
    .where("m.is_deleted", 0);
const getMilkById = async (id) =>
  await db
    .select(
      "m.milk_id",
      "m.member_id",
      "m.stok",
      "mbr.noID",
      "mbr.member_name",
      "mbr.group_id",
      "g.group_name"
    )
    .from("milk as m")
    .leftJoin("members as mbr", "mbr.member_id", "m.member_id")
    .leftJoin("group_memberS as g", "g.group_id", "mbr.group_id")
    .where("m.milk_id", id);
const updateMilk = async (id, data) =>
  await db("milk").where("milk_id", id).update(data);
const insertMilk = async (data) => await db("milk").insert(data);

module.exports = {
  getAllMilk,
  getMilkById,
  updateMilk,
  insertMilk,
};
