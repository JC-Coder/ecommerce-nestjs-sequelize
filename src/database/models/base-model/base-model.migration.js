module.exports = function baseModelMigration(Sequelize) {
  return {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: Sequelize.INTEGER,
      unique: true,
    },
    createdAt: {
      type: Sequelize.BIGINT,
      defaultValue: new Date().getTime().toString(),
      allowNull: false,
    },
  };
};
