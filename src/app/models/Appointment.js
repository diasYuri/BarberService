module.exports = (sequelize, Datatypes) => {
  const Appointment = sequelize.define("Appointment", {
    date: Datatypes.DATE
  });

  Appointment.associate = models => {
    // associa os dados a um usuario que esta marcando hora, e um prestador de serviços
    Appointment.belongsTo(models.User, { foreignKey: "user_id" });
    Appointment.belongsTo(models.User, { foreignKey: "provider_id" });
  };

  return Appointment;
};
