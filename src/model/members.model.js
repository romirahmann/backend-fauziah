const db = require("./../database/project");

// group
const getAllGroup = async () =>
  await db
    .select("group_id", "group_name")
    .from("group_members")
    .where("is_deleted", 0);
const groupById = async (id) =>
  await db
    .select("group_id", "group_name")
    .from("group_members")
    .where("is_deleted", 0)
    .andWhere("group_id", id);
const updateGroup = async (id, data) =>
  await db("group_members").where("group_id", id).update(data);
const insertGroup = async (data) => await db("group_members").insert(data);

// members
const getAllMembers = async () =>
  await db
    .select(
      "m.noID",
      "m.member_id",
      "m.member_name",
      "m.group_id",
      "g.group_name"
    )
    .from("members as m")
    .join("group_members as g", "m.group_id", "g.group_id")
    .where("m.is_deleted", 0);
const membersById = async (id) =>
  await db
    .select(
      "m.noID",
      "m.member_id",
      "m.member_name",
      "m.group_id",
      "g.group_name"
    )
    .from("members as m")
    .join("group_members as g", "m.group_id", "g.group_id")
    .where("m.is_deleted", 0)
    .andWhere("m.group_id", id);
const updateMember = async (id, data) =>
  await db("members").where("member_id", id).update(data);
const insertMember = async (data) => await db("members").insert(data);
module.exports = {
  getAllGroup,
  groupById,
  insertGroup,
  updateGroup,
  getAllMembers,
  membersById,
  updateMember,
  insertMember,
};
