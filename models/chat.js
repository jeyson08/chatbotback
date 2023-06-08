const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "./db/database.sqlite"
})

const Chat = sequelize.define(
  "Chat",
  {
    // Model attributes are defined here
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);

// `sequelize.define` also returns the model
console.log(Chat=== sequelize.models.Chat); // true

async function sync() {
  await Chat.sync();
  console.log("The table for the User model was just (re)created!");
}
sync()
module.exports = Chat;
