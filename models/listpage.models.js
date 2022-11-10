module.exports = (sequelize, Sequelize) => {
    const listpage = sequelize.define("listpage", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return listpage;
  };
  