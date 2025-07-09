const db = require("../database/database");

const getLatestMembers = (req, res) => {
  const query = `SELECT s.id AS sociallink_id, s.facebook_Url, s.whatsapp_Url, s.instagram_Url, s.user_id, u.username,u.shadowname AS psudo_name, u.user_profile, u.user_role FROM social_links AS s JOIN users 
    AS u ON(u.id=s.user_id) LIMIT ?`;
  // ORDER BY create_at DESC LIMIT ?";

  db.query(query, [4], (err, result) => {
    if (err) return res.status(500).json(err.message);

    res.status(200).json(result);
  });
};

const getAllembers = (req, res) => {
  res.json("getting all users");
};

module.exports = { getLatestMembers, getAllembers };
