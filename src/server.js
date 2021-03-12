const express = require("express");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const nunjucks = require("nunjucks");
const path = require("path");
const bodyParser = require("body-parser");
const flash = require("connect-flash");

class App {
  constructor() {
    this.express = express();

    this.middlewares();
    this.views();
    this.routes();
  }

  middlewares() {
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(flash());
    // session
    this.express.use(
      session({
        name: "root",
        secret: "MyAppSecret",
        resave: true,
        store: new FileStore({
          path: path.resolve(__dirname, "..", "tmp", "session")
        }),
        saveUninitialized: false
      })
    );
  }

  views() {
    nunjucks.configure(path.resolve(__dirname, "app", "views"), {
      express: this.express,
      autoescape: true
    });

    this.express.use(express.static(path.resolve(__dirname, "public")));
    this.express.set("view engine", "njk");
  }
  routes() {
    this.express.use(require("./routes"));
  }
}

module.exports = new App().express;
