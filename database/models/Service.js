module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define(
      'Service',
      {
        uuid: {
          type: DataTypes.STRING,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
        },
        price: {
          type: DataTypes.DECIMAL,
        },
        text: {
          type: DataTypes.STRING(800),
        }, 
        email: {
            type: DataTypes.STRING,
        },
      },
      {
        tableName: 'services',
        timestamps: false,
      }
    );
  
    return Service;
  };