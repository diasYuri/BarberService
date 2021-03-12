const { Router } = require("express");

//Controllers
const UserController = require("./app/controllers/UserController");
const SessionController = require("./app/controllers/SessionController");
const DashboardController = require("./app/controllers/DashboardController");
const FileController = require("./app/controllers/FileController");
const AppointmentController = require("./app/controllers/AppointmentController");
const AvailableController = require("./app/controllers/AvailableController");
const AcessController = require("./app/controllers/Acesscontroller");

const routes = new Router();

const authMiddlewares = require("./app/middlewares/auth");
const guestMiddlewares = require("./app/middlewares/guest");
const acessMiddlewares = require("./app/middlewares/acess");

// middleware para flash message
routes.use((req, res, next) => {
  res.locals.flashSucces = req.flash("success");
  res.locals.flashError = req.flash("error");

  return next();
});

routes.get("/files/:file", FileController.show);

routes.get("/", guestMiddlewares, SessionController.create);
routes.post("/signin", SessionController.store);

routes.get("/signup", guestMiddlewares, UserController.create);
routes.post("/signup", UserController.store);

routes.use("/app", authMiddlewares);

routes.get("/app/logout", SessionController.destroy);

routes.get("/app/dashboard", acessMiddlewares, DashboardController.index);

routes.get("/app/appointments/new/:provider", AppointmentController.create);
routes.post("/app/appointments/new/:provider", AppointmentController.store);
routes.get("/app/available/:provider", AvailableController.index);

/// test
routes.get("/app/dashboard/provider", AcessController.index);

module.exports = routes;
