const db = require("./../database/project");

login = async (username) =>
  await db
    .select(
      "u.user_id",
      "u.username",
      "u.password",
      "u.role_id",
      "r.role_name",
      "r.role_description",
      "u.role_id"
    )
    .from("users as u")
    .join("role as r", "u.role_id", "r.role_id")
    .where("u.username", username);

module.exports = {
  login,
};
