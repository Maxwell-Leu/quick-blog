const User = require("./user");

const Post = require("./post");
const Comment = require("./comment");

User.hasMany(Post, {
  foreignKey: "created_by",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "created_by",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Comment.belongsTo(User, {
  foreignKey: "created_by",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});




module.exports = { User, Post, Comment };

