const { Appointment, User } = require("../models");
const moment = require("moment");

class AcessController {
  async index(req, res) {
    const { id } = req.session.user;
    const appointments = await Appointment.findAll({
      where: { provider_id: id }
    });

    // config for
    moment.locale("pt-br");
    var customers = [];
    var i;

    for (i in appointments) {
      var date = moment(appointments[i].dataValues.date).format(
        "DD/MM/YYYY -- HH:mm"
      );

      var id_customer = appointments[i].dataValues.user_id;
      var { name } = await User.findOne({ where: { id: id_customer } });

      formatCustoms(date, name);
    }

    function formatCustoms(date, name) {
      const customer = {
        name,
        date
      };

      customers.push(customer);
    }

    res.render("dashboardProvider", { customers });
  }
}

module.exports = new AcessController();
