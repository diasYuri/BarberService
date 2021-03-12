module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    // res.locals fica armaazenado em todas as paginas njk para suas informações serem usadas
    res.locals.user = req.session.user;
    return next();
  }

  return res.redirect("/");
};
