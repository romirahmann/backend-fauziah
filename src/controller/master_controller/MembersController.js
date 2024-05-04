const model = require("./../../model/members.model");
const api = require("../../tools/common");

// Group
const getAllGroup = async (req, res) => {
  try {
    let data = await model.getAllGroup();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const getGroupById = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.groupById(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const updateGroup = async (req, res) => {
  const { id } = req.params;
  const newGroup = req.body;
  try {
    let data = await model.updateGroup(id, newGroup);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const insertGroup = async (req, res) => {
  const newMember = req.body;
  try {
    let data = await model.insertGroup(newMember);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

// Members
const getAllMembers = async (req, res) => {
  try {
    let data = await model.getAllMembers();
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

const getMemberById = async (req, res) => {
  const { id } = req.params;
  try {
    let data = await model.membersById(id);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

const updateMember = async (req, res) => {
  const { id } = req.params;
  const newMember = req.body;
  try {
    let data = await model.updateMember(id, newMember);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};
const insertMember = async (req, res) => {
  const newMember = req.body;
  try {
    let data = await model.insertMember(newMember);
    return api.ok(res, data);
  } catch {
    return api.error(res, "Internal Server Error", 500);
  }
};

module.exports = {
  getAllMembers,
  getMemberById,
  updateMember,
  insertMember,
  getAllGroup,
  getGroupById,
  updateGroup,
  insertGroup,
};
